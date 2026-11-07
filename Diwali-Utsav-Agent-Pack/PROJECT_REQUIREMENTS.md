# Project Requirements — Diwali Utsav

## 1. Purpose

Build a shareable, polished, bilingual Diwali celebration website. The experience should feel personal and festive while remaining fast, lightweight, accessible, and simple to deploy as a static frontend.

## 2. Target audience

Friends, relatives, family members, teachers, and other recipients of a shared greeting link. Visitors may use mobile phones, tablets, or desktop browsers and may not be technically experienced.

## 3. Scope

### In scope — version 1

- Interactive welcome/intro screen.
- Single-page celebration experience with section navigation.
- Personalized greeting from a URL name parameter.
- Creator signature and configurable creator name.
- Interactive diya lighting, including a Light All Diyas action.
- Digital rangoli area with selectable designs and simple color/customization interaction.
- Fireworks celebration using Canvas or an equally lightweight implementation.
- Floating lantern visual effects.
- Blessing/message cards and random blessing action.
- Festive image gallery using supplied assets.
- Personalized wishes generator with recipient type and language.
- Copy-to-clipboard and WhatsApp share actions.
- Surprise gift reveal with personalized greeting card.
- English/Hindi language switch.
- Background instrumental music control, gracefully disabled if no audio asset exists.
- Responsive layout, reduced-motion support, keyboard accessibility, and performance optimization.

### Out of scope — version 1

- User accounts, authentication, database, server-side APIs, or admin panel.
- Persistent public messages or visitor submissions.
- Real-time multiplayer interaction.
- Payment, donations, or advertising.
- Uploading visitor photos.
- Tracking visitors or collecting personal data.
- Countdown timer unless a correct event date is explicitly configured for a future Diwali edition.

## 4. Functional requirements

| ID | Requirement | Acceptance condition |
|---|---|---|
| FR-01 | Welcome experience | First visit shows a welcome scene and a working Begin Celebration button. |
| FR-02 | Main page transition | Activating the button reveals the main page with a smooth, short transition. |
| FR-03 | Section navigation | Navbar links scroll to the correct section and work on mobile. |
| FR-04 | Name personalization | `?name=` displays a safely decoded name in greeting content. |
| FR-05 | Language parameter | `?lang=en` or `?lang=hi` selects the initial language. |
| FR-06 | Language switch | Visitor can switch language without losing their place in the page. |
| FR-07 | Diya interaction | Each interactive diya can be lit/unlit by click/tap and keyboard. |
| FR-08 | Light all | A single action lights all interactive diyas. |
| FR-09 | Rangoli interaction | Visitor can choose a pattern and interact with available color/design controls. |
| FR-10 | Fireworks | Visitor can trigger fireworks manually; canvas is responsive and bounded. |
| FR-11 | Lanterns | Decorative lanterns animate without blocking controls or causing layout shifts. |
| FR-12 | Blessings | Blessing cards display bilingual messages and a random-message action. |
| FR-13 | Gallery | Gallery displays supplied images with suitable crop, alt text, and responsive behavior. |
| FR-14 | Wishes generator | Visitor can select recipient, language, and tone/category and generate a complete greeting. |
| FR-15 | Copy greeting | Copy action copies the generated greeting and provides accessible success feedback. |
| FR-16 | WhatsApp share | Share action opens WhatsApp with a URL-encoded message and current page URL. |
| FR-17 | Surprise gift | Gift opens on activation and reveals a greeting card with personalized signature. |
| FR-18 | Music control | Play/pause control works after user interaction; missing audio is handled gracefully. |
| FR-19 | Creator identity | Creator name is configured in one central file and appears in the footer/signature. |
| FR-20 | Responsive behavior | No horizontal overflow or unusable controls at common mobile/tablet/desktop widths. |

## 5. Non-functional requirements

- **Performance:** Optimize large images, lazy-load below-the-fold imagery, avoid unnecessary packages, and keep effects bounded.
- **Reliability:** No uncaught errors if optional audio is unavailable or clipboard/share APIs are blocked.
- **Accessibility:** Semantic HTML, keyboard access, visible focus, meaningful alt text, sufficient contrast, and reduced-motion support.
- **Privacy:** No visitor data collection. Name personalization is handled locally from the URL.
- **Maintainability:** Reusable components, centralized content/configuration, clear naming, and no monolithic component.
- **Compatibility:** Current evergreen Chrome, Edge, Firefox, and Safari; graceful fallback for unsupported browser APIs.
- **Deployment:** Must build as a static site using `npm run build`.

## 6. Content and identity

- Greeting-card sign-off: `With love, [Creator Name] ❤️`
- Footer credit: `Made with ❤️ by [Creator Name]`
- Keep creator name in a central configuration file, initially set to a clearly marked placeholder until the owner supplies the final name.
- Do not invent a personal name.

## 7. Definition of done

The project is complete when every in-scope feature works, all supplied images are mapped correctly, English and Hindi content are present, the mobile layout is polished, the production build succeeds, and the testing checklist has been completed.
