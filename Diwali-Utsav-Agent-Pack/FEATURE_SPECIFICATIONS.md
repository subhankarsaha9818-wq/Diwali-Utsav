# Feature Specifications — Diwali Utsav

## Welcome and hero

- Welcome screen appears on first page load.
- Show a diya-led visual, short bilingual invitation, and Begin Celebration button.
- Main page must remain accessible if JavaScript animation fails; provide a skip/continue path.
- Hero includes Happy Diwali headline, short supporting line, and an Explore/Begin CTA.

## Personalization

- Read `name` from `URLSearchParams`.
- Trim whitespace, decode safely, and cap displayed length (for example, 40 characters).
- Render as text only; never use `dangerouslySetInnerHTML`.
- Empty or invalid names fall back to “Dear Friend” / Hindi equivalent.
- Greeting signature: `With love, [Creator Name] ❤️`.

## Interactive diyas

- Use a reusable `Diya` component.
- Each lamp has lit/unlit state, visual flame, accessible button semantics, and visible focus.
- Provide Light All and Reset controls.
- Avoid requiring precise mouse movement; support touch and keyboard.
- Keep the supplied diya image as decoration or section artwork; create actual interaction with lightweight CSS/SVG elements if the supplied image is not individually separable.

## Digital rangoli

- Version 1 should be a curated interactive rangoli selector, not a full drawing editor.
- Show a few preset patterns based on supplied artwork/CSS/SVG.
- Provide a small set of color palettes or pattern variants.
- Selected preset and palette must visibly update.
- Add reset control.
- Keep all controls usable on touch screens.

## Fireworks

- Use Canvas 2D with device-pixel-ratio-aware sizing.
- Trigger bursts on button activation and optional click/tap in the canvas region.
- Stop or reduce rendering when off-screen, hidden, or reduced-motion is enabled.
- Cap particle count and animation duration.
- Do not use rapid flashing or strobe effects.
- Canvas must be decorative; the button remains the primary accessible control.

## Floating lanterns

- Use a small number of CSS-animated decorative lanterns.
- Set `pointer-events: none` and `aria-hidden="true"` for purely decorative elements.
- Reduce or disable motion based on user preference and small-device performance.

## Blessings

- Include bilingual messages for happiness, prosperity, health, success, love, peace, and new beginnings.
- Random blessing button chooses a message.
- Do not show the same message consecutively if there are multiple messages available.

## Gallery

- Use the supplied artwork; do not source random external imagery.
- Use meaningful alt text in the selected language.
- Use `loading="lazy"` and `decoding="async"` for below-the-fold images.
- Avoid loading all full-resolution originals at once; use optimized derivatives.

## Wishes generator

Inputs:
- Recipient: friend, family, teacher, colleague, or everyone.
- Language: English or Hindi.
- Optional tone: warm, traditional, cheerful.
- Optional recipient name.

Output:
- A complete editable greeting.
- Include creator signature only when appropriate.
- Provide Generate Again, Copy, and WhatsApp Share actions.
- Keep message templates curated locally; no AI API or backend is required.

## Sharing

- Copy action uses Clipboard API and provides fallback/error messaging.
- WhatsApp action uses `https://wa.me/?text=` with properly encoded greeting and current page URL.
- Share URL should preserve `name` and `lang` where relevant.
- Do not claim a message was sent; WhatsApp only opens a prefilled share composer.

## Surprise gift

- Closed gift state is the default.
- On activation, animate opening and reveal a greeting card.
- Use a short particle/confetti effect; stop automatically.
- Card message uses visitor name if available and creator signature.
- Include Copy and WhatsApp Share actions.

## Music

- Provide a clear play/pause control.
- Start only after explicit visitor interaction.
- Audio path: `/assets/audio/diwali-instrumental.mp3`.
- The asset is not included in the supplied image ZIP. Handle 404/missing audio without uncaught errors.
- Do not bundle copyrighted music without permission.
