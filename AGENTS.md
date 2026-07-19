# Proyecto Stratt-On

## Identidad visual
Toda UI, componente o contenido de marca sigue estrictamente las
directrices de `docs/STRATTON-BRAND.md` (misma fuente que
`.agents/rules/stratton-brand.md`). Los logos oficiales están en
`public/brand/` — usarlos siempre por ruta, nunca recrearlos.

## Panel Central (`/panelcentral`)
Panel de comando interno de estrategia H2-2026 — uso exclusivo de Johnny,
protegido con Basic Auth. No es contenido público ni cara al cliente.

- **Componente:** `src/app/panelcentral/PanelComando.tsx` — toda la lógica,
  datos de tareas/episodios y estilos viven embebidos en este único archivo.
  No fragmentar en más componentes sin razón explícita.
- **Persistencia:** Supabase (proyecto "Social", tabla `panel_state`,
  fila fija con `key = "estrategia_h2_panel_v1"`), vía
  `src/lib/supabaseClient.ts` y `src/app/panelcentral/storageAdapter.ts`.
  Regla dura: **nunca reintroducir `window.storage`** — esa API solo existe
  en el entorno de artefactos de Claude, no en este proyecto. Todas las
  lecturas/escrituras de estado deben pasar por el adaptador `storage`.
- **Protección de acceso:** `src/proxy.ts` aplica Basic Auth solo sobre
  `/panelcentral/:path*`, con credenciales en variables de entorno
  `PANEL_USER` / `PANEL_PASSWORD`. No remover ni debilitar sin instrucción
  explícita.
- **Piel visual:** sigue el brand kit de `docs/STRATTON-BRAND.md` (carbón,
  rojo señal ≤5%, Archivo Black, radius 2px) — ya aplicado en el
  componente, no requiere Tailwind ni CSS externo.
- **Variables de entorno requeridas:** `NEXT_PUBLIC_SUPABASE_URL`,
  `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `PANEL_USER`, `PANEL_PASSWORD`
  (definidas en `.env.local`, no versionadas).
