import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import MusicToggle from './MusicToggle';
import { siteConfig } from '../config/siteConfig';
import {
  FaHome,
  FaHeart,
  FaFireAlt,
  FaPalette,
  FaImages,
  FaPenFancy,
  FaGift,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { GiFireworkRocket, GiSparkles } from 'react-icons/gi';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll for navbar transparency & subtle bottom border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for highlight
  useEffect(() => {
    const sectionIds = [
      'hero',
      'greeting',
      'diyas',
      'rangoli',
      'fireworks',
      'blessings',
      'gallery',
      'wishes',
      'surprise'
    ];

    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 140; // offset for sticky navbar
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive, { passive: true });
    handleScrollActive();
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  // Close mobile drawer when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scrolling when mobile drawer is open to prevent background scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // All 9 navigation sections with icons from react-icons
  const navLinks = [
    { href: '#hero', id: 'hero', label: t.nav.home, icon: <FaHome aria-hidden="true" /> },
    { href: '#greeting', id: 'greeting', label: t.nav.greeting, icon: <FaHeart aria-hidden="true" /> },
    { href: '#diyas', id: 'diyas', label: t.nav.diyas, icon: <FaFireAlt aria-hidden="true" /> },
    { href: '#rangoli', id: 'rangoli', label: t.nav.rangoli, icon: <FaPalette aria-hidden="true" /> },
    { href: '#fireworks', id: 'fireworks', label: t.nav.fireworks, icon: <GiFireworkRocket aria-hidden="true" /> },
    { href: '#blessings', id: 'blessings', label: t.nav.blessings, icon: <GiSparkles aria-hidden="true" /> },
    { href: '#gallery', id: 'gallery', label: t.nav.gallery, icon: <FaImages aria-hidden="true" /> },
    { href: '#wishes', id: 'wishes', label: t.nav.wishes, icon: <FaPenFancy aria-hidden="true" /> },
    { href: '#surprise', id: 'surprise', label: t.nav.surprise, icon: <FaGift aria-hidden="true" /> }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        background: isScrolled
          ? 'rgba(10, 8, 22, 0.92)'
          : 'rgba(8, 10, 24, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(245, 199, 106, 0.25)'
          : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        {/* Brand / Logo (Left) */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0
          }}
          aria-label={siteConfig.shortTitle}
        >
          <span
            style={{
              fontSize: '1.6rem',
              animation: 'flameFlicker 3s infinite ease-in-out',
              display: 'inline-block'
            }}
          >
            🪔
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-lg)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              background: 'var(--color-gold-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              whiteSpace: 'nowrap'
            }}
          >
            {siteConfig.shortTitle}
          </span>
        </a>

        {/* Desktop Navigation Links (Unchanged, Visible >= 1024px) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem'
          }}
          className="desktop-nav"
          aria-label="Desktop Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  color: isActive ? 'var(--color-gold)' : 'var(--color-muted)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-xs)',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.03em',
                  transition: 'color var(--transition-fast)',
                  position: 'relative',
                  padding: '0.3rem 0'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--color-gold-light)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--color-muted)';
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '20%',
                      right: '20%',
                      height: '2px',
                      background: 'var(--color-gold)',
                      borderRadius: '2px',
                      boxShadow: 'var(--glow-gold-sm)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Header Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          {/* Controls visible on desktop */}
          <div className="desktop-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <LanguageToggle />
            <MusicToggle />
          </div>

          {/* Clearly Visible Mobile Hamburger Icon (☰) (< 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-hamburger-btn"
            aria-label={t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              padding: 0,
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid var(--color-gold)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-gold)',
              fontSize: '1.25rem',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Slide-In Navigation Drawer: Subtle Dark Backdrop Overlay */}
      <div
        role="presentation"
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(5, 6, 16, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1000,
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.32s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.32s cubic-bezier(0.25, 1, 0.5, 1)',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        aria-hidden="true"
      />

      {/* Right-Side Slide-In Navigation Drawer Panel */}
      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'clamp(280px, 80vw, 340px)',
          height: '100dvh',
          backgroundColor: 'rgba(18, 12, 36, 0.94)',
          backgroundImage: `
            radial-gradient(circle at 85% 0%, rgba(245, 199, 106, 0.18) 0%, transparent 45%),
            radial-gradient(circle at 15% 100%, rgba(55, 25, 95, 0.4) 0%, transparent 55%)
          `,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderLeft: '1.5px solid rgba(245, 199, 106, 0.35)',
          boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.8), var(--glow-gold-sm)',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.25, 1, 0.5, 1)',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        {/* Drawer Header with Diwali Utsav Logo & Close (✕) Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.2rem 1.4rem',
            borderBottom: '1px solid rgba(245, 199, 106, 0.22)',
            flexShrink: 0,
            background: 'rgba(26, 17, 50, 0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                fontSize: '1.45rem',
                animation: 'flameFlicker 3s infinite ease-in-out',
                display: 'inline-block'
              }}
            >
              🪔
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--color-gold-light)',
                letterSpacing: '0.04em',
                textShadow: '0 0 10px rgba(245, 199, 106, 0.3)'
              }}
            >
              {siteConfig.shortTitle}
            </span>
          </div>

          {/* Clearly Visible Close (✕) Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label={t.nav.closeMenu}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid rgba(245, 199, 106, 0.35)',
              borderRadius: '50%',
              color: 'var(--color-gold)',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.background = 'rgba(245, 199, 106, 0.25)';
              e.currentTarget.style.borderColor = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(245, 199, 106, 0.35)';
            }}
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Body: All 9 Navigation Options Vertically */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.1rem 0.9rem',
            gap: '0.4rem',
            flex: 1
          }}
          aria-label="Mobile Navigation Links"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  color: isActive ? 'var(--color-gold)' : 'var(--color-cream)',
                  backgroundColor: isActive ? 'rgba(245, 199, 106, 0.16)' : 'transparent',
                  borderLeft: isActive ? '3.5px solid var(--color-gold)' : '3.5px solid transparent',
                  borderRight: isActive ? '1px solid rgba(245, 199, 106, 0.25)' : '1px solid transparent',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: isActive ? 700 : 500,
                  padding: '0.85rem 1.1rem',
                  borderRadius: '0 8px 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? 'inset 0 0 14px rgba(245, 199, 106, 0.12), 0 2px 8px rgba(0,0,0,0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.color = 'var(--color-gold-light)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-cream)';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span
                    style={{
                      fontSize: '1.1rem',
                      color: isActive ? 'var(--color-gold)' : 'rgba(245, 199, 106, 0.75)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {link.icon}
                  </span>
                  <span style={{ letterSpacing: '0.02em' }}>{link.label}</span>
                </div>

                {isActive ? (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-gold)',
                      boxShadow: '0 0 8px var(--color-gold)'
                    }}
                  />
                ) : (
                  <span style={{ color: 'var(--color-muted-dark)', fontSize: '0.8rem' }}>→</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Drawer Footer with Quick Controls */}
        <div
          style={{
            padding: '1.2rem 1.4rem',
            borderTop: '1px solid rgba(245, 199, 106, 0.22)',
            background: 'rgba(12, 8, 26, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LanguageToggle />
            <MusicToggle />
          </div>

          <span style={{ fontSize: '0.75rem', color: 'rgba(245, 199, 106, 0.75)', fontWeight: 600 }}>
            ✨ Shubh Deepavali
          </span>
        </div>
      </aside>

      {/* Responsive Breakpoints & Accessibility Styles */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
          #mobile-nav-drawer,
          [role="presentation"] {
            display: none !important;
          }
        }

        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #mobile-nav-drawer,
          [role="presentation"] {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
