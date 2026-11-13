# RRSS — Monitor Éxito

Workflow n8n (`A0urwLeGQpjuV97V`, instancia Stratt-On) que vigila los perfiles de Éxito en
Facebook, Instagram, Threads, TikTok, X y LinkedIn, avisa cada publicación nueva por Telegram
(bot «Interacción RRSS») y publica el comentario que Johnny apruebe.

| Archivo | Qué es |
|---|---|
| `workflow.json` | Export del workflow (fuente: los `.js` y `schema.sql` de esta carpeta) |
| `schema.sql` | Tabla de estado `rrss_monitor_posts` (Postgres Social) |
| `fuentes.js` | Perfiles vigilados y actor de Apify que lee cada uno |
| `normalizar.js` | Unifica la salida de los scrapers y detecta fuentes caídas |
| `interpretar.js`, `decidir.js` | Leen el botón o la respuesta de Telegram |
| `publicar.js` | Comenta por API (LinkedIn, Threads) o entrega el comentario asistido |

## Flujo

1. Cada día a las 10:00 (America/Bogota) lee las 3 últimas publicaciones por perfil (ventana de 72 h) con Apify; Threads se
   intenta además por la API oficial (`profile_posts`), que es la única que da un id comentable.
2. Cada publicación nueva llega a Telegram con «🤖 Sugerir», «⏭ Omitir» y el enlace.
3. Responder (reply) al aviso con un texto lo publica; «🤖 Sugerir» redacta un borrador que se
   publica solo con «✅ Publicar».
4. Publicación del comentario:
   - **LinkedIn** y **Threads**: API oficial con la cuenta personal de `social_accounts`.
   - **X**: enlace que abre la respuesta con el texto precargado.
   - **Facebook, Instagram, TikTok**: texto listo para copiar + enlace. Sus APIs no permiten
     comentar publicaciones ajenas desde un perfil personal.
   - Si una API rechaza el comentario, cae al modo asistido con el motivo.

## Puesta en marcha

1. Credencial n8n «Apify» (Header Auth): reemplazar el valor por `Bearer <token de Apify>`.
2. Los seis actores de `fuentes.js` están verificados contra Apify (13-nov-2026).
3. Activar el workflow (registra el webhook del bot para botones y respuestas).
