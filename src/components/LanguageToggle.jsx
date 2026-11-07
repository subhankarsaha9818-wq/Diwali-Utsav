import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="btn-outline"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.45rem 0.9rem',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        letterSpacing: '0.04em',
        cursor: 'pointer'
      }}
      aria-label={`Switch language to ${lang === 'en' ? 'Hindi' : 'English'}`}
      title={`Switch to ${lang === 'en' ? 'हिन्दी' : 'English'}`}
    >
      <span style={{ fontSize: '1rem' }}>🌐</span>
      <span style={{ color: lang === 'en' ? 'var(--color-gold)' : 'var(--color-muted)' }}>EN</span>
      <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
      <span style={{ color: lang === 'hi' ? 'var(--color-gold)' : 'var(--color-muted)' }}>हिन्दी</span>
    </button>
  );
}

