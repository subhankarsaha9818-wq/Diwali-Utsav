# Diwali Utsav – Interactive Diwali Celebration Website

A premium, lightweight, interactive, bilingual Diwali celebration website built with React, Vite, JavaScript, and vanilla CSS. Designed to be easily deployed to static hosting (Vercel, Netlify, GitHub Pages) and shared via URL parameters or WhatsApp.

---

## ✨ Features & Interactive Sections

1. **Animated Welcome Screen:** Atmospheric dark festive entrance featuring a glowing sacred clay Diya, flame flicker animation, bilingual greetings, and a smooth lighting transition into the celebration (with a skip link for instant access).
2. **Main Hero Section:** Majestic festive visuals with the optimized `main-hero-background.webp`, royal gold typography, floating lanterns, and quick navigation anchors.
3. **Personalized Diwali Greeting:** Dynamically displays the recipient's name from URL query parameters (e.g. `?name=Rahul`), warm blessings, and creator signature: `With love, Subhankar Saha ❤️`.
4. **Interactive Sacred Diyas:** 7 sacred diyas (Prosperity, Health, Wisdom, Love, Peace, Happiness, Success). All diyas start unlit, allowing visitors to personally light each lamp. Includes "Light All Diyas 🪔" and "Reset Lamps" controls with a celebratory banner when all are lit.
5. **Digital Rangoli Studio:** Interactive viewer for traditional Indian sacred geometries (Sacred Lotus, Radiant Chakra, Festive Mandala, Auspicious Star) with 4 festive color palettes, slow meditation spin toggle, and reset button.
6. **Night Sky Fireworks:** High-performance, DPR-scaled HTML5 Canvas 2D fireworks. Click the "Celebrate Now 🎆" button or tap anywhere on the dark sky to launch colorful bursts. Automatically pauses when offscreen or when reduced-motion is requested.
7. **Diwali Wishes and Blessings:** Auspicious blessings for Prosperity, Wisdom, Health, Peace, Joy, and Success featuring sacred artwork of Goddess Lakshmi and Lord Ganesha, with a non-consecutive "Receive a Random Blessing 🌸" generator.
8. **Festive Visual Gallery:** Responsive gallery displaying all 8 original supplied Diwali artworks optimized to WebP (93% bandwidth savings), complete with bilingual alt text and an accessible full-screen modal lightbox.
9. **Custom Diwali Wishes Generator:** Custom wishes for friends, family, teachers, colleagues, or everyone across Warm, Traditional, and Cheerful tones. Guaranteed fresh message on every click of "Generate New Wish ✍️", with editable textarea, Copy-to-Clipboard (with live feedback), and prefilled WhatsApp sharing.
10. **Surprise Gift Experience:** 3D-styled Diwali gift box that wobbles and opens upon tap, revealing a personalized festive blessing card signed by Subhankar Saha.
11. **Responsive Navbar & Footer:** Sticky glassmorphic navigation with bilingual language toggle (`EN` / `हिन्दी`), optional instrumental background music player, mobile drawer with Escape key support, and footer with creator attribution `Made with ❤️ by Subhankar Saha`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
npm run build
```
Creates an optimized, static build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the `dist/` directory locally at [http://localhost:4173](http://localhost:4173).

---

## 💌 Personalization & Sharing Guide

The website supports instant URL query parameters without requiring any login or backend:

- **Personalized Name:** `?name=YourName`
  - Example: `/?name=Rahul`
  - Hindi Example: `/?name=राहुल`
- **Language Selection:** `?lang=en` or `?lang=hi`
  - English: `/?lang=en`
  - Hindi: `/?lang=hi`
- **Combined Example:**
  - `/?name=Rahul&lang=en`
  - `/?name=प्रिया&lang=hi`

### Sharing via WhatsApp
Clicking "Share This Greeting" or "Share on WhatsApp" automatically generates a WhatsApp sharing link that pre-fills the festive greeting and preserves the recipient's name and language in the URL (`?name=...&lang=...`), while keeping the creator signature intact:
```text
With love, Subhankar Saha ❤️
```

---

## 🎵 Optional Background Audio

No copyrighted music is bundled. To enable festive instrumental background music:
1. Place a licensed or royalty-free MP3 file at:
   `public/assets/audio/diwali-instrumental.mp3`
2. The music toggle in the top-right navbar will automatically become active, allowing visitors to play and pause music at their choice.

---

## 🌐 Static Deployment

The project is static-hosting ready and requires no database or backend:

### Vercel
1. Push repository to GitHub.
2. Import project into Vercel.
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify
1. Connect repository or drag-and-drop the `dist` folder into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🎨 Technology Stack
- **Framework:** React 18 + Vite 5
- **Language:** JavaScript (ES Modules)
- **Styling:** Vanilla CSS with custom properties & glassmorphism (No Tailwind)
- **Effects:** HTML5 Canvas 2D (Fireworks), SVG Filters & Animations
- **Icons:** React Icons + Custom Festive SVGs
- **Creator Attribution:** Subhankar Saha

