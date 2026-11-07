import React, { useMemo } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { siteConfig } from '../config/siteConfig';
import { getRawVisitorName, getOptionalSenderName } from '../utils/personalization';
import { openWhatsAppShare, buildShareableUrl } from '../utils/share';
import SectionHeading from '../components/SectionHeading';

export default function GreetingSection() {
  const { lang, t } = useLanguage();

  const visitorName = useMemo(() => {
    return getRawVisitorName();
  }, []);

  const senderName = useMemo(() => {
    return getOptionalSenderName();
  }, []);

  const closingText = senderName
    ? `${t.greeting.signOffPrefix} ${senderName} ❤️`
    : t.greeting.closing;

  const handleShare = () => {
    const shareUrl = buildShareableUrl({
      name: visitorName,
      lang: lang,
      sender: senderName
    });

    const greetingText = lang === 'hi'
      ? (visitorName
          ? `✨ शुभ दीपावली, ${visitorName}! ✨\n\nदीपावली के इस पावन पर्व पर माँ महालक्ष्मी आपके घर को सुख-समृद्धि से भर दें और आपका जीवन खुशियों से जगमगाता रहे!\n\n${closingText}`
          : `✨ शुभ दीपावली! ✨\n\nदीपावली के इस पावन पर्व पर माँ महालक्ष्मी आपके घर को सुख-समृद्धि से भर दें और आपका जीवन खुशियों से जगमगाता रहे!\n\n${closingText}`)
      : (visitorName
          ? `✨ Shubh Deepavali, ${visitorName}! ✨\n\nMay Goddess Lakshmi bless your life with abundant joy, health, and prosperity this Diwali!\n\n${closingText}`
          : `✨ Shubh Deepavali! ✨\n\nMay Goddess Lakshmi bless your life with abundant joy, health, and prosperity this Diwali!\n\n${closingText}`);

    openWhatsAppShare(greetingText, shareUrl, lang);
  };

  return (
    <section id="greeting" className="section-wrapper">
      <div className="container">
        <SectionHeading
          tag={t.greeting.tag}
          title={t.greeting.title}
          subtitle=""
        />

        {/* Personalized Card Frame */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8), var(--glow-gold-sm)',
            border: '2px solid rgba(245, 199, 106, 0.4)',
            backgroundImage: `
              linear-gradient(135deg, rgba(20, 12, 38, 0.88) 0%, rgba(35, 18, 60, 0.92) 100%),
              url(${siteConfig.images.greetingCard})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 'clamp(2rem, 1.5rem + 3vw, 4rem)'
          }}
        >
          {/* Ornate Corner Accents */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '32px',
              height: '32px',
              borderTop: '2px solid var(--color-gold)',
              borderLeft: '2px solid var(--color-gold)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '32px',
              height: '32px',
              borderTop: '2px solid var(--color-gold)',
              borderRight: '2px solid var(--color-gold)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              width: '32px',
              height: '32px',
              borderBottom: '2px solid var(--color-gold)',
              borderLeft: '2px solid var(--color-gold)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '32px',
              height: '32px',
              borderBottom: '2px solid var(--color-gold)',
              borderRight: '2px solid var(--color-gold)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-block' }}>🪔</span>

            {/* Salutation / Heading */}
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-2xl)',
                color: 'var(--color-gold-light)',
                marginBottom: '1.25rem'
              }}
            >
              {visitorName ? (
                <>
                  {t.greeting.salutation}{' '}
                  <span
                    style={{
                      color: 'var(--color-gold)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '6px',
                      textDecorationColor: 'rgba(245, 199, 106, 0.5)'
                    }}
                  >
                    {visitorName}
                  </span>
                  ,
                </>
              ) : (
                <span>{t.greeting.noNameTitle}</span>
              )}
            </h3>

            {/* Greeting Body Text */}
            <p
              style={{
                fontSize: 'var(--text-base)',
                lineHeight: '1.8',
                color: '#FFF5E1',
                marginBottom: '2rem',
                maxWidth: '620px',
                margin: '0 auto 2rem auto'
              }}
            >
              {t.greeting.body}
            </p>

            {/* Warm Greeting Sign-off */}
            <div
              style={{
                marginBottom: '2.5rem',
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-lg)',
                color: 'var(--color-gold)'
              }}
            >
              <p style={{ color: '#FFE399' }}>
                {closingText}
              </p>
            </div>

            {/* Share Greeting Action */}
            <button
              onClick={handleShare}
              className="btn btn-whatsapp"
              aria-label="Share this personalized greeting via WhatsApp"
            >
              <span>💬</span>
              <span>{t.greeting.shareBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

