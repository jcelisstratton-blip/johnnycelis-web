# STRATT-ON — Directrices de Marca (v1.0)

> Concepto: **ENCENDIDO**. La O de "ON" es un interruptor de power.
> Este archivo es la fuente de verdad para cualquier pieza visual, UI o contenido
> generado en este proyecto. Si una decisión de diseño contradice este documento, este documento gana.

---

## 1. Idea central

**Llevamos negocios del estado manual al estado encendido.**

- Qué somos: agencia de arquitectura de automatización. Sistemas de producción, no demos.
- Para quién: negocios que superaron el modo manual y necesitan operar como una máquina.
- Contra qué: software genérico, consultoras de diapositivas, "transformación digital" vacía.
- Arquetipo: **Forajido** (primario — rompe el status quo, no pide permiso) + **Ingeniero** (secundario — todo se respalda con rigor, métricas y sistemas corriendo).

## 2. Tono de voz

Directo, técnico, con filo. Frases cortas. Imperativo en llamados a la acción.

| ✓ Así | ✕ Así no |
|---|---|
| Tu operación pierde 30 horas semanales en tareas repetibles. Las recuperamos. | ¡Nos encantaría ayudarte a explorar sinergias de eficiencia operativa! |
| Sistema entregado, documentado y corriendo. Siguiente. | Esperamos que la solución cumpla con sus expectativas. |
| Automatiza o quédate atrás. | Soluciones innovadoras de transformación digital 360°. |

Prohibido: jerga corporativa, diminutivos, disculpas, signos de exclamación dobles, emojis en comunicación de marca.

## 3. Logotipo

Wordmark en **Archivo Black** convertido a curvas. Lockup: `STRATT-⏻N` — la O de "ON" es el símbolo universal de encendido (⏻); símbolo y N van en rojo señal, "STRATT-" en blanco o carbón según fondo.

**Archivos oficiales (`/assets`):**

| Archivo | Uso |
|---|---|
| `stratton-logo-principal-fondo-oscuro.svg` | Versión principal sobre carbón/oscuro |
| `stratton-logo-principal-fondo-claro.svg` | Versión principal sobre blanco/claro |
| `stratton-logo-vertical-fondo-oscuro.svg` / `-claro.svg` | Formatos cuadrados o verticales |
| `stratton-logo-mono-blanco.svg` / `-negro.svg` | Una tinta / fondos donde el rojo no funciona |
| `stratton-isotipo.svg` (+ variantes mono) | Símbolo solo: favicon, avatar, marca de agua, app |
| `stratton-favicon.svg` | Isotipo sobre carbón, esquinas 24 px |
| `stratton-avatar-social.svg` | Isotipo sobre carbón, cuadrado completo |

**Reglas duras:**

1. Usar SIEMPRE los SVG oficiales. Nunca reconstruir el logo con texto ni usar una O tipográfica en lugar del símbolo ("STRATT-ON" escrito solo se permite en prosa, nunca como logo).
2. Área de respeto: 1× la altura del símbolo de encendido, en los cuatro lados.
3. Tamaños mínimos: horizontal 120 px / 30 mm · vertical 80 px / 20 mm · isotipo 24 px / 8 mm.
4. Prohibido: deformar, rotar, recolorear, aplicar sombras/brillos/degradados, usar sobre fondos de bajo contraste.

## 4. Color

| Token | Nombre | HEX | RGB | CMYK | Rol |
|---|---|---|---|---|---|
| `--st-carbon` | Carbón | `#0E0F11` | 14·15·17 | 18·12·0·93 | Fondo base (60%) |
| `--st-grafito` | Grafito | `#1C1E22` | 28·30·34 | 18·12·0·87 | Superficies, cards (20%) |
| `--st-humo` | Humo | `#9BA1A6` | 155·161·166 | 7·3·0·35 | Texto secundario |
| `--st-blanco` | Blanco óptico | `#F5F6F4` | 245·246·244 | 0·0·1·4 | Texto e info principal (15%) |
| `--st-rojo` | Rojo señal | `#FF3B2F` | 255·59·47 | 0·77·82·0 | Acento único (≤5%) |
| `--st-rojo-profundo` | Rojo profundo | `#C21F17` | 194·31·23 | 0·84·88·24 | Hover/pressed, grandes áreas impresas |

**Reglas duras:**

1. El rojo señala, no decora. Máximo ~5% de una pieza; si supera el 10%, rediseñar.
2. Sobre rojo, el texto va SIEMPRE en carbón (5.4:1 AA). Nunca blanco sobre rojo en cuerpo de texto (3.3:1, insuficiente); blanco sobre rojo solo en display ≥24 px bold.
3. Humo solo para texto secundario sobre carbón o grafito. Nunca humo sobre blanco para cuerpo.
4. Contrastes de referencia: blanco/carbón 17.9:1 (AAA) · rojo/carbón 5.4:1 (AA) · carbón/rojo 5.4:1 (AA).
5. No introducir colores fuera de esta paleta (incluye estados de éxito/error de UI: éxito = blanco + LED, error/alerta = rojo señal).

