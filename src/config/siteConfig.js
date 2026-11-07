/**
 * Central Configuration for Diwali Utsav
 * All site-wide settings, creator credits, and defaults are maintained here.
 */

export const siteConfig = {
  // Creator Name
  creatorName: "Subhankar Saha",

  // Site Identity
  title: "Diwali Utsav – Interactive Festival of Lights",
  shortTitle: "Diwali Utsav",
  tagline: {
    en: "An Interactive Festival of Light, Joy & Blessings",
    hi: "प्रकाश, उल्लास और आशीर्वाद का पावन डिजिटल पर्व"
  },

  // Language Configuration
  defaultLanguage: "en",
  supportedLanguages: [
    { code: "en", label: "English", nativeLabel: "English" },
    { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" }
  ],

  // Audio Asset Configuration
  audioPath: "/assets/audio/diwali-instrumental.mp3",

  // Image Asset Paths (Optimized WebP Derivatives)
  images: {
    heroBackground: "/assets/images/main-hero-background.webp",
    diyaArtwork: "/assets/images/diya-image.webp",
    rangoliArtwork: "/assets/images/rangoli-image.webp",
    decorationArtwork: "/assets/images/diwali-decoration.webp",
    lakshmiGanesh: "/assets/images/lakshmi-ganesh.webp",
    fireworks: "/assets/images/fireworks.webp",
    festiveBackground: "/assets/images/festive-background.webp",
    greetingCard: "/assets/images/greeting-card-background.webp"
  },

  // Max characters allowed for visitor name to prevent layout issues
  maxNameLength: 35,

  // Fallback greeting names
  defaultRecipient: {
    en: "Dear Friend",
    hi: "प्रिय मित्र"
  }
};

