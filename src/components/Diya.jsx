import React from 'react';

export default function Diya({ name, isLit, onToggle, index }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      role="switch"
      aria-checked={isLit}
      aria-label={`${name}: ${isLit ? 'Lit' : 'Unlit'}. Click to toggle flame.`}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem 1rem',
        cursor: 'pointer',
        textAlign: 'center',
        borderColor: isLit ? 'rgba(245, 199, 106, 0.7)' : 'rgba(245, 199, 106, 0.15)',
        boxShadow: isLit ? 'var(--glow-gold-md)' : 'none',
        transform: isLit ? 'translateY(-4px)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)',
        userSelect: 'none'
      }}
    >
      {/* Diya SVG Illustration */}
      <div style={{ position: 'relative', width: '84px', height: '84px', marginBottom: '0.8rem' }}>
        {/* Glow Aura when lit */}
        {isLit && (
          <div
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 160, 20, 0.5) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 70%)',
              animation: 'auraPulse 2.5s infinite ease-in-out',
              pointerEvents: 'none'
            }}
          />
        )}

        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flame (Only visible when lit) */}
          {isLit && (
            <g style={{ animation: 'flameFlicker 2.4s infinite ease-in-out', transformOrigin: '50px 42px' }}>
              {/* Outer Golden Orange Flame */}
              <path
                d="M50 16 C57 28, 62 36, 56 44 C52 48, 45 48, 42 44 C36 36, 43 28, 50 16 Z"
                fill="url(#diyaFlameOuter)"
                filter="drop-shadow(0 0 8px #FF8C00)"
              />
              {/* Mid Yellow Flame */}
              <path
                d="M50 22 C54 30, 58 36, 53 42 C50 45, 46 45, 44 42 C40 36, 44 30, 50 22 Z"
                fill="url(#diyaFlameMid)"
              />
              {/* Inner White Hot Spark */}
              <path
                d="M50 28 C52 33, 54 37, 52 40 C50 42, 48 42, 47 40 C45 37, 47 33, 50 28 Z"
                fill="#FFFFFF"
              />
            </g>
          )}

          {/* Unlit Wick (When not lit) */}
          {!isLit && (
            <path
              d="M50 42 Q 52 34 51 30"
              stroke="#443322"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}

          {/* Diya Clay Pot */}
          <path
            d="M20 54 C24 74, 76 74, 80 54 C66 60, 34 60, 20 54 Z"
            fill="url(#diyaClayGrad)"
            stroke={isLit ? '#F5C76A' : '#8A5A20'}
            strokeWidth="1.8"
          />
          {/* Diya Rim */}
          <ellipse
            cx="50"
            cy="54"
            rx="30"
            ry="8"
            fill={isLit ? '#8E4810' : '#4E2B10'}
            stroke={isLit ? '#F5C76A' : '#704618'}
            strokeWidth="1.2"
          />

          {/* Gradient Defs */}
          <defs>
            <linearGradient id="diyaFlameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="60%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#E63946" />
            </linearGradient>
            <linearGradient id="diyaFlameMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#FF7A00" />
            </linearGradient>
            <linearGradient id="diyaClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLit ? '#F5C76A' : '#8A6025'} />
              <stop offset="50%" stopColor={isLit ? '#B06B15' : '#5E3D12'} />
              <stop offset="100%" stopColor={isLit ? '#5A2A04' : '#2F1B05'} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Diya Label */}
      <h4
        style={{
          fontSize: 'var(--text-sm)',
          color: isLit ? 'var(--color-gold-light)' : 'var(--color-muted)',
          marginBottom: '0.4rem',
          fontWeight: 600
        }}
      >
        {name}
      </h4>

      {/* State badge */}
      <span
        style={{
          display: 'inline-block',
          fontSize: 'var(--text-xs)',
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-full)',
          background: isLit ? 'rgba(245, 199, 106, 0.2)' : 'rgba(255, 255, 255, 0.05)',
          color: isLit ? 'var(--color-gold)' : 'var(--color-muted-dark)',
          fontWeight: 600
        }}
      >
        {isLit ? '🔥 Lit' : '○ Tap to Light'}
      </span>
    </div>
  );
}