## 5. Tipografía

| Rol | Familia | Pesos | Reglas |
|---|---|---|---|
| Display | **Archivo Black** | 900 (único) | Siempre MAYÚSCULAS · letter-spacing −1% a −2% · line-height 0.98–1.05 · nunca < 20 px |
| Texto | **Archivo** | 400 / 600 / 800 | Cuerpo e interfaces · line-height 1.5–1.65 · mínimo 14 px |
| Datos/código | **JetBrains Mono** | 400 / 700 | Métricas, código, etiquetas, eyebrows · en etiquetas MAYÚSCULAS: letter-spacing +5% a +20% |

Escala: `display-xl` 44–64 · `display` 28–36 · `heading` 18–22 (Archivo 800) · `body` 14–16 · `label` 11–12 (Mono).

Carga (Google Fonts):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

## 6. Sistema visual

- **Línea de estado** (elemento de firma): barra roja de 3 px de alto × ~56 px, border-radius 2 px. Abre secciones y subraya datos clave. Una por bloque; no es adorno repetible.
- **LED de estado**: punto de 9 px en rojo con glow (`box-shadow: 0 0 8px rgba(255,59,47,.8)`), para métricas y estados en vivo.
- **Iconografía**: lineal, trazo 2 px, terminales redondeadas, un solo peso. Máximo un icono en rojo por pieza; el resto blanco o humo. Prohibido: emojis como iconos, mezclar rellenos con lineales.
- **Radio universal**: 2 px. Esquinas duras en todo el sistema — nada de píldoras ni radios generosos.
- **Fotografía**: alto contraste, sombras duras, texturas industriales (metal, concreto, cableado, pantallas). Prohibido stock genérico de oficina.
- **Movimiento**: 150–300 ms, `cubic-bezier(0.4, 0, 0.2, 1)`. Gesto de firma: elementos que "encienden" (opacity 0→1 acompañado del LED). Respetar `prefers-reduced-motion`.

## 7. Componentes UI (referencia rápida)

- **Botón primario**: fondo rojo, texto carbón 800 MAYÚSCULAS, padding 12×22, radius 2 px. Hover: rojo profundo.
- **Botón secundario**: contorno 1 px blanco, texto blanco 600, fondo transparente.
- **Cards**: fondo grafito, borde `rgba(245,246,244,.10)` (hairline), radius 4 px, padding ≥24 px.
- **Eyebrows/etiquetas**: JetBrains Mono 11 px, MAYÚSCULAS, letter-spacing .18em, color humo (o rojo si es dato clave).
- **Divisores**: 1 px hairline; los importantes se sustituyen por la línea de estado.

## 8. Tokens (producción)

### CSS

```css
:root {
  /* Color */
  --st-carbon: #0E0F11;
  --st-grafito: #1C1E22;
  --st-humo: #9BA1A6;
  --st-blanco: #F5F6F4;
  --st-rojo: #FF3B2F;
  --st-rojo-profundo: #C21F17;
  --st-hairline: rgba(245, 246, 244, 0.10);

  /* Tipografía */
  --st-font-display: 'Archivo Black', sans-serif;
  --st-font-body: 'Archivo', sans-serif;
  --st-font-mono: 'JetBrains Mono', monospace;

  /* Forma y ritmo */
  --st-radius: 2px;
  --st-space-1: 4px;  --st-space-2: 8px;  --st-space-3: 16px;
  --st-space-4: 24px; --st-space-5: 40px; --st-space-6: 64px;
  --st-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Tailwind v4 (`@theme`)

```css
@theme {
  --color-carbon: #0E0F11;
  --color-grafito: #1C1E22;
  --color-humo: #9BA1A6;
  --color-blanco: #F5F6F4;
  --color-rojo: #FF3B2F;
  --color-rojo-profundo: #C21F17;
  --font-display: 'Archivo Black', sans-serif;
  --font-body: 'Archivo', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-st: 2px;
}
```

### Tailwind v3 (`tailwind.config.js`)

```js
export default {
  theme: {
    extend: {
      colors: {
        carbon: '#0E0F11',
        grafito: '#1C1E22',
        humo: '#9BA1A6',
        blanco: '#F5F6F4',
        rojo: { DEFAULT: '#FF3B2F', profundo: '#C21F17' },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: { st: '2px' },
    },
  },
}
```

## 9. Checklist antes de publicar cualquier pieza

- [ ] Logo desde SVG oficial, con área de respeto 1× y sobre fondo de alto contraste
- [ ] Rojo ≤ 5% de la pieza y usado solo para señalar
- [ ] Texto sobre rojo en carbón, nunca blanco en cuerpo
- [ ] Display en Archivo Black MAYÚSCULAS; cuerpo ≥ 14 px; etiquetas en Mono
- [ ] Radius 2 px, iconos lineales 2 px, cero emojis estructurales
- [ ] Tono: directo, técnico, sin jerga corporativa
- [ ] Contraste AA mínimo en todo texto; `prefers-reduced-motion` respetado
