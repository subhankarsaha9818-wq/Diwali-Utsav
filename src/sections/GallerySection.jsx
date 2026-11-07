import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';

export default function GallerySection() {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    { id: 'hero', src: siteConfig.images.heroBackground, alt: t.gallery.items.hero, title: 'Deepavali Illumination' },
    { id: 'diya', src: siteConfig.images.diyaArtwork, alt: t.gallery.items.diya, title: 'Sacred Clay Diya' },
    { id: 'rangoli', src: siteConfig.images.rangoliArtwork, alt: t.gallery.items.rangoli, title: 'Floral Rangoli Art' },
    { id: 'decoration', src: siteConfig.images.decorationArtwork, alt: t.gallery.items.decoration, title: 'Festive Toran & Decor' },
    { id: 'lakshmiGanesh', src: siteConfig.images.lakshmiGanesh, alt: t.gallery.items.lakshmiGanesh, title: 'Maha Lakshmi & Ganesha' },
    { id: 'fireworks', src: siteConfig.images.fireworks, alt: t.gallery.items.fireworks, title: 'Celestial Fireworks' },
    { id: 'festive', src: siteConfig.images.festiveBackground, alt: t.gallery.items.festive, title: 'Festive Courtyard' },
    { id: 'greetingCard', src: siteConfig.images.greetingCard, alt: t.gallery.items.greetingCard, title: 'Ornate Greeting Card' }
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeImage) {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <section id="gallery" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.gallery.tag}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              aria-label={`View ${item.title}`}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '16/10',
                border: '1px solid var(--color-card-border)',
                background: 'var(--color-card)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.borderColor = 'var(--color-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--color-card-border)';
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8, 10, 24, 0.85) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                  opacity: 0.9
                }}
              >
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-gold-light)' }}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        {activeImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={() => setActiveImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(5, 6, 14, 0.94)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeInUp 0.25s ease'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="btn-icon"
                aria-label={t.gallery.closePreview}
                style={{
                  position: 'absolute',
                  top: '-48px',
                  right: '0',
                  color: '#FFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                ✕
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(245, 199, 106, 0.4)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
                }}
              />

              <p style={{ marginTop: '1rem', color: 'var(--color-gold-light)', fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                {activeImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

