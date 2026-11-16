---
title: "Cuánto cuesta generar contenido con IA por publicación"
description: "Desglose real del costo por tipo de contenido generado con IA: texto, imagen y audio. No todos los formatos cuestan igual."
tag: "Costos de IA"
date: "2026-11-16"
---

El número que ves en la factura de tu proveedor de IA no es el costo real de producir una pieza de contenido. Es solo una parte. El costo total incluye el modelo, el prompt engineering, el almacenamiento, las llamadas a la API y el tiempo de revisión humana. Descomponerlo por formato cambia completamente la ecuación.

## Texto: barato por token, caro por volumen

Generar un artículo de 800 palabras con un modelo como GPT-4o o Claude 3.5 Sonnet cuesta entre USD 0,01 y USD 0,05 por pieza, dependiendo del largo del prompt de sistema, el contexto que le pasas y cuántas iteraciones necesitas para llegar a un resultado usable.

El problema no es el costo por pieza. Es el costo por pieza *útil*. Si necesitas tres pasadas para que el texto tenga el tono correcto, estás multiplicando por tres. Si además alimentas el prompt con contexto largo (brief de marca, ejemplos anteriores, instrucciones detalladas), el costo de input sube antes de generar una sola palabra de output.

Para texto, la palanca de optimización está en el prompt: un prompt bien diseñado una sola vez reduce iteraciones en cada ejecución futura. El costo de ingeniería inicial se amortiza rápido.

## Imagen generada: el salto de orden de magnitud

Aquí la diferencia es brutal. Generar una imagen con DALL-E 3 en resolución estándar cuesta alrededor de USD 0,04 por imagen. Con Midjourney, dependiendo del plan, el costo por imagen puede ir de USD 0,01 a USD 0,10 cuando se divide el plan mensual entre el volumen real de imágenes que produces.

Pero el costo real no es ese. Es la combinación de:

- **Intentos fallidos**: generar 10 imágenes para usar 1 o 2 es la norma, no la excepción.
- **Refinamiento**: cada variación, upscale o ajuste consume créditos adicionales.
- **Revisión legal**: imágenes generadas pueden requerir revisión antes de publicarse en ciertos contextos (uso comercial, likeness de personas, marcas).
- **Post-producción**: si la imagen necesita ajustes en Figma o Photoshop, hay tiempo humano que sumar.

Una imagen final lista para publicar puede costar 5x o 10x más que el precio del API si se cuenta todo.

## Audio y video: el techo más alto

Síntesis de voz para un podcast o narración de un minuto cuesta entre USD 0,01 y USD 0,15 dependiendo del modelo y la voz. Parece poco. Pero producir un episodio de 10 minutos con guion generado, narración sintetizada, edición y exportación lleva capas de herramientas encadenadas, cada una con su propio costo.

Video generado con herramientas como Runway o Pika es, por ahora, el formato más caro por unidad de contenido usable. Los clips de pocos segundos que se ven bien cuestan varios dólares cada uno, y la tasa de descarte es alta.

## El denominador oculto: la infraestructura que conecta todo

Si automatizas la producción de contenido (y deberías), hay costos de orquestación que la mayoría ignora:

- El servidor o instancia que corre los workflows (aunque en Coolify self-hosted el costo marginal por ejecución es casi cero).
- El almacenamiento de outputs en Supabase o S3.
- Las llamadas a APIs de distribución (CMS, redes sociales).
- El costo de los logs y el monitoreo.

Estos costos son fijos o casi fijos, lo que significa que a mayor volumen, el costo por pieza cae. A bajo volumen, pueden ser el componente más caro de todos.

## Qué significa esto para una operación real

Antes de escalar producción de contenido con IA, mapea esto:

1. ¿Cuántas iteraciones promedio necesita cada tipo de contenido antes de ser publicable?
2. ¿Qué porcentaje del output usas versus descartas?
3. ¿Cuánto tiempo humano consume la revisión final?

El costo del modelo es el número más visible y el menos relevante. Lo que determina si la automatización es rentable es la tasa de output usable y la fricción de revisión. Ahí está el verdadero margen.
