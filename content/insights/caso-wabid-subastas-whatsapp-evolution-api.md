---
title: "Wabid: subastas en WhatsApp con Evolution API"
description: "El caso de estudio de cómo rediseñamos la experiencia de pujas y ventas interactivas usando la API de WhatsApp más versátil del mercado."
tag: "Evolution API"
date: "2026-09-09"
---

Las subastas tradicionales por correo o web sufren de fricción y baja retención. Con Wabid, decidimos llevar toda la experiencia a WhatsApp mediante la Evolution API. La plataforma permite a los usuarios registrarse, realizar pujas, recibir notificaciones instantáneas de sobrepujas y procesar el cierre del lote directamente en el chat. La lógica de control está orquestada con n8n, conectando bases de datos en tiempo real y garantizando notificaciones rápidas y seguras.

## El problema de las subastas tradicionales

Una subasta por correo o por una web depende de que el participante abra un enlace, inicie sesión y regrese varias veces a revisar si alguien superó su oferta. Cada paso es una oportunidad de abandono. En una subasta, donde el tiempo define el resultado, esa fricción se traduce en menos pujas y en ventas más bajas.

## Por qué WhatsApp

WhatsApp es la aplicación que los participantes ya tienen abierta y revisan varias veces al día. Llevar la subasta al chat elimina el registro en una plataforma aparte: el usuario participa desde la misma conversación donde recibe los avisos.

## Cómo funciona el flujo

- **Registro**: el usuario se identifica escribiendo al número de la subasta.
- **Pujas**: envía su oferta como un mensaje y el sistema valida que supere la puja vigente.
- **Notificaciones**: cuando alguien supera su oferta, recibe el aviso al instante y puede responder de inmediato.
- **Cierre**: al terminar el tiempo del lote, el sistema declara al ganador y continúa con el pago o la entrega en el mismo chat.

## La arquitectura detrás

Evolution API conecta WhatsApp con el resto del sistema. n8n orquesta la lógica: valida cada puja, actualiza la base de datos y dispara las notificaciones. Mantener el estado de la subasta en una base de datos, y no en la conversación, es lo que permite resolver empates, evitar pujas duplicadas y reconstruir qué pasó si hay una disputa.

## Qué conviene cuidar

Las reglas de la subasta deben estar escritas de forma explícita en el chat, porque los usuarios rara vez leen manuales. La validación debe ser estricta: una puja inválida tiene que recibir una respuesta clara, no silencio. Y el envío de mensajes debe diseñarse con límites, porque en WhatsApp la forma de enviar importa tanto como lo que se envía. Para entender mejor los riesgos de operar en producción, revisa también nuestro artículo sobre Evolution API.
