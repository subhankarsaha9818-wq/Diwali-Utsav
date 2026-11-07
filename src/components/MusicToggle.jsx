import React from 'react';
import { useAudio } from '../hooks/useAudio';
import { useLanguage } from '../hooks/useLanguage';

export default function MusicToggle() {
  const { isPlaying, isAvailable, togglePlay } = useAudio();
  const { t } = useLanguage();

  const title = !isAvailable
    ? t.audio.unavailable
    : isPlaying
    ? t.audio.pause
    : t.audio.play;

  const ariaLabel = isPlaying ? t.audio.playingAria : t.audio.pausedAria;

  return (
    <button
      onClick={togglePlay}
      disabled={!isAvailable}
      className="btn-icon"
      aria-label={ariaLabel}
      title={title}
      style={{
        position: 'relative',
        opacity: isAvailable ? 1 : 0.6,
        cursor: isAvailable ? 'pointer' : 'not-allowed',
        borderColor: isPlaying ? 'var(--color-gold)' : 'var(--color-card-border)',
        boxShadow: isPlaying ? 'var(--glow-gold-sm)' : 'none'
      }}
    >
      {isPlaying ? (
        <span style={{ fontSize: '1.2rem', animation: 'gentleBob 1.5s infinite ease-in-out' }}>🎵</span>
      ) : (
        <span style={{ fontSize: '1.2rem', filter: !isAvailable ? 'grayscale(1)' : 'none' }}>🔇</span>
      )}

      {/* Subtle playing indicator ring */}
      {isPlaying && (
        <span
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '50%',
            border: '1.5px solid var(--color-gold)',
            opacity: 0.7,
            animation: 'auraPulse 2s infinite ease-out'
          }}
        />
      )}
    </button>
  );
}

