# Responsive, Accessibility, and Performance Requirements

## Responsive breakpoints

Use content-driven CSS breakpoints, with reasonable starting points:
- Small phones: up to 480px
- Large phones / small tablets: 481–768px
- Tablets / small laptops: 769–1024px
- Desktop: above 1024px

These are guidance, not rigid rules. Test at 360px, 390px, 768px, 1024px, and 1440px widths.

## Accessibility

- Use semantic landmarks: header, nav, main, section, footer.
- Every section needs a meaningful heading.
- All interactive controls must be keyboard-operable.
- Use real buttons for actions and links for navigation.
- Provide visible `:focus-visible` styles.
- Provide accessible names for icon-only controls.
- Maintain readable contrast.
- Do not use color as the only state indicator.
- Add alt text for meaningful images.
- Mark decorative images/effects as hidden from assistive technology.
- Announce copy/share/generator feedback through a polite live region.
- Ensure mobile menu can be opened, closed, and dismissed with Escape.
- Respect reduced-motion preference.

## Performance

- Optimize PNGs into WebP derivatives; do not ship the 74 MB source archive.
- Lazy-load images below the fold.
- Avoid loading large images as CSS backgrounds when responsive `<picture>` would be better.
- Avoid unnecessary dependencies and duplicate animation systems.
- Limit simultaneous particles and animation loops.
- Avoid layout shifts by defining image dimensions or aspect ratios.
- Keep initial JavaScript and CSS reasonable.
- Use production build and inspect console/network errors.

## Privacy and safety

- No backend or personal-data storage.
- Visitor name comes from URL and is rendered as text.
- Do not log names or query parameters.
- Do not add trackers, analytics, or third-party scripts without explicit approval.
