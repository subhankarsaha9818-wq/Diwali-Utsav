# Development Roadmap

Implement in small, verifiable milestones. Do not attempt to generate the entire application in one unreviewed pass.

## Milestone 0 — Inspect and scaffold

- Inspect repository and existing files.
- Preserve useful work if present.
- Create Vite + React project only if needed.
- Configure scripts and verify the dev server/build.

**Exit criteria:** App runs and production build succeeds.

## Milestone 1 — Design foundation

- Add global tokens, typography, reset, layout utilities.
- Build responsive navbar and footer.
- Establish section spacing and button/card styles.

**Exit criteria:** Responsive shell looks consistent at mobile and desktop widths.

## Milestone 2 — Welcome and hero

- Build welcome screen and transition.
- Build hero with supplied background and overlay.
- Add navigation anchors.

**Exit criteria:** Intro is skippable/continuable and main content is reachable.

## Milestone 3 — Personalization and bilingual content

- Add central site configuration.
- Implement `name` and `lang` query parsing.
- Add English/Hindi dictionaries.
- Verify all core UI strings switch language.

**Exit criteria:** Both languages work without broken layout.

## Milestone 4 — Interactive celebration

- Implement diya interactions and Light All/Reset.
- Implement rangoli presets and palette controls.
- Implement bounded Canvas fireworks.
- Add floating lantern decoration.

**Exit criteria:** Each feature works with mouse, touch, and keyboard where applicable.

## Milestone 5 — Wishes, gallery, surprise, sharing

- Build blessings and random blessing.
- Build optimized gallery.
- Build editable wishes generator.
- Add copy and WhatsApp share.
- Build surprise gift reveal.

**Exit criteria:** Generated messages can be edited, copied, and shared.

## Milestone 6 — Music and polish

- Add optional audio player with missing-file handling.
- Polish motion, loading, focus, empty, and error states.
- Test reduced motion.

**Exit criteria:** No console errors when audio is absent; interactions remain usable.

## Milestone 7 — Quality and deployment

- Run complete checklist.
- Test production build and preview.
- Optimize assets and check network requests.
- Deploy to static hosting.
- Verify public URL on mobile and desktop.

**Exit criteria:** Public link works and all core journeys pass.

## Agent working style

After each milestone:
1. Summarize files changed.
2. Explain how to run/test.
3. Report known issues honestly.
4. Do not silently skip requirements.
5. Wait for owner review before making major design direction changes.
