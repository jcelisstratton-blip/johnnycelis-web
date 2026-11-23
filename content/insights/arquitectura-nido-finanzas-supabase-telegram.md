---
title: "Nido: finanzas con Supabase y Telegram"
description: "Cómo construimos un dashboard autónomo de finanzas personales que ingiere notificaciones bancarias de correos IMAP y Telegram."
tag: "Finanzas con IA"
date: "2026-09-09"
---

El registro manual de gastos suele abandonarse rápido. Nido soluciona esto automatizando la ingesta: cada vez que un banco colombiano envía una alerta de compra por correo, un webhook de n8n lee la notificación mediante Gmail IMAP, extrae el monto, clasifica la categoría de gasto y lo registra en Supabase. Si el usuario realiza un gasto en efectivo, puede enviarlo al instante mediante un mensaje de texto a un bot privado de Telegram. Todo el dashboard es renderizado en Vercel.

## El problema de registrar gastos a mano

Casi todas las personas que intentan llevar sus finanzas empiezan con entusiasmo y abandonan en pocas semanas. La razón no es falta de disciplina: registrar cada gasto exige un esfuerzo constante, y cada día que se omite deja un hueco difícil de reconstruir.

## Cómo funciona la ingesta

1. El banco envía una alerta de compra por correo.
2. Un webhook de n8n lee el mensaje mediante Gmail IMAP.
3. El sistema extrae el monto y el comercio.
4. Clasifica el gasto en una categoría.
5. Guarda el registro en Supabase.

El usuario no hace nada: el dato llega solo, poco después de la compra.

## El caso del efectivo

No todo gasto genera una notificación bancaria. Para los pagos en efectivo, Nido usa un bot privado de Telegram: el usuario escribe un mensaje breve con el gasto y el sistema lo registra junto con el resto. Tener un solo canal de entrada para los gastos manuales evita abrir una aplicación aparte.

## Por qué Supabase

Supabase aporta una base de datos PostgreSQL con autenticación y políticas de seguridad por fila. En una aplicación de finanzas personales esto es importante: cada usuario debe ver únicamente sus propios datos, y esa regla debe vivir en la base de datos, no solo en la interfaz. El dashboard se renderiza en Vercel y consulta esos datos de forma segura.

## Decisiones que importan en un sistema así

- **Los correos son la fuente de verdad**: conviene conservar la referencia al mensaje original para poder auditar cualquier monto.
- **Evitar duplicados**: una misma compra puede llegar por varios canales, así que cada movimiento debe identificarse de forma única antes de guardarse.
- **Clasificación revisable**: la categoría sugerida automáticamente tiene que poder corregirse.

## Qué demuestra

Un producto útil puede construirse con piezas simples: un flujo de n8n, una base de datos bien configurada y un bot. La complejidad no está en la tecnología, sino en cuidar los casos límite, como formatos de correo distintos, montos en otras monedas y mensajes que no corresponden a un gasto.
