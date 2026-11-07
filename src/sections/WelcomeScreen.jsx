import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { siteConfig } from '../config/siteConfig';

export default function WelcomeScreen({ onStart }) {
  const { t } = useLanguage();
  const [isIgniting, setIsIgniting] = useState(false);

  const handleBegin = () => {
    setIsIgniting(true);
    setTimeout(() => {
      onStart();
    }, 700);
  };

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label={t.welcome.title}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#070914',
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(245, 199, 106, ${isIgniting ? '0.35' : '0.14'}), transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(33, 18, 63, 0.9), transparent 70%)
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center',
        opacity: isIgniting ? 0.95 : 1,
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        transform: isIgniting ? 'scale(1.02)' : 'scale(1)'
      }}
    >
      {/* Sacred Welcome Diya with expanding aura */}
      <div
        style={{
          position: 'relative',
          marginBottom: '2rem',
          transform: isIgniting ? 'scale(1.18)' : 'scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Glow Aura */}
        <div
          style={{
            position: 'absolute',
            inset: '-40px',
            background: 'radial-gradient(circle, rgba(255, 180, 50, 0.45) 0%, rgba(255, 140, 0, 0.15) 50%, transparent 70%)',
            borderRadius: '50%',
            animation: 'auraPulse 3s infinite ease-in-out',
            pointerEvents: 'none'
          }}
        />

        {/* Grand Welcome Diya SVG */}
        <svg
          width="130"
          height="130"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={t.welcome.diyaAria}
          role="img"
          style={{
            filter: isIgniting
              ? 'drop-shadow(0 0 35px #FFD700) drop-shadow(0 0 70px #FF8C00)'
              : 'drop-shadow(0 0 18px rgba(245, 199, 106, 0.6))'
          }}
        >
          {/* Flame Back Glow */}
          <circle cx="50" cy="38" r="24" fill="url(#welcomeFlameGlow)" opacity={isIgniting ? 1 : 0.85} />
          
          {/* Flame Body */}
          <g style={{ animation: 'flameFlicker 2.8s infinite ease-in-out', transformOrigin: '50px 45px' }}>
            {/* Outer Flame */}
            <path
              d="M50 14 C58 28, 64 38, 56 48 C52 53, 44 53, 40 48 C34 38, 42 28, 50 14 Z"
              fill="url(#outerFlameGrad)"
            />
            {/* Middle Flame */}
            <path
              d="M50 20 C55 30, 60 38, 54 45 C51 49, 46 49, 44 45 C40 38, 45 30, 50 20 Z"
              fill="url(#midFlameGrad)"
            />
            {/* Inner White Core */}
            <path
              d="M50 28 C52 34, 55 39, 52 43 C51 45, 48 45, 47 43 C45 39, 48 34, 50 28 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* Diya Clay Pot Base */}
          <path
            d="M16 58 C20 80, 80 80, 84 58 C68 64, 32 64, 16 58 Z"
            fill="url(#diyaPotGrad)"
            stroke="#F5C76A"
            strokeWidth="2"
          />
          {/* Diya Rim */}
          <ellipse cx="50" cy="58" rx="34" ry="9" fill="#873E11" stroke="#F5C76A" strokeWidth="1.5" />
          <ellipse cx="50" cy="58" rx="26" ry="6" fill="#5E2B0C" />
          
          {/* Traditional Etching on Rim */}
          <path
            d="M24 58 Q 30 62 36 58 Q 42 62 48 58 Q 54 62 60 58 Q 66 62 72 58 Q 76 60 80 58"
            stroke="#FFE7A0"
            strokeWidth="1.2"
            fill="none"
            opacity="0.8"
          />

          <defs>
            <radialGradient id="welcomeFlameGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2A3" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#FF9E1B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E84A1A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="outerFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF7C2" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#E63946" />
            </linearGradient>
            <linearGradient id="midFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#FF7A00" />
            </linearGradient>
            <linearGradient id="diyaPotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5C76A" />
              <stop offset="35%" stopColor="#C47E20" />
              <stop offset="70%" stopColor="#8A4810" />
              <stop offset="100%" stopColor="#4A1E03" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Welcome Headings */}
      <span
        style={{
          color: 'var(--color-gold)',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '0.4rem'
        }}
      >
        ✨ {t.welcome.subtitle} ✨
      </span>

      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--text-4xl)',
          color: '#FFF5E1',
          marginBottom: '1rem',
          textShadow: '0 4px 20px rgba(245, 199, 106, 0.4)'
        }}
      >
        {t.welcome.title}
      </h1>

      <p
        style={{
          color: 'var(--color-muted)',
          maxWidth: '560px',
          fontSize: 'var(--text-base)',
          lineHeight: '1.7',
          marginBottom: '2.5rem'
        }}
      >
        {t.welcome.invitation}
      </p>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={handleBegin}
          className="btn btn-primary"
          style={{
            fontSize: 'var(--text-base)',
            padding: '1rem 2.6rem',
            boxShadow: 'var(--glow-gold-md)'
          }}
          disabled={isIgniting}
          autoFocus
        >
          {t.welcome.beginBtn}
        </button>

        {/* Skip action for instant accessibility */}
        <button
          onClick={onStart}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-muted-dark)',
            fontSize: 'var(--text-xs)',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: '0.5rem 1rem'
          }}
          aria-label={t.welcome.skipBtn}
        >
          {t.welcome.skipBtn} →
        </button>
      </div>
    </aside>
  );
}

