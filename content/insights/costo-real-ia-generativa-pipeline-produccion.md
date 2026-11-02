---
title: "Conectas IA generativa a producción y el costo real aparece cuando ya no puedes medirlo"
description: "El error más frecuente al integrar IA generativa en un pipeline: ignorar el costo de tokens e imágenes hasta que la factura llega."
tag: "Costos de IA"
date: "2026-11-02"
---

Integras un modelo de lenguaje a tu pipeline. Funciona en staging. Apruebas el deploy. Dos semanas después, la factura del proveedor duplica lo que proyectaste.

No es un caso raro. Es el patrón más frecuente al llevar IA generativa a producción, y el problema no es el precio del modelo: es que nadie midió el costo real mientras todavía había tiempo de cambiar algo.

## Por qué el costo es invisible hasta que explota

En desarrollo, las llamadas al API son pocas y manuales. Ves el token count en el playground, lo das por conocido y sigues. En producción, ese número se multiplica por cada usuario, cada retry, cada prompt que creció porque alguien le agregó contexto extra la semana pasada.

Los tres puntos donde el costo se escapa sin que lo veas:

- **Prompts que crecen sin control.** Cada vez que alguien optimiza la respuesta agregando instrucciones al system prompt, el input token count sube. Si nadie lo instrumenta, nunca te enteras hasta que el modelo lo reporta en la factura.
- **Llamadas redundantes.** Sin caché, cada request genera una llamada nueva aunque el input sea idéntico al anterior. En flujos de automatización con n8n o similares, esto se multiplica rápido.
- **Generación de imágenes sin rate tracking.** Las llamadas a modelos de imagen (DALL-E, Stable Diffusion API, Imagen) no se miden con tokens sino por unidad. Es fácil ignorarlas en el modelo de costos porque tienen una métrica distinta. Cuando el volumen escala, aparecen como línea nueva en la factura que nadie anticipó.

## Qué medir y desde cuándo

La respuesta correcta es instrumentar antes del primer deploy a producción, no después de la primera anomalía.

Lo mínimo que necesitas capturar en cada llamada:

- Tokens de entrada y salida por separado (tienen precios distintos en la mayoría de los modelos)
- Modelo exacto usado (si el pipeline puede cambiar entre versiones, el costo cambia con él)
- Timestamp y ID de usuario o flujo que originó la llamada
- Resultado de caché hit / miss si usas alguna capa de caché semántico
- Para imágenes: resolución, cantidad y proveedor

Esa data va a una tabla, no a un log. Los logs se leen cuando hay un incidente. Una tabla se puede agregar, graficar y alertar en tiempo real.

## El patrón que funciona en pipelines con n8n y Supabase

En una arquitectura con n8n como orquestador y Supabase como backend, el patrón es directo: cada nodo que llama a un modelo de IA escribe una fila en una tabla `ai_usage` antes de continuar el flujo. No después, antes, para capturar incluso las llamadas que fallan.

Esa tabla tiene al menos: `flow_id`, `model`, `input_tokens`, `output_tokens`, `image_calls`, `cost_usd`, `created_at`.

Con eso puedes construir una vista que agregue costo por flujo, por día, por usuario. Puedes poner un alert en Supabase que dispare un webhook a n8n si el costo diario supera un umbral. El flujo puede pausarse, notificar al equipo o degradar gracefully a un modelo más barato.

Nada de esto es complejo. Lo complejo es hacerlo retroactivamente cuando ya tienes tres semanas de producción sin datos.

## La regla que aplica siempre

Si no puedes responder en menos de un minuto cuánto costó ayer tu pipeline de IA, no tienes visibilidad: tienes esperanza.

La visibilidad de costos no es una tarea de DevOps para más adelante. Es una condición de producción. Igual que los logs de errores o el uptime monitoring, va desde el primer día o no sirve de nada.

Diséñala antes de que la necesites. Cuando la necesites, ya será tarde para tener historia.
