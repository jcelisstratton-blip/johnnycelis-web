---
title: "La arquitectura detrás de Nido: Automatizando finanzas con Supabase y Telegram"
description: "Cómo construimos un dashboard autónomo de finanzas personales que ingiere notificaciones bancarias de correos IMAP y Telegram."
tag: "Finanzas con IA"
date: "2026-09-09"
---

El registro manual de gastos suele abandonarse rápido. Nido soluciona esto automatizando la ingesta: cada vez que un banco colombiano envía una alerta de compra por correo, un webhook de n8n lee la notificación mediante Gmail IMAP, extrae el monto, clasifica la categoría de gasto y lo registra en Supabase. Si el usuario realiza un gasto en efectivo, puede enviarlo al instante mediante un mensaje de texto a un bot privado de Telegram. Todo el dashboard es renderizado en Vercel.
