---
title: "Automatizar WhatsApp con Evolution API: lo que funciona y lo que te rompe en producción"
description: "Qué puedes hacer realmente con Evolution API en WhatsApp y las trampas no documentadas que solo aparecen cuando el sistema está vivo."
tag: "Evolution API"
date: "2026-10-19"
---

Evolution API es hoy la opción más usada para conectar WhatsApp a flujos de automatización con n8n o cualquier backend propio. La documentación oficial cubre lo básico. Lo que no cubre es lo que te corta el proyecto a mitad de camino.

Este artículo va directo a eso: qué se puede hacer, cómo se hace bien y dónde está la trampa.

## Qué puedes hacer realmente

Evolution API expone WhatsApp Business (y cuentas personales vía Baileys) como una API REST. Las capacidades reales que funcionan en producción:

- **Envío de mensajes de texto, imágenes, audio y documentos** a contactos individuales. Funciona de forma estable si el número origen lleva tiempo activo.
- **Broadcast a listas** mediante peticiones iteradas. No hay un endpoint nativo de broadcast masivo; construyes el loop en n8n o en tu servicio y disparas mensaje a mensaje con delay controlado.
- **Recepción de mensajes vía webhook**. Evolution postea cada evento entrante (mensaje, estado de lectura, cambio de estado del contacto) a la URL que configures. Desde ahí, n8n toma el control.
- **Gestión de grupos**: crear, agregar participantes, enviar mensajes. Funciona, pero con restricciones de rate que WhatsApp aplica sin avisar.
- **Estados (Stories)**. Se pueden publicar estados de texto, imagen y video. La API lo soporta. La trampa viene después (ver más abajo).
- **Webhooks de estado de entrega**: `sent`, `delivered`, `read`. Útil para lógica de reintento o seguimiento de conversaciones.

## Cómo estructurar el flujo sin que explote

El error más común: tratar a WhatsApp como si fuera un canal de email marketing. No lo es.

WhatsApp tiene detección activa de comportamiento automatizado. Si tu instancia envía demasiados mensajes en poco tiempo hacia números que no tienen tu contacto guardado, la cuenta se banea. Sin advertencia, sin apelar fácil.

Las reglas que aplican en producción:

- **Delay entre mensajes en broadcast**: mínimo 3-5 segundos entre envíos. En volúmenes altos, sube a 10-15 segundos y aleatoriza el intervalo. Un patrón demasiado uniforme es señal de bot.
- **Warm-up obligatorio**: una instancia nueva no puede arrancar enviando 500 mensajes el día uno. Empieza con volúmenes bajos durante días o semanas según el caso.
- **Número de origen**: usa un número dedicado, no el número principal del negocio. Si lo banean, pierdes el canal, no solo la automatización.
- **Gestión de sesión**: la sesión QR de Baileys caduca. Necesitas lógica de reconexión automática y alertas cuando la instancia cae. En producción sin monitoreo, la instancia puede llevar horas caída sin que nadie lo sepa.

## Las trampas que solo aparecen en producción

**Estados (Stories) y su inconsistencia**: la API acepta la petición, devuelve 200, pero el estado no siempre aparece para todos los contactos. La visibilidad de estados en WhatsApp depende de configuraciones de privacidad del receptor que tu API no puede leer. No hay forma de confirmar entrega real. Si construyes un flujo crítico sobre estados, estás construyendo sobre arena.

**Webhooks que se pierden**: Evolution no tiene reintentos nativos robustos en todas las versiones. Si tu endpoint de n8n está caído cuando llega un evento, ese evento se pierde. La solución es interponer una cola (Redis, Supabase + función Edge, o un endpoint propio que persista antes de procesar).

**Cambios de QR en self-hosting**: en Coolify o cualquier entorno containerizado, un reinicio del contenedor sin volumen persistente correctamente configurado destruye la sesión. El número tiene que escanear QR de nuevo. En producción, eso significa caída manual. Mapea el volumen desde el primer deploy.

**Rate limiting silencioso**: WhatsApp no devuelve un error HTTP claro cuando te está limitando. El mensaje sale de Evolution como enviado, pero nunca llega. El receptor no lo recibe. Tu log dice 200. Solo lo detectas con confirmación externa o monitoreando tasas de `delivered` en los webhooks.

**Números no registrados**: si intentas enviar a un número que no tiene WhatsApp activo, la API puede colgar la petición o devolver un error genérico. Valida existencia antes de incluir un número en cualquier lista de envío.

## Qué no hacer

- No uses Evolution para spam. No porque sea cuestionable éticamente (aunque lo es), sino porque la cuenta dura días.
- No construyas sobre la versión de Baileys que se conecta a cuentas personales si tienes un caso de uso que escala. Para escala, WhatsApp Business API oficial (vía Meta o BSPs) es la ruta correcta aunque sea más cara.
- No asumas que lo que funciona en staging funciona igual en producción con otro número, otro volumen y otra red.

Evolution API es una herramienta real con casos de uso reales. Pero requiere arquitectura, no solo configuración.
