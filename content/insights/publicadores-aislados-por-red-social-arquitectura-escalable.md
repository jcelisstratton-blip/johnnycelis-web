---
title: "Publicadores aislados por red social: la arquitectura que permite escalar volumen real"
description: "Un despachador monolítico para redes sociales no escala. Separar cada red en su propio flujo es la diferencia técnica que lo cambia todo."
tag: "Arquitectura"
date: "2026-09-28"
---

Un solo flujo que publica en Twitter, LinkedIn, Instagram y TikTok al mismo tiempo parece eficiente. Es lo opuesto.

Cuando una red falla, el flujo entero se detiene. Cuando una API cambia su límite de velocidad, el resto de las redes espera. Cuando necesitas aumentar el volumen en LinkedIn pero no en Instagram, no puedes. Todo está cosido junto.

Eso es un despachador monolítico. Y es la razón por la que la mayoría de los sistemas de publicación automatizada colapsan antes de llegar a escala.

## Qué significa aislar por red

Cada red social tiene su propio flujo en n8n: un worker dedicado, su propia cola de mensajes, su propio manejo de errores, sus propios reintentos.

El flujo orquestador hace una sola cosa: recibe el contenido aprobado, lo enruta al flujo correcto según el destino, y registra el estado en Supabase.

A partir de ahí, cada publicador opera de forma completamente independiente. El flujo de LinkedIn no sabe que existe el de Instagram. No comparten estado, no comparten límites de tasa, no comparten fallas.

## Por qué esto cambia la ecuación de escala

Cuando publicas 10 piezas por semana, la arquitectura no importa demasiado. A 200 piezas, empieza a importar. A 1.000, una arquitectura monolítica ya no funciona.

Las razones son técnicas y concretas:

- **Rate limits independientes.** Twitter permite X llamadas por ventana de 15 minutos. LinkedIn tiene sus propios límites. Si comparten flujo, el throttling de uno bloquea al otro. Separados, cada flujo gestiona su ventana de forma autónoma.
- **Reintentos sin efecto colateral.** Si el post de Instagram falla por un error de imagen, solo se reintenta ese flujo. El resto sigue publicando.
- **Escalado selectivo.** Necesitas duplicar el volumen en LinkedIn este mes. Cambias la configuración de ese flujo, no de todo el sistema.
- **Observabilidad real.** En Supabase tienes una tabla de estado por red. Sabes exactamente qué falló, dónde, cuándo y por qué. En un monolito, el log de error mezcla todo.

## El patrón de enrutamiento

El orquestador recibe un payload con el contenido y un array de destinos. Por cada destino, dispara el flujo correspondiente con un webhook o una llamada directa según el entorno.

Cada flujo publicador:

1. Recibe el payload
2. Adapta el formato (cada red tiene sus propias restricciones de texto, imagen, video)
3. Ejecuta la publicación contra la API
4. Escribe el resultado en Supabase: `published`, `failed`, `queued`
5. Si falla, aplica backoff exponencial y reintenta hasta N veces
6. Si supera los reintentos, dispara una alerta y registra el error con contexto

El orquestador no espera respuesta. Dispara y sigue. La trazabilidad queda en la base de datos, no en la memoria del flujo.

## Qué pasa si no separas

El flujo monolítico parece más simple de construir. Y lo es, al principio.

El problema aparece cuando LinkedIn hace un breaking change en su API. Tienes que detener todo el sistema para corregirlo. Mientras tanto, nada publica en ninguna red.

O cuando necesitas agregar Threads como nuevo canal. En una arquitectura aislada, creas un flujo nuevo, lo conectas al enrutador, y listo. En un monolito, editas un flujo que ya tiene lógica de cuatro redes entrelazada. Cada cambio es riesgo de regresión.

## La regla operativa

Si el volumen de publicación va a crecer, si las redes pueden cambiar, si el equipo de contenido necesita confiabilidad — no construyas un monolito.

Separa desde el diseño inicial. El costo de hacerlo bien desde el principio es menor que el costo de migrar después, cuando ya hay producción corriendo y el sistema ya está fallando.

La arquitectura de publicación no es un detalle de implementación. Es la decisión que define si el sistema puede sostener el crecimiento o no.
