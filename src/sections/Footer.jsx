import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppShare, buildShareableUrl } from '../utils/share';

export default function Footer() {
  const { lang, t } = useLanguage();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareSite = () => {
    const shareMessage = lang === 'hi'
      ? `✨ मेरे साथ दीपावली उत्सव मनाएं! दीप प्रज्वलित करें, रंगोली बनाएं और प्रकाश के इस महापर्व का आनंद लें:`
      : `✨ Join me in celebrating Diwali Utsav! Light interactive diyas, create rangolis, and experience the festival of lights:`;
    const shareUrl = buildShareableUrl({ lang });
    openWhatsAppShare(shareMessage, shareUrl, lang);
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, var(--color-night) 0%, #04050A 100%)',
        borderTop: '1px solid rgba(245, 199, 106, 0.2)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        marginTop: '2rem',
        zIndex: 10
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Festive Golden Diya Icon */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2.4rem', animation: 'flameFlicker 3s infinite ease-in-out', display: 'inline-block' }}>
            🪔
          </span>
        </div>

        {/* Brand & Tagline */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--text-xl)',
          color: 'var(--color-gold)',
          marginBottom: '0.5rem'
        }}>
          {siteConfig.title}
        </h3>

        <p style={{
          color: 'var(--color-muted)',
          maxWidth: '560px',
          margin: '0 auto 2rem auto',
          fontSize: 'var(--text-sm)'
        }}>
          {t.footer.shareText}
        </p>

        {/* Action Buttons: WhatsApp Share & Back to Top */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={handleShareSite}
            className="btn btn-whatsapp"
            aria-label="Share celebration link on WhatsApp"
          >
            <span>💬</span>
            <span>{t.greeting.shareBtn}</span>
          </button>

          <button
            onClick={handleBackToTop}
            className="btn btn-outline"
            aria-label={t.footer.backToTop}
          >
            <span>↑</span>
            <span>{t.footer.backToTop}</span>
          </button>
        </div>

        {/* Decorative Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(245, 199, 106, 0.3), transparent)',
          maxWidth: '700px',
          margin: '0 auto 2rem auto'
        }} />

        {/* Mandatory Configurable Creator Signature */}
        <p style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-gold-light)',
          fontWeight: 500,
          marginBottom: '0.6rem'
        }}>
          {t.footer.madeWith}{' '}
          <span style={{
            color: 'var(--color-gold)',
            fontWeight: 700,
            textDecoration: 'underline',
            textUnderlineOffset: '4px'
          }}>
            {siteConfig.creatorName}
          </span>
        </p>

        <p style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--color-muted-dark)'
        }}>
          © {new Date().getFullYear()} {siteConfig.shortTitle}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

