# ⚡ DESIGN.md — Zeuz Calistenia Brand & Design System

## 🏛️ Brand Identity & Personality
- **Name**: Zeuz Calistenia
- **Essence**: El Olimpo del entrenamiento con peso corporal. Rústico, natural, comunitario, con la potencia y el humor mitológico de Zeus.
- **Tone & Voice**: Enérgico, motivador, divertido, con toques de humor mitológico ("Desata el rayo que llevas dentro", "Aquí no adoramos a los dioses: construimos cuerpos divinos") y un profesionalismo técnico absoluto en biomecánica y calistenia.

---

## 🎨 Color Palette & Design Tokens

```css
:root {
  /* Core Brand Colors */
  --color-primary: #332E2C;       /* Dune - Tierra rústica y roca volcánica */
  --color-accent: #D09F50;        /* Roti / Gold - El dorado y rayo de Zeus */
  --color-accent-hover: #b8863b;  /* Deep Gold */
  --color-secondary: #709687;     /* Oxley - Verde laurel y naturaleza */
  --color-bg-accent: #C9CBB4;     /* Foggy Gray - Piedra caliza y mármol */
  
  /* Surfaces & Neutrals */
  --color-bg-light: #FAF9F6;      /* Off-white cálido orgánico */
  --color-surface-card: #FFFFFF;  /* Blanco puro para tarjetas */
  --color-text-main: #201D1C;     /* Texto principal de alto contraste */
  --color-text-muted: #57524F;    /* Texto secundario */
  --color-border: rgba(51, 46, 44, 0.12); /* Borde sutil */
}
```

---

## 🔤 Typography Hierarchy

- **Heading Font**: `Poppins`, sans-serif (Font-weight: 700 / 800, tight tracking `-0.02em`)
  - `XL / Display`: 56px (Desktop) / 40px (Mobile)
  - `L`: 48px / 32px
  - `M`: 32px / 24px
  - `S`: 24px / 20px
- **Body Font**: `Figtree`, sans-serif (Font-weight: 400 / 500 / 600, line-height: 1.6)
  - `Large`: 18px
  - `Medium`: 16px
  - `Small`: 14px
- **Monospace & Badges**: `Space Mono` / `JetBrains Mono`

---

## 📐 Layout & Visual Rhythm

- **Grid**: 8pt grid with organic rounded corners (`rounded-2xl` - 16px).
- **Elevation & Shadows**:
  - Sombras suaves cálidas: `box-shadow: 0 10px 30px -10px rgba(51, 46, 44, 0.08);`
  - Acento dorado al hover: `box-shadow: 0 15px 35px -5px rgba(208, 159, 80, 0.25);`
- **Motifs**: Rayos sutiles, texturas de roca, siluetas de anillas y barras de calistenia, laureles olímpicos y badges dorados.
