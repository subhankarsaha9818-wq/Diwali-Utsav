# Recommended Project Structure

```text
diwali-utsav/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── main-hero-background.webp
│   │   │   ├── diya-image.webp
│   │   │   ├── rangoli-image.webp
│   │   │   ├── diwali-decoration.webp
│   │   │   ├── lakshmi-ganesh.webp
│   │   │   ├── fireworks.webp
│   │   │   ├── festive-background.webp
│   │   │   └── greeting-card-background.webp
│   │   └── audio/
│   │       └── diwali-instrumental.mp3  # optional; user-supplied/licensed
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── LanguageToggle.jsx
│   │   ├── MusicToggle.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Diya.jsx
│   │   ├── BlessingCard.jsx
│   │   ├── GreetingCard.jsx
│   │   ├── FireworksCanvas.jsx
│   │   ├── GiftBox.jsx
│   │   └── ShareActions.jsx
│   ├── sections/
│   │   ├── WelcomeScreen.jsx
│   │   ├── HeroSection.jsx
│   │   ├── GreetingSection.jsx
│   │   ├── DiyaSection.jsx
│   │   ├── RangoliSection.jsx
│   │   ├── FireworksSection.jsx
│   │   ├── BlessingsSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── WishesGeneratorSection.jsx
│   │   ├── SurpriseSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── translations.js
│   │   ├── blessings.js
│   │   ├── wishes.js
│   │   └── rangoliPresets.js
│   ├── hooks/
│   │   ├── useLanguage.js
│   │   ├── useReducedMotion.js
│   │   └── useAudio.js
│   ├── utils/
│   │   ├── personalization.js
│   │   ├── share.js
│   │   └── clipboard.js
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── animations.css
│   ├── config/
│   │   └── siteConfig.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── docs/
    └── [project documentation]
```

The agent may adjust this structure if it has a clear maintainability reason, but it must preserve separation between sections, reusable components, data, utilities, configuration, and styles.

## Central configuration

`src/config/siteConfig.js` should contain:
- `creatorName` (placeholder until owner confirms)
- site title
- default language
- supported languages
- public site URL behavior
- asset path constants if useful

Do not duplicate the creator name in individual components.
