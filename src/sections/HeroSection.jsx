import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { siteConfig } from '../config/siteConfig';
import FloatingLanterns from '../components/FloatingLanterns';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToDiyas = () => {
    const el = document.getElementById('diyas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGreeting = () => {
    const el = document.getElementById('greeting');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--nav-height)',
        paddingBottom: '4rem',
        backgroundImage: `
          linear-gradient(180deg, rgba(8, 10, 24, 0.72) 0%, rgba(18, 12, 38, 0.85) 65%, var(--color-night) 100%),
          url(${siteConfig.images.heroBackground})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}
    >
      {/* Gentle Floating Lanterns Layer */}
      <FloatingLanterns count={5} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Festive Badge */}
        <div style={{ marginBottom: '1.2rem' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(245, 199, 106, 0.12)',
              border: '1px solid rgba(245, 199, 106, 0.35)',
              color: 'var(--color-gold)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              boxShadow: 'var(--glow-gold-sm)'
            }}
          >
            {t.hero.badge}
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-hero)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            color: '#FFF6E5',
            textShadow: '0 4px 25px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 199, 106, 0.3)'
          }}
        >
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            fontSize: 'var(--text-lg)',
            color: 'var(--color-cream)',
            opacity: 0.92,
            lineHeight: 1.7,
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)'
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem'
          }}
        >
          <button
            onClick={scrollToDiyas}
            className="btn btn-primary"
            style={{ fontSize: 'var(--text-base)', padding: '0.9rem 2.2rem' }}
          >
            {t.hero.lightDiyasBtn}
          </button>

          <button
            onClick={scrollToGreeting}
            className="btn btn-outline"
            style={{ fontSize: 'var(--text-base)', padding: '0.9rem 2.2rem' }}
          >
            {t.hero.exploreBtn} ↓
          </button>
        </div>
      </div>

      {/* Subtle bottom fade for seamless transition */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, var(--color-night), transparent)',
          pointerEvents: 'none'
        }}
      />
    </section>
  );
}

