# Master Instructions for the Coding Agent

You are the frontend engineer responsible for implementing **Diwali Utsav**. Read every project document in this pack before writing code. Treat `PROJECT_REQUIREMENTS.md`, `FEATURE_SPECIFICATIONS.md`, and `DESIGN_GUIDELINES.md` as the source of truth.

## Product goal

Build a polished, premium, traditional-meets-modern, interactive Diwali greeting website that the owner can share with friends and relatives through one public link.

## Mandatory constraints

1. Use React + Vite + JavaScript + plain CSS.
2. Do not create a backend, database, authentication, or admin system.
3. Keep the app lightweight and static-hosting friendly.
4. Implement English and Hindi.
5. Include visitor-name personalization from `?name=` and language selection from `?lang=`.
6. Include all confirmed sections and interactions in the requirements.
7. Use the eight supplied image assets; see `ASSET_MANIFEST.md`.
8. Optimize images; do not ship the original 74 MB archive or unnecessarily large PNGs.
9. Do not invent the creator's name. Put a placeholder in one central config value until supplied.
10. No music file was supplied. Implement graceful optional audio support and do not bundle unlicensed music.
11. Do not autoplay audio before a visitor gesture.
12. Respect reduced-motion settings and accessibility requirements.
13. Never render visitor input as HTML.
14. Do not add analytics, tracking, external APIs, or unrelated dependencies.

## Required feature set

- Animated diya welcome screen with Begin Celebration action.
- Main hero section.
- Personalized greeting.
- Interactive diyas, Light All, and Reset.
- Digital rangoli selector/customizer.
- Fireworks celebration using bounded Canvas animation.
- Floating lantern decorations.
- Bilingual blessings and random blessing action.
- Festive image gallery.
- Personalized wishes generator with recipient and tone options.
- Editable generated message.
- Copy-to-clipboard and WhatsApp share.
- Animated surprise gift revealing a personalized greeting card.
- Background instrumental music play/pause control with missing-file handling.
- Responsive navbar and footer.

## Implementation process

Do not build everything in one huge component or one unreviewed generation pass.

1. Inspect the repository before changing it.
2. Report existing structure and identify whether the app is new or already initialized.
3. Create/verify the Vite setup.
4. Implement the design foundation and page shell.
5. Implement welcome and hero.
6. Implement personalization and language dictionaries.
7. Implement interactive celebration features.
8. Implement wishes, gallery, surprise, and sharing.
9. Implement optional music.
10. Test, optimize, and prepare deployment.

After each milestone, report:
- What was implemented.
- Files created/modified.
- Commands to run.
- Tests performed and results.
- Remaining issues or missing owner-provided assets.

## Quality expectations

- The result must look custom-designed, not like a generic template.
- Strong visual hierarchy and consistent spacing.
- Text must remain readable over imagery.
- Mobile experience must be intentionally designed, not merely squeezed desktop layout.
- Every visible button must perform its stated action.
- No placeholder buttons, broken links, console errors, or missing image references.
- All interactive elements must be keyboard-operable.
- Animations must be subtle, performant, and cleanly disposed.
- Avoid unnecessary dependencies and overengineering.

## Completion gate

Do not declare completion until:
- Production build succeeds.
- The testing checklist is completed.
- All core features are tested.
- Both languages are checked.
- Mobile and desktop layouts are checked.
- Missing audio is handled gracefully.
- Deployment instructions are provided.

If a requirement is ambiguous, choose the simplest implementation consistent with the documents and explain the decision. Ask the owner only when a genuinely blocking decision is required.
