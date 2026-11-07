import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionHeading from '../components/SectionHeading';
import Diya from '../components/Diya';
import { siteConfig } from '../config/siteConfig';

export default function DiyaSection() {
  const { t } = useLanguage();
  const diyaNames = t.diyas.diyaNames || [];
  
  // All diyas start completely unlit until visitor personally clicks them
  const [litDiyas, setLitDiyas] = useState(() => new Array(7).fill(false));

  const toggleDiya = (index) => {
    setLitDiyas((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const lightAll = () => {
    setLitDiyas(new Array(diyaNames.length).fill(true));
  };

  const resetDiyas = () => {
    setLitDiyas(new Array(diyaNames.length).fill(false));
  };

  const litCount = litDiyas.filter(Boolean).length;
  const allLit = litCount === diyaNames.length;

  return (
    <section id="diyas" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.diyas.tag}
          title={t.diyas.title}
          subtitle={t.diyas.subtitle}
        />

        {/* Counter and Batch Actions Bar */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1rem 1.5rem',
            background: 'rgba(25, 18, 48, 0.6)',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-md)'
          }}
        >
          {/* Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🪔</span>
            <div>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-gold-light)' }}>
                {t.diyas.litCount}:{' '}
                <span style={{ color: 'var(--color-gold)', fontSize: 'var(--text-base)' }}>
                  {litCount} / {diyaNames.length}
                </span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={lightAll}
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.1rem', fontSize: 'var(--text-xs)' }}
              disabled={allLit}
            >
              {t.diyas.lightAllBtn}
            </button>
            <button
              onClick={resetDiyas}
              className="btn btn-outline"
              style={{ padding: '0.55rem 1.1rem', fontSize: 'var(--text-xs)' }}
              disabled={litCount === 0}
            >
              {t.diyas.resetBtn}
            </button>
          </div>
        </div>

        {/* All Lit Celebratory Announcement */}
        {allLit && (
          <div
            role="status"
            aria-live="polite"
            style={{
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
              padding: '1rem 1.5rem',
              background: 'linear-gradient(90deg, rgba(245, 199, 106, 0.2), rgba(242, 140, 40, 0.25))',
              border: '1px solid var(--color-gold)',
              borderRadius: 'var(--radius-md)',
              color: '#FFF6E5',
              textAlign: 'center',
              fontWeight: 600,
              boxShadow: 'var(--glow-gold-md)',
              animation: 'fadeInUp 0.4s ease'
            }}
          >
            {t.diyas.allLitMessage}
          </div>
        )}

        {/* Diyas Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {diyaNames.map((name, idx) => (
            <Diya
              key={idx}
              index={idx}
              name={name}
              isLit={!!litDiyas[idx]}
              onToggle={() => toggleDiya(idx)}
            />
          ))}
        </div>

        {/* Decorative Diya Accent Artwork from asset manifest */}
        <div style={{ textAlign: 'center', opacity: 0.85 }}>
          <img
            src={siteConfig.images.diyaArtwork}
            alt="Traditional Diwali clay diya artwork"
            loading="lazy"
            decoding="async"
            style={{
              maxWidth: '320px',
              width: '100%',
              height: 'auto',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)'
            }}
          />
        </div>
      </div>
    </section>
  );
}

