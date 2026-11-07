# Design Guidelines — Diwali Utsav

## 1. Art direction

**Traditional Indian celebration meets premium modern digital design.**

The interface should feel warm, elegant, festive, and immersive. Avoid clutter, excessive gradients, cartoonish clip art, and generic template styling. Let the supplied artwork carry the visual identity.

## 2. Suggested color tokens

Use CSS custom properties so the palette can be adjusted centrally.

| Token | Suggested value | Usage |
|---|---|---|
| `--color-night` | `#090B1A` | Main background |
| `--color-purple` | `#21123F` | Secondary background |
| `--color-gold` | `#F5C76A` | Primary accent |
| `--color-saffron` | `#F28C28` | Warm accent |
| `--color-cream` | `#FFF4DC` | Main text |
| `--color-muted` | `#C9BED5` | Secondary text |
| `--color-card` | `rgba(255,255,255,.07)` | Glass-style surfaces |
| `--color-border` | `rgba(245,199,106,.24)` | Subtle borders |

Check contrast in actual rendered combinations; do not assume decorative gold text is readable on every background.

## 3. Typography

- Use an elegant display serif for major festive headings.
- Use a highly readable sans-serif for body copy, labels, and controls.
- Ensure Hindi glyphs render correctly. Use a Devanagari-capable font with a sensible system fallback.
- Use responsive type sizing with `clamp()`.

## 4. Layout

- Single-page experience with a sticky or fixed transparent navbar after the intro.
- Hero should use the supplied hero background with a dark overlay for text contrast.
- Content width should be constrained and centered; avoid very long text lines.
- Alternate visual compositions: full-bleed image, centered cards, two-column feature layouts, and gallery grid.
- Use generous vertical spacing and consistent section rhythm.
- Use a mobile navigation drawer/menu with a clear close action.

## 5. Section design

1. **Welcome:** Full viewport, diya focal point, short greeting, Begin Celebration CTA.
2. **Hero:** Large title, short subtitle, primary CTA to explore, subtle floating lights.
3. **Personal greeting:** Greeting-card visual with visitor name and signature.
4. **Diyas:** Interactive lamps arranged as a decorative row/grid; clear lit/unlit state.
5. **Rangoli:** Large centered rangoli visual with compact controls.
6. **Fireworks:** Dark open-sky visual with canvas overlay and Celebrate Now CTA.
7. **Blessings:** Elegant cards for happiness, prosperity, health, success, and love.
8. **Gallery:** Responsive image grid/lightbox only if it can be implemented accessibly and lightly.
9. **Wishes generator:** Clear form controls and a preview card.
10. **Surprise:** Closed gift state followed by reveal card.
11. **Footer:** Creator credit, language control if useful, back-to-top, and share action.

## 6. Components and controls

- Buttons need hover, active, focus-visible, and disabled states.
- Interactive illustrations must have accessible labels and keyboard behavior.
- Do not rely on color alone to communicate lit/unlit or selected states.
- Keep controls visually consistent.
- Use icons as enhancements, not as the only accessible label.

## 7. Responsive behavior

- Mobile first; design for approximately 360px width upward.
- On small screens, stack multi-column layouts, reduce decorative particle counts, and ensure touch targets are comfortable.
- Keep important text away from image focal points and screen edges.
- Avoid fixed-width elements and horizontal scrolling.

## 8. Motion style

- Smooth, gentle, celebratory motion.
- Prefer opacity and transform animations.
- Avoid excessive parallax, rapid flashing, and continuous large-area effects.
- Respect `prefers-reduced-motion`.
