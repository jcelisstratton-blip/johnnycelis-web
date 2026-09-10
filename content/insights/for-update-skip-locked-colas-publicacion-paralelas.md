---
title: "FOR UPDATE SKIP LOCKED: el patrón que evita colisiones en colas de publicación paralelas"
description: "Por qué claim_due_posts sin FOR UPDATE SKIP LOCKED destruye tu cola cuando corren varios workers. El patrón concreto que lo resuelve."
tag: "Orquestación n8n"
date: "2026-09-10"
---

Tienes una función `claim_due_posts` que busca filas listas para publicar y las marca como `claimed`. Funciona perfecto con un solo worker. Pones dos workers en paralelo y empiezas a ver posts publicados dos veces, estados corruptos, o ambos procesos peleando por la misma fila.

El problema no es tu lógica de negocio. Es la ausencia de un lock a nivel de fila en el momento exacto de la selección.

## Qué pasa sin el lock

Cuando dos transacciones ejecutan el mismo `SELECT ... WHERE status = 'pending' ORDER BY scheduled_at LIMIT 10` al mismo tiempo, ambas leen el mismo conjunto de filas. Ninguna sabe que la otra existe. Luego cada una ejecuta su `UPDATE` para marcar esas filas como `claimed`.

Postgres resuelve el conflicto de escritura: una transacción gana, la otra bloquea y espera. Pero cuando la segunda finalmente escribe, no revisa si el estado cambió — simplemente sobreescribe. Resultado: ambos workers creen que son dueños de las mismas filas. Publicas dos veces, o el segundo worker pisa el estado que dejó el primero.

Usar `status = 'claimed'` como guardia en el `WHERE` del `UPDATE` no alcanza si el `SELECT` inicial ya trajo esas filas antes de que el otro worker escribiera.

## La solución: SELECT FOR UPDATE SKIP LOCKED

```sql
WITH claimed AS (
  SELECT id
  FROM posts
  WHERE status = 'pending'
    AND scheduled_at <= now()
  ORDER BY scheduled_at
  LIMIT 10
  FOR UPDATE SKIP LOCKED
)
UPDATE posts
SET status = 'claimed',
    claimed_at = now(),
    claimed_by = $1
FROM claimed
WHERE posts.id = claimed.id
RETURNING posts.*;
```

`FOR UPDATE` adquiere un lock exclusivo sobre cada fila que el `SELECT` retorna. Ninguna otra transacción puede tocar esas filas hasta que la actual haga commit o rollback.

`SKIP LOCKED` es la parte crítica para workers paralelos: en vez de que el segundo worker espere a que el primero libere sus locks (bloqueando), directamente salta esas filas y toma las siguientes disponibles. Cada worker opera sobre un conjunto disjunto. Sin contención, sin esperas, sin colisiones.

## Por qué el CTE importa

El patrón correcto es encerrar el `SELECT FOR UPDATE SKIP LOCKED` dentro de un CTE y hacer el `UPDATE` sobre ese resultado. Si separas el `SELECT` del `UPDATE` en dos statements distintos — incluso dentro de la misma transacción — el lock se libera entre statements en algunos contextos, o peor, otro worker puede colarse en el medio si no estás en el nivel de aislamiento correcto.

Con el CTE, la selección y la actualización ocurren como una unidad atómica. Las filas quedan bloqueadas desde que el `SELECT` las toca hasta que el `UPDATE` hace commit.

## Qué revisar si sigues viendo duplicados

- **Autocommit activo**: si tu cliente ejecuta cada statement en su propia transacción, el CTE no ayuda. Necesitas `BEGIN` / `COMMIT` explícitos.
- **Nivel de aislamiento**: `READ COMMITTED` es suficiente para este patrón. `SERIALIZABLE` agrega overhead innecesario y puede generar rollbacks espurios bajo carga.
- **Timeout de lock**: si un worker muere con filas en estado `claimed`, necesitas un mecanismo de recolección — un job periódico que libere claims con más de N minutos sin avanzar. `FOR UPDATE SKIP LOCKED` no resuelve workers caídos; solo resuelve la concurrencia.
- **Índice sobre `(status, scheduled_at)`**: sin él, el `SELECT` hace seq scan y el lock se aplica tarde. El índice hace que Postgres llegue rápido a las filas candidatas y las bloquee antes de que otro worker las vea.

## El patrón aplicado en n8n + Supabase

Cuando implementas este patrón como función RPC en Supabase y la llamas desde un nodo de n8n en múltiples instancias paralelas, el comportamiento es predecible: cada ejecución del workflow reclama su propio lote, sin solapamiento. La función devuelve vacío cuando no hay trabajo disponible — condición que puedes usar para detener la rama sin error.

La cola es confiable exactamente porque el lock ocurre dentro de la base de datos, no en la capa de aplicación. No necesitas Redis, no necesitas un coordinador externo. Postgres ya tiene todo lo que necesitas.
