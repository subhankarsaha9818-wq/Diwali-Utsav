import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import MusicToggle from './MusicToggle';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#greeting', label: t.nav.greeting },
    { href: '#diyas', label: t.nav.diyas },
    { href: '#rangoli', label: t.nav.rangoli },
    { href: '#fireworks', label: t.nav.fireworks },
    { href: '#blessings', label: t.nav.blessings },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#wishes', label: t.nav.wishes },
    { href: '#surprise', label: t.nav.surprise }
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
          ? 'rgba(10, 8, 22, 0.88)'
          : 'rgba(8, 10, 24, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(245, 199, 106, 0.25)'
          : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'inherit'
          }}
          aria-label={siteConfig.shortTitle}
        >
          <span style={{ fontSize: '1.6rem', animation: 'flameFlicker 3s infinite ease-in-out' }}>🪔</span>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-lg)',
            fontWeight: 700,
            letterSpacing: '0.04em',
            background: 'var(--color-gold-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {siteConfig.shortTitle}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: 'var(--color-muted)',
                textDecoration: 'none',
                fontSize: 'var(--text-xs)',
                fontWeight: 500,
                letterSpacing: '0.03em',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-light)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language & Music & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LanguageToggle />
          <MusicToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--color-card-border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-gold)',
              fontSize: '1.3rem',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--nav-height)',
            background: 'rgba(10, 8, 22, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '1rem',
            zIndex: 99,
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: 'var(--color-cream)',
                textDecoration: 'none',
                fontSize: 'var(--text-lg)',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(245, 199, 106, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.9rem' }}>→</span>
            </a>
          ))}
        </div>
      )}

      {/* Inline styles for desktop/mobile toggle */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

