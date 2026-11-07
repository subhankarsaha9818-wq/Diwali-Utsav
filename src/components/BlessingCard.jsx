import React from 'react';

export default function BlessingCard({ category, icon, text, isSelected }) {
  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderColor: isSelected ? 'var(--color-gold)' : 'var(--color-card-border)',
        boxShadow: isSelected ? 'var(--glow-gold-md)' : 'none',
        transform: isSelected ? 'scale(1.02)' : 'none',
        transition: 'all 0.35s ease',
        position: 'relative'
      }}
    >
      {isSelected && (
        <span
          style={{
            position: 'absolute',
            top: '-10px',
            right: '16px',
            background: 'var(--color-gold-gradient)',
            color: 'var(--color-night-darker)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}
        >
          ✨ Selected
        </span>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.8rem' }}>{icon}</span>
        <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--color-gold-light)', margin: 0 }}>
          {category}
        </h4>
      </div>

      <p style={{ fontSize: 'var(--text-sm)', color: '#FFF5E1', lineHeight: '1.7', flex: 1 }}>
        {text}
      </p>
    </div>
  );
}

