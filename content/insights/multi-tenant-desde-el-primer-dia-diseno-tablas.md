---
title: "Multi-tenant desde el primer día: diseña las tablas bien o reescribe todo después"
description: "Agregar multi-tenancy a una base de datos que no lo contempló desde el inicio es una reescritura. Así se evita."
tag: "Arquitectura"
date: "2026-10-26"
---

Arrancas el proyecto solo o con un cliente interno. Las tablas son simples, sin columna `tenant_id`, sin Row Level Security, sin nada. Funciona. Rápido.

Después llega el segundo cliente. O el primero externo. Y ahí descubres que tienes un monolito de datos sin ninguna separación lógica entre organizaciones.

Agregar multi-tenancy a una base de datos que ya tiene datos en producción no es una feature. Es una reescritura con riesgo de pérdida o contaminación de datos.

## El error que se repite

La lógica es comprensible: "Por ahora somos uno solo, no compliquemos." El problema es que "por ahora" dura exactamente hasta el momento en que ya no puedes tocar la estructura sin romper algo.

Las tablas sin `tenant_id` asumen implícitamente que solo existe un tenant. Cada query, cada join, cada índice está construido sobre esa suposición. Cuando intentas agregar la columna después, no es solo alterar una tabla: es auditar cada endpoint, cada función, cada política de acceso para garantizar que ningún cliente vea datos del otro.

En Supabase con Row Level Security, eso significa revisar todas las policies existentes y reescribirlas. En n8n, significa auditar cada workflow que lee o escribe datos. El costo no es técnico solamente: es tiempo, es riesgo, es credibilidad frente al nuevo cliente.

## Cómo se hace bien desde el inicio

**Columna `tenant_id` en cada tabla de negocio.** No en las tablas de catálogo global, pero sí en todo lo que pertenece a un cliente: pedidos, usuarios, configuraciones, documentos, logs de operación. La columna va con `NOT NULL` y con una foreign key hacia una tabla `tenants`.

**Row Level Security activado desde el día uno.** En Supabase, esto significa habilitar RLS en cada tabla y crear policies que filtren por `tenant_id` usando el JWT del usuario autenticado. Un patrón común:

```sql
CREATE POLICY "tenant_isolation" ON pedidos
  USING (tenant_id = (auth.jwt() -> 'app_metadata' ->> 'tenant_id')::uuid);
```

Con esto, aunque un query olvide el filtro a nivel de aplicación, la base de datos lo aplica igual. Es defensa en profundidad.

**Índices compuestos con `tenant_id` primero.** Si vas a buscar pedidos por estado, el índice no es `(estado)`, es `(tenant_id, estado)`. El planificador de queries lo agradece y los scans no se cruzan entre organizaciones.

**Separación en el contexto de sesión.** En workflows de n8n que operan con credenciales de servicio (sin JWT de usuario), el `tenant_id` tiene que viajar explícito en cada operación. Documenta ese contrato desde el inicio o cada integración nueva va a romper el aislamiento sin que nadie lo note.

## Lo que no es multi-tenancy

Una base de datos por cliente no escala operativamente. Puedes justificarlo en casos con requisitos de compliance muy estrictos, pero para la mayoría de operaciones B2B es overhead puro: migraciones multiplicadas por N clientes, Coolify con instancias duplicadas, backups que crecen sin control.

El modelo de `tenant_id` + RLS resuelve el 90% de los casos con una sola instancia de Supabase, una sola instancia de la aplicación, y aislamiento garantizado a nivel de base de datos.

## El momento de hacer esto es ahora

Si el proyecto todavía no tiene datos de producción de múltiples clientes, tienes una ventana limpia. Agregar `tenant_id` a tablas vacías toma una tarde. Agregarlo a tablas con datos reales de clientes que no pueden tener downtime toma semanas y una estrategia de migración que nadie quiere escribir.

Diseña para varios clientes aunque hoy tengas uno. No porque seas optimista sobre el crecimiento, sino porque el costo de hacerlo después supera con creces el costo de hacerlo ahora.
