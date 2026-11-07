import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionHeading from '../components/SectionHeading';
import BlessingCard from '../components/BlessingCard';
import { siteConfig } from '../config/siteConfig';

export default function BlessingsSection() {
  const { t } = useLanguage();
  const blessingsList = t.blessings.items || [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleRandomBlessing = () => {
    if (blessingsList.length <= 1) return;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * blessingsList.length);
    } while (nextIndex === selectedIndex);
    setSelectedIndex(nextIndex);
  };

  return (
    <section id="blessings" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.blessings.tag}
          title={t.blessings.title}
          subtitle={t.blessings.subtitle}
        />

        {/* Sacred Lakshmi Ganesh Focal Banner */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 3rem auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid rgba(245, 199, 106, 0.35)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), var(--glow-gold-sm)',
            position: 'relative',
            maxHeight: '360px'
          }}
        >
          <img
            src={siteConfig.images.lakshmiGanesh}
            alt={t.gallery.items.lakshmiGanesh}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '360px',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              display: 'block'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8, 10, 24, 0.9) 0%, transparent 60%)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <p style={{ color: 'var(--color-gold-light)', fontStyle: 'italic', fontSize: 'var(--text-sm)', textAlign: 'center' }}>
              ॥ ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वर वरद सर्वजनं मे वशमानय स्वाहा ॥
            </p>
          </div>
        </div>

        {/* Random Blessing Trigger */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <button
            onClick={handleRandomBlessing}
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: 'var(--text-sm)' }}
          >
            {t.blessings.randomBtn}
          </button>
        </div>

        {/* Blessings Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {blessingsList.map((item, idx) => (
            <BlessingCard
              key={item.id}
              category={item.category}
              icon={item.icon}
              text={item.text}
              isSelected={idx === selectedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

