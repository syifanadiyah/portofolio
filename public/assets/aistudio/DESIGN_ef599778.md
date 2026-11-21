---
name: Warm Retro Editorial
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f0eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#534343'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0ea'
  outline: '#857373'
  outline-variant: '#d8c1c1'
  surface-tint: '#8e4a4f'
  primary: '#2e0208'
  on-primary: '#ffffff'
  primary-container: '#4a151b'
  on-primary-container: '#c6797d'
  inverse-primary: '#ffb3b6'
  secondary: '#96454c'
  on-secondary: '#ffffff'
  secondary-container: '#ff99a0'
  on-secondary-container: '#792e36'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#3a0910'
  on-primary-fixed-variant: '#713438'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#3f020e'
  on-secondary-fixed-variant: '#782e36'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
  bg-cream: '#FBF8F1'
  bg-cream-alt: '#F3EEE3'
  bg-translucent: rgba(255, 255, 255, 0.85)
  burgundy-deep: '#4A151B'
  burgundy-soft: '#6E262E'
  text-muted: '#6B5E5E'
  stripe-blue: '#D4E5F0'
  accent-gold: '#D4AF37'
  accent-green: '#128C7E'
  border-soft: rgba(74, 21, 27, 0.12)
  border-gold: rgba(212, 175, 55, 0.40)
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 54px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-eyebrow:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.15em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

# Design System: Retro-Editorial Portfolio (Syifa Danar Nadiyah Siregar)

A warm retro-editorial, vintage-inspired design system tailored for personal portfolios, academic/creative profiles, and UGC/content creator showcases.

## 1. Brand Identity & Aesthetic Principles
- **Theme**: Warm Retro Editorial / Vintage Warm Cream & Burgundy.
- **Personality**: Elegant, authentic, intellectual yet approachable, creative, and structured.
- **Design Metaphor**: High-end print editorial meets digital portfolio — tactile cream paper texture, ornate gilded frames, subtle pastel pinstripes, and refined serif typography.

---

## 2. Color Palette & Design Tokens

### CSS Custom Properties (:root)
```css
:root {
  /* Surfaces & Backgrounds */
  --bg-cream: #FBF8F1;          /* Primary canvas / soft warm paper */
  --bg-cream-alt: #F3EEE3;      /* Secondary surface / card backgrounds */
  --bg-white-translucent: rgba(255, 255, 255, 0.85);

  /* Brand & Accents */
  --burgundy: #4A151B;          /* Primary text, headings, prominent buttons */
  --burgundy-soft: #6E262E;     /* Secondary accents, hover states */
  --text-muted: #6B5E5E;        /* Subtle secondary text & labels */
  --stripe-blue: #D4E5F0;       /* Pastel pinstripe banner accent */
  --accent-gold: #D4AF37;       /* Ornate gilded frames, badges & star ratings */
  --accent-green: #128C7E;      /* WhatsApp CTA button */

  /* Borders & Shadows */
  --border-soft: rgba(74, 21, 27, 0.12);
  --border-gold: rgba(212, 175, 55, 0.4);
  --shadow-warm: 0 12px 32px rgba(74, 21, 27, 0.08);
  --shadow-hover: 0 18px 40px rgba(74, 21, 27, 0.14);
  --shadow-gold: 0 15px 35px rgba(212, 175, 55, 0.25);

  /* Transitions & Radii */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --ease: cubic-bezier(0.25, 1, 0.5, 1);
}
```

---

## 3. Typography Hierarchy

### Typefaces
- **Headings & Display**: `'Fraunces'`, `'Playfair Display'`, Georgia, serif.
- **Body, Navigation, Badges & UI**: `'Plus Jakarta Sans'`, system-ui, sans-serif.

### Type Scale
- **Display / Hero H1**: `clamp(40px, 5.5vw, 76px)`, weight 800, line-height 1.05, tracking -0.02em.
- **Section Heading H2**: `clamp(32px, 4vw, 48px)`, weight 700, line-height 1.15.
- **Card Title / Subheading H3**: `24px - 28px`, weight 700.
- **Eyebrow / Sub-tag**: `12px - 14px`, uppercase, tracking 0.15em, weight 700.
- **Body Large**: `18px`, line-height 1.6, weight 400.
- **Body Regular**: `15px - 16px`, line-height 1.6, weight 400.
- **Small / Metadata**: `13px - 14px`, line-height 1.5, weight 500.

---

## 4. UI Components & Patterns

### 1. Navigation Bar (Top Chrome)
- Sticky top bar with glassmorphic blur (`backdrop-filter: blur(12px); background: rgba(251, 248, 241, 0.9)`).
- Logo: Signature serif wordmark with subtle accent dot.
- Links: Burgundy font-weight 600 with animated underline on hover.

### 2. Buttons & CTAs
- **Primary Pill (.btn-burgundy)**: Burgundy `#4A151B` background, white text, pill radius (`9999px`), padding `14px 28px`. Hover lifts `-3px` with `--burgundy-soft`.
- **Secondary / Outline Pill**: Transparent background, 1.5px solid border, burgundy text.
- **Social Action Pill (WhatsApp)**: Background `#128C7E`, white text, icon + label.

### 3. Ornate Vintage Frame (.vintage-gold-frame)
- Polished gilded border (`10px - 12px solid #D4AF37`), subtle tilt (`rotate(-2.5deg)`), warm shadow, padded white backing for cutouts or portraits.

### 4. Striped Editorial Banners (.stripe-bg)
- Repeating linear gradient:
  ```css
  background-image: repeating-linear-gradient(90deg, #D4E5F0 0px, #D4E5F0 28px, transparent 28px, transparent 56px);
  ```
- Centered section badge / pill tag overlay.

### 5. Floating Skill & Focus Pills
- Pill containers with dark burgundy background and white crisp sans-serif text, layered with gentle rotation (`-3deg` to `+3deg`) around visual assets.

### 6. Testimonial & Service Cards
- Cream/white surface (`#FFF` or `#F3EEE3`), rounded corners (`16px`), 1px solid `--border-soft`, padded `28px - 32px`.
- Golden star ratings (★★★★★ `#D4AF37`).
- Rounded tool icon tiles (`48px x 48px`, radius `10px`, hover lift).
