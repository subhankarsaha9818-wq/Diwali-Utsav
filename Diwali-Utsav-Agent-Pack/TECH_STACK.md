# Technical Stack — Diwali Utsav

## Required stack

- React
- Vite
- JavaScript (not TypeScript unless the owner later requests it)
- Plain CSS / CSS Modules if helpful; no Tailwind
- React Icons only where useful
- Framer Motion for a small number of meaningful transitions, if it does not add unnecessary complexity
- Canvas API for fireworks

## Architecture principles

- Frontend-only static application.
- No Express, MongoDB, authentication, or database.
- Use React state for transient interactions.
- Use Local Storage only for simple preferences such as selected language or music preference, if persistence improves UX.
- Parse personalization from URL query parameters.
- Centralize creator identity, asset paths, and content dictionaries.

## Dependency discipline

Before adding a package, determine whether browser APIs or CSS can achieve the same result. Avoid adding packages for simple tasks. Do not install multiple animation libraries.

## Browser APIs

- `URLSearchParams` for query parameters.
- `navigator.clipboard.writeText` with fallback/error feedback.
- `window.open` for WhatsApp share URL.
- `HTMLAudioElement` for music.
- Canvas 2D context for fireworks.
- `matchMedia('(prefers-reduced-motion: reduce)')` for motion preference.

## Suggested scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint` if ESLint is configured

## Environment and secrets

No API keys or secrets should be required. Do not introduce environment variables for values that can live in a public configuration file. Never put secrets in frontend code.
