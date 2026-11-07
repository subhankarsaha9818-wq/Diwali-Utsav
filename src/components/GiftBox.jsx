import React from 'react';

export default function GiftBox({ isOpen, onOpen }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      aria-label={isOpen ? 'Gift box opened' : 'Surprise gift box. Click to open.'}
      style={{
        position: 'relative',
        width: '180px',
        height: '180px',
        cursor: isOpen ? 'default' : 'pointer',
        margin: '0 auto',
        transform: !isOpen ? 'scale(1)' : 'scale(1.05)',
        transition: 'transform 0.4s ease'
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))',
          animation: !isOpen ? 'giftWobble 4s infinite ease-in-out' : 'none'
        }}
      >
        <defs>
          <linearGradient id="boxBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A51D24" />
            <stop offset="50%" stopColor="#800F15" />
            <stop offset="100%" stopColor="#50070B" />
          </linearGradient>
          <linearGradient id="ribbonGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE7A0" />
            <stop offset="50%" stopColor="#F5C76A" />
            <stop offset="100%" stopColor="#C49635" />
          </linearGradient>
        </defs>

        {/* Box Base */}
        <rect
          x="30"
          y="85"
          width="140"
          height="100"
          rx="8"
          fill="url(#boxBodyGrad)"
          stroke="#F5C76A"
          strokeWidth="1.5"
        />

        {/* Vertical Ribbon */}
        <rect x="88" y="85" width="24" height="100" fill="url(#ribbonGoldGrad)" />

        {/* Horizontal Ribbon */}
        <rect x="30" y="125" width="140" height="20" fill="url(#ribbonGoldGrad)" />

        {/* Box Lid (Animated lift when open) */}
        <g
          style={{
            transform: isOpen ? 'translateY(-30px) rotate(-8deg)' : 'translateY(0)',
            transformOrigin: '20px 80px',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* Lid Rectangle */}
          <rect
            x="20"
            y="65"
            width="160"
            height="26"
            rx="6"
            fill="#C1292E"
            stroke="#F5C76A"
            strokeWidth="2"
          />
          {/* Lid Ribbon */}
          <rect x="88" y="65" width="24" height="26" fill="url(#ribbonGoldGrad)" />

          {/* Bow on Top */}
          <path
            d="M100 65 C80 40, 50 48, 85 63 Z"
            fill="url(#ribbonGoldGrad)"
            stroke="#FFE7A0"
            strokeWidth="1"
          />
          <path
            d="M100 65 C120 40, 150 48, 115 63 Z"
            fill="url(#ribbonGoldGrad)"
            stroke="#FFE7A0"
            strokeWidth="1"
          />
          {/* Bow Center Knot */}
          <circle cx="100" cy="65" r="9" fill="#FFF2A3" stroke="#C49635" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

