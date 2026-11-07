import React from 'react';

export default function SectionHeading({ tag, title, subtitle, centered = true }) {
  return (
    <div style={{
      textAlign: centered ? 'center' : 'left',
      marginBottom: '3rem',
      position: 'relative',
      zIndex: 2
    }}>
      {tag && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 1rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(245, 199, 106, 0.1)',
          border: '1px solid rgba(245, 199, 106, 0.25)',
          color: 'var(--color-gold)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '0.9rem'
        }}>
          ✨ {tag} ✨
        </span>
      )}
      
      <h2 style={{
        fontSize: 'var(--text-3xl)',
        marginBottom: '0.8rem',
        color: '#FFF5E1',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
      }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{
          color: 'var(--color-muted)',
          maxWidth: '680px',
          margin: centered ? '0 auto' : '0',
          fontSize: 'var(--text-base)',
          lineHeight: '1.7'
        }}>
          {subtitle}
        </p>
      )}

      {/* Traditional Ornate Decorative Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: centered ? 'center' : 'flex-start',
        gap: '1rem',
        marginTop: '1.2rem',
        opacity: 0.8
      }}>
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
        <span style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>🪔</span>
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />
      </div>
    </div>
  );
}

