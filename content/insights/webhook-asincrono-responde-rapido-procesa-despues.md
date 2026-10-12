---
title: "Webhook asíncrono: responde rápido, procesa después"
description: "Cuando un proceso tarda más de lo que aguanta una request HTTP, el webhook asíncrono es la única salida. Aquí está el patrón."
tag: "Arquitectura"
date: "2026-10-12"
---

Tienes un webhook que dispara un proceso pesado: genera un PDF, llama a una IA, sincroniza datos con un ERP, manda emails en lote. El problema es siempre el mismo: ese proceso tarda 15, 30, 60 segundos. Y la request HTTP que lo disparó no puede esperar.

Los clientes HTTP tienen timeouts. Los proxies también. Stripe, Shopify, cualquier plataforma que emita webhooks espera una respuesta 200 en menos de 5-10 segundos antes de marcar la entrega como fallida y reintentar. Si tu lógica real vive dentro de ese handler, estás jugando contra el reloj — y perdiéndolo.

Este es el problema que resuelve el patrón de respuesta rápida con procesamiento diferido.

## Cómo funciona el patrón

El flujo tiene tres pasos bien separados:

1. **Recibir y acusar recibo.** El endpoint recibe el evento, valida lo mínimo necesario (firma HMAC, estructura del payload), guarda el trabajo en una cola o tabla, y responde 200 inmediatamente. Nada más.
2. **Encolar el trabajo.** El payload o un identificador del trabajo entra a una cola durable: puede ser una tabla en Postgres con status `pending`, una queue de Redis, o cualquier mecanismo que sobreviva a un reinicio.
3. **Procesar en segundo plano.** Un worker independiente levanta el trabajo de la cola, lo ejecuta sin presión de tiempo, y actualiza el estado cuando termina.

El emisor del webhook recibe su 200 en milisegundos. El trabajo real ocurre después, desacoplado del ciclo de vida de esa request.

## Por qué una tabla de Postgres es suficiente cola

No necesitas infraestructura de mensajería sofisticada para la mayoría de los casos. Una tabla con columnas `id`, `payload`, `status`, `created_at` y `processed_at` hace el trabajo.

El handler escribe un registro con `status = 'pending'`. Un proceso separado — un cron cada 30 segundos, un trigger de base de datos, un loop en n8n — consulta los registros pendientes y los procesa. Si el proceso falla, el registro queda en `pending` o pasa a `failed`, y tienes historial completo para reintentar o depurar.

Esto funciona en Supabase sin configuración adicional. La tabla es auditable, consultable y no requiere aprender otra tecnología.

## Qué falla si no aplicas este patrón

- **Reintentos duplicados.** El emisor no recibió el 200 a tiempo, reintenta, y tu sistema procesa el mismo evento dos veces. Si el proceso muta estado, tienes un problema de integridad.
- **Timeouts en cadena.** Si tu handler llama a una API externa que también es lenta, un timeout en esa llamada mata toda la operación y el emisor no sabe qué pasó.
- **Pérdida silenciosa de eventos.** Un deploy en medio de un proceso largo mata el worker. Sin cola durable, ese trabajo desaparece sin trazas.
- **Acoplamiento frágil.** Tu lógica de negocio queda rehén de los SLAs de transporte HTTP de terceros.

## Cómo se implementa en n8n

El patrón encaja directo en n8n con dos flujos separados:

**Flujo receptor:** Webhook node → Supabase Insert (inserta el payload en la tabla de cola) → Respond to Webhook node (200 OK). Este flujo es deliberadamente trivial.

**Flujo procesador:** Schedule Trigger (cada N segundos) → Supabase Select (registros con `status = 'pending'`) → lógica de negocio → Supabase Update (marca como `completed` o `failed`).

Si el volumen crece o necesitas procesamiento inmediato sin polling, reemplaza el Schedule Trigger por un Postgres Trigger via Supabase Realtime. El flujo receptor no cambia en absoluto.

## La regla de oro

Si un proceso tarda más de tres segundos, no pertenece al handler del webhook. Acusa recibo, encola, procesa aparte. El caller no necesita saber cómo lo haces. Solo necesita su 200.

Este patrón no es una optimización. Es la diferencia entre un sistema que aguanta producción y uno que falla en silencio bajo carga.
