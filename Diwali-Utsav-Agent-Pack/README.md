# Diwali Utsav

A lightweight, interactive, bilingual Diwali celebration website designed to be shared with friends, relatives, teachers, and family through one public URL.

## Product vision

Create a warm, memorable digital Diwali celebration that combines traditional Indian festive details with a premium modern interface. Visitors should be able to light diyas, explore rangoli designs, enjoy fireworks, read blessings, generate personalized greetings, and open a surprise gift.

## Confirmed decisions

- **Visual direction:** Traditional Indian festival + premium modern design.
- **Experience:** Interactive welcome flow, not a static landing page.
- **Frontend:** React + Vite + JavaScript + plain CSS.
- **No heavy backend:** No authentication, database, Express server, or user accounts.
- **Personalization:** Visitor-name greeting, creator credit, customizable wishes, WhatsApp sharing.
- **Languages:** English and Hindi.
- **Audio:** Instrumental background music with play/pause; playback begins only after user interaction.
- **Creator signature:** Greeting cards use `With love, [Name] ❤️`; footer uses `Made with ❤️ by [Name]`.
- **Deployment:** Static hosting such as Vercel or Netlify.

## Main visitor journey

1. Open the shared URL.
2. See an atmospheric welcome screen with a glowing diya and a `Begin Celebration` action.
3. Enter the main celebration page through a smooth lighting transition.
4. View a personalized greeting when a name is supplied in the URL.
5. Explore interactive diyas and the rangoli experience.
6. Trigger fireworks and browse festive imagery.
7. Read blessings and generate a personalized greeting.
8. Open the surprise gift and share a greeting through WhatsApp or copy it.

## Quick start

```bash
npm install
npm run dev
```

The coding agent must create a Vite React application if the repository is empty. If an existing project is supplied, inspect it first and preserve useful existing work.

## Image assets

The user supplied `images.zip` containing eight 2752 × 1536 RGBA PNG files. Extract them and place the originals under `public/assets/images/`. See `ASSET_MANIFEST.md` for the exact filenames and intended usage.

No audio file was included. The music player must gracefully handle a missing audio file and must not throw errors. Add a licensed/royalty-free instrumental file later at `public/assets/audio/diwali-instrumental.mp3`, or leave music unavailable with a clear, unobtrusive disabled state.

## Important product rules

- All visible controls must work; do not create decorative buttons that do nothing.
- Do not add a backend, database, login, analytics, or unnecessary dependencies.
- Do not autoplay audio before a visitor gesture.
- Respect `prefers-reduced-motion`.
- Keep the site usable on narrow mobile screens and with keyboard navigation.
- Use the URL query parameters `name` and `lang` for personalization, for example `/?name=Rahul&lang=en` or `/?name=राहुल&lang=hi`.
- Encode/decode query parameters safely and never inject user input as HTML.
- The creator name must be a single easy-to-edit configuration value, not hard-coded in multiple components.

## Documentation index

- `PROJECT_REQUIREMENTS.md` — scope, requirements, acceptance criteria.
- `USER_FLOWS.md` — visitor journeys and interaction behavior.
- `DESIGN_GUIDELINES.md` — visual system and layout direction.
- `TECH_STACK.md` — libraries and implementation constraints.
- `PROJECT_STRUCTURE.md` — recommended file architecture.
- `FEATURE_SPECIFICATIONS.md` — behavior for every feature.
- `ASSET_MANIFEST.md` — supplied image inventory and handling.
- `ANIMATIONS_AND_AUDIO.md` — motion, canvas, and music behavior.
- `RESPONSIVE_ACCESSIBILITY_PERFORMANCE.md` — quality requirements.
- `DEVELOPMENT_ROADMAP.md` — recommended implementation sequence.
- `TESTING_CHECKLIST.md` — functional, visual, and deployment checks.
- `DEPLOYMENT.md` — static deployment instructions.
- `AGENT_INSTRUCTIONS.md` — master instructions to the coding agent.
