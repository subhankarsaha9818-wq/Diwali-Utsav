import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import WelcomeScreen from './sections/WelcomeScreen';
import HeroSection from './sections/HeroSection';
import GreetingSection from './sections/GreetingSection';
import DiyaSection from './sections/DiyaSection';
import RangoliSection from './sections/RangoliSection';
import FireworksSection from './sections/FireworksSection';
import BlessingsSection from './sections/BlessingsSection';
import GallerySection from './sections/GallerySection';
import WishesGeneratorSection from './sections/WishesGeneratorSection';
import SurpriseSection from './sections/SurpriseSection';
import Footer from './sections/Footer';

function MainApp() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Animated Welcome Screen */}
      {!hasStarted && (
        <WelcomeScreen onStart={() => setHasStarted(true)} />
      )}

      {/* Persistent Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* 2. Main Hero Section */}
        <HeroSection />

        {/* 3. Personalized Diwali Greeting */}
        <GreetingSection />

        {/* 4. Interactive Diya Experience */}
        <DiyaSection />

        {/* 5. Digital Rangoli Creator */}
        <RangoliSection />

        {/* 6. Fireworks Celebration */}
        <FireworksSection />

        {/* 7. Diwali Wishes and Blessings */}
        <BlessingsSection />

        {/* 8. Festive Image Gallery */}
        <GallerySection />

        {/* 9. Personalized Wishes Generator */}
        <WishesGeneratorSection />

        {/* 10. Surprise Gift Experience */}
        <SurpriseSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
