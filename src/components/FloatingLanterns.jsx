import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function FloatingLanterns({ count = 5 }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  // Generate deterministic lantern configs
  const lanterns = [
    { id: 1, left: '10%', duration: '18s', delay: '0s', size: 36, opacity: 0.75 },
    { id: 2, left: '25%', duration: '22s', delay: '5s', size: 44, opacity: 0.8 },
    { id: 3, left: '60%', duration: '20s', delay: '2s', size: 38, opacity: 0.7 },
    { id: 4, left: '78%', duration: '24s', delay: '8s', size: 50, opacity: 0.85 },
    { id: 5, left: '90%', duration: '19s', delay: '4s', size: 34, opacity: 0.65 }
  ].slice(0, count);

  return (
    <div className="floating-lanterns-layer" aria-hidden="true">
      {lanterns.map((l) => (
        <div
          key={l.id}
          className="lantern-item"
          style={{
            left: l.left,
            bottom: '-80px',
            animationDuration: l.duration,
            animationDelay: l.delay,
            opacity: l.opacity
          }}
        >
          <svg
            width={l.size}
            height={l.size * 1.3}
            viewBox="0 0 40 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(245, 199, 106, 0.7)) drop-shadow(0 0 20px rgba(242, 140, 40, 0.4))'
            }}
          >
            {/* Top Loop */}
            <path d="M17 4 C17 2, 23 2, 23 4" stroke="#F5C76A" strokeWidth="1.5" />
            <line x1="20" y1="4" x2="20" y2="8" stroke="#F5C76A" strokeWidth="1.5" />
            {/* Top Cap */}
            <rect x="13" y="8" width="14" height="3" rx="1.5" fill="#C28723" stroke="#F5C76A" strokeWidth="0.8" />
            {/* Lantern Body */}
            <path
              d="M13 11 C8 20, 8 32, 13 41 L27 41 C32 32, 32 20, 27 11 Z"
              fill="url(#lanternGlow)"
              stroke="#F5C76A"
              strokeWidth="1.2"
            />
            {/* Inner Candle Glow */}
            <circle cx="20" cy="27" r="6" fill="#FFF2A3" />
            <circle cx="20" cy="27" r="10" fill="rgba(255, 165, 0, 0.35)" />
            {/* Bottom Cap */}
            <rect x="13" y="41" width="14" height="3" rx="1.5" fill="#C28723" stroke="#F5C76A" strokeWidth="0.8" />
            {/* Tassel */}
            <line x1="20" y1="44" x2="20" y2="50" stroke="#F28C28" strokeWidth="1.5" />
            <defs>
              <linearGradient id="lanternGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF9E1B" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#F5C76A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C2410C" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}

