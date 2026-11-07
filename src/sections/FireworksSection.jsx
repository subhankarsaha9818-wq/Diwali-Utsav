import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionHeading from '../components/SectionHeading';
import FireworksCanvas from '../components/FireworksCanvas';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { siteConfig } from '../config/siteConfig';

export default function FireworksSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [burstCount, setBurstCount] = useState(0);

  const handleLaunch = () => {
    setBurstCount((prev) => prev + 1);
  };

  return (
    <section id="fireworks" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.fireworks.tag}
          title={t.fireworks.title}
          subtitle={t.fireworks.subtitle}
        />

        {/* Fireworks Interactive Sky Stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(245, 199, 106, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            backgroundImage: `
              radial-gradient(ellipse at 50% 100%, rgba(35, 18, 65, 0.7) 0%, rgba(8, 10, 24, 0.95) 100%),
              url(${siteConfig.images.fireworks})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Canvas Component */}
          <FireworksCanvas triggerCount={burstCount} />

          {/* Interactive Overlay & Controls */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem',
              pointerEvents: 'auto',
              width: '90%',
              maxWidth: '480px'
            }}
          >
            <button
              onClick={handleLaunch}
              className="btn btn-primary"
              style={{
                fontSize: 'var(--text-base)',
                padding: '0.9rem 2.4rem',
                boxShadow: 'var(--glow-gold-md)'
              }}
              aria-label={t.fireworks.celebrateBtn}
            >
              {t.fireworks.celebrateBtn}
            </button>

            <span
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-cream)',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}
            >
              {t.fireworks.tapHint}
            </span>

            {prefersReducedMotion && (
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gold-light)', marginTop: '0.2rem' }}>
                {t.fireworks.reducedMotionNotice}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

