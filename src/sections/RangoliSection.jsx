import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionHeading from '../components/SectionHeading';
import { rangoliPresets, rangoliPalettes } from '../data/rangoliPresets';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function RangoliSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const [selectedPattern, setSelectedPattern] = useState(rangoliPresets[0].id);
  const [selectedPalette, setSelectedPalette] = useState(rangoliPalettes[0].id);
  const [isSpinning, setIsSpinning] = useState(false);

  const activePalette = rangoliPalettes.find((p) => p.id === selectedPalette) || rangoliPalettes[0];
  const activePreset = rangoliPresets.find((p) => p.id === selectedPattern) || rangoliPresets[0];

  const handleReset = () => {
    setSelectedPattern(rangoliPresets[0].id);
    setSelectedPalette(rangoliPalettes[0].id);
    setIsSpinning(false);
  };

  return (
    <section id="rangoli" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.rangoli.tag}
          title={t.rangoli.title}
          subtitle={t.rangoli.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            maxWidth: '1120px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {/* Rangoli Interactive Visual Display */}
          <div
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(1.5rem, 1.2rem + 1vw, 2.5rem)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '380px',
              width: '100%'
            }}
          >
            {/* Dynamic Glow Background */}
            <div
              style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${activePalette.glow} 0%, transparent 70%)`,
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
            />

            {/* Rangoli Canvas SVG */}
            <div
              style={{
                width: '280px',
                height: '280px',
                animation: isSpinning && !prefersReducedMotion ? 'slowSpin 30s linear infinite' : 'none',
                transition: 'transform 0.5s ease',
                position: 'relative',
                zIndex: 2
              }}
            >
              <svg
                viewBox="0 0 300 300"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="135"
                  fill="none"
                  stroke={activePalette.ring}
                  strokeWidth="4"
                  strokeDasharray="6,4"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="125"
                  fill="none"
                  stroke={activePalette.primary}
                  strokeWidth="2"
                />

                {/* Pattern 1: Lotus */}
                {activePreset.id === 'lotus' && (
                  <g>
                    {/* 8 Lotus Petals */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <g key={i} transform={`rotate(${angle} 150 150)`}>
                        <path
                          d="M150 40 Q 185 95 150 140 Q 115 95 150 40 Z"
                          fill={activePalette.secondary}
                          stroke={activePalette.primary}
                          strokeWidth="2"
                          opacity="0.9"
                        />
                        <path
                          d="M150 65 Q 170 105 150 135 Q 130 105 150 65 Z"
                          fill={activePalette.accent}
                          opacity="0.85"
                        />
                        <circle cx="150" cy="40" r="5" fill={activePalette.primary} />
                      </g>
                    ))}
                  </g>
                )}

                {/* Pattern 2: Chakra */}
                {activePreset.id === 'chakra' && (
                  <g>
                    {/* 12 Radiant Rays */}
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                      <g key={i} transform={`rotate(${angle} 150 150)`}>
                        <polygon
                          points="150,30 162,110 150,140 138,110"
                          fill={i % 2 === 0 ? activePalette.primary : activePalette.secondary}
                          stroke={activePalette.accent}
                          strokeWidth="1.5"
                        />
                        <circle cx="150" cy="30" r="4" fill={activePalette.accent} />
                      </g>
                    ))}
                  </g>
                )}

                {/* Pattern 3: Mandala */}
                {activePreset.id === 'mandala' && (
                  <g>
                    {/* 16 Petals Concentric */}
                    {[...Array(16)].map((_, i) => (
                      <g key={i} transform={`rotate(${i * 22.5} 150 150)`}>
                        <path
                          d="M150 50 C175 80 175 120 150 140 C125 120 125 80 150 50 Z"
                          fill={i % 2 === 0 ? activePalette.secondary : activePalette.primary}
                          stroke={activePalette.ring}
                          strokeWidth="1.2"
                          opacity="0.88"
                        />
                        <circle cx="150" cy="65" r="4" fill={activePalette.accent} />
                      </g>
                    ))}
                    <circle cx="150" cy="150" r="70" fill="none" stroke={activePalette.primary} strokeWidth="2.5" />
                  </g>
                )}

                {/* Pattern 4: Star (Ashtalakshmi) */}
                {activePreset.id === 'star' && (
                  <g>
                    {/* Two Intersecting Squares / 8-pointed star */}
                    <rect
                      x="90"
                      y="90"
                      width="120"
                      height="120"
                      fill={activePalette.secondary}
                      stroke={activePalette.primary}
                      strokeWidth="2.5"
                      opacity="0.8"
                    />
                    <rect
                      x="90"
                      y="90"
                      width="120"
                      height="120"
                      transform="rotate(45 150 150)"
                      fill={activePalette.secondary}
                      stroke={activePalette.accent}
                      strokeWidth="2.5"
                      opacity="0.8"
                    />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <circle
                        key={i}
                        cx="150"
                        cy="45"
                        r="6"
                        transform={`rotate(${angle} 150 150)`}
                        fill={activePalette.primary}
                        stroke={activePalette.ring}
                        strokeWidth="1.5"
                      />
                    ))}
                  </g>
                )}

                {/* Center Core Bindu & Inner Diya Flower */}
                <circle cx="150" cy="150" r="38" fill={activePalette.ring} stroke={activePalette.primary} strokeWidth="3" />
                <circle cx="150" cy="150" r="26" fill={activePalette.primary} />
                <circle cx="150" cy="150" r="14" fill={activePalette.accent} />
                <circle cx="150" cy="150" r="6" fill={activePalette.secondary} />
              </svg>
            </div>

            <p style={{ marginTop: '1.2rem', fontSize: 'var(--text-xs)', color: 'var(--color-gold-light)', fontWeight: 500 }}>
              {t.rangoli.patterns[activePreset.id]} • {t.rangoli.palettes[activePalette.id]}
            </p>
          </div>

          {/* Controls Panel */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 1.2rem + 1vw, 2.2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              width: '100%'
            }}
          >
            <div>
              {/* Pattern Selector */}
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">{t.rangoli.patternLabel}</label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                    gap: '0.75rem'
                  }}
                >
                  {rangoliPresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPattern(preset.id)}
                      className={selectedPattern === preset.id ? 'btn btn-primary' : 'btn btn-outline'}
                      style={{
                        padding: '0.75rem 0.9rem',
                        fontSize: 'var(--text-xs)',
                        justifyContent: 'center',
                        whiteSpace: 'normal',
                        textAlign: 'center',
                        lineHeight: '1.35',
                        minHeight: '48px',
                        width: '100%',
                        minWidth: 0
                      }}
                    >
                      {t.rangoli.patterns[preset.id]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Palette Selector */}
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">{t.rangoli.paletteLabel}</label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                    gap: '0.75rem'
                  }}
                >
                  {rangoliPalettes.map((pal) => (
                    <button
                      key={pal.id}
                      onClick={() => setSelectedPalette(pal.id)}
                      className={selectedPalette === pal.id ? 'btn btn-secondary' : 'btn btn-outline'}
                      style={{
                        padding: '0.75rem 0.9rem',
                        fontSize: 'var(--text-xs)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '0.65rem',
                        borderColor: selectedPalette === pal.id ? pal.primary : 'var(--color-card-border)',
                        width: '100%',
                        minWidth: 0,
                        whiteSpace: 'normal',
                        textAlign: 'left',
                        minHeight: '52px'
                      }}
                    >
                      {/* Color Swatch dots */}
                      <span style={{ display: 'inline-flex', gap: '4px', flexShrink: 0 }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: pal.primary, border: '1px solid rgba(255,255,255,0.4)' }} />
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: pal.secondary, border: '1px solid rgba(255,255,255,0.4)' }} />
                      </span>
                      <span
                        style={{
                          flex: 1,
                          lineHeight: '1.3',
                          fontSize: 'var(--text-xs)',
                          wordBreak: 'break-word',
                          overflow: 'hidden'
                        }}
                      >
                        {t.rangoli.palettes[pal.id]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Rotation and Reset Controls */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-card-border)',
                gap: '0.85rem'
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: 'var(--text-xs)', color: 'var(--color-cream)' }}>
                <input
                  type="checkbox"
                  checked={isSpinning}
                  onChange={(e) => setIsSpinning(e.target.checked)}
                  style={{ accentColor: 'var(--color-gold)', width: '16px', height: '16px' }}
                />
                <span>{t.rangoli.rotateLabel}</span>
              </label>

              <button onClick={handleReset} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: 'var(--text-xs)' }}>
                {t.rangoli.resetLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

