import React, { useState, useMemo } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { getRawVisitorName, getOptionalSenderName } from '../utils/personalization';
import { copyToClipboard } from '../utils/clipboard';
import { openWhatsAppShare, buildShareableUrl } from '../utils/share';
import SectionHeading from '../components/SectionHeading';
import GiftBox from '../components/GiftBox';

export default function SurpriseSection() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const visitorName = useMemo(() => {
    return getRawVisitorName();
  }, []);

  const senderName = useMemo(() => {
    return getOptionalSenderName();
  }, []);

  const closingText = senderName
    ? (lang === 'hi' ? `सस्नेह, ${senderName} ❤️` : `With warm wishes, ${senderName} ❤️`)
    : t.surprise.closing;

  const surpriseCardMessage = useMemo(() => {
    const greetingSalutation = visitorName
      ? (lang === 'hi' ? `प्रिय ${visitorName},\n\n` : `Dearest ${visitorName},\n\n`)
      : '';
    const wishBody = t.surprise.message;
    return `${greetingSalutation}${wishBody}\n\n${closingText}`;
  }, [visitorName, lang, t, closingText]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(surpriseCardMessage);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  const handleShare = () => {
    const shareUrl = buildShareableUrl({
      name: visitorName,
      lang: lang,
      sender: senderName
    });
    openWhatsAppShare(surpriseCardMessage, shareUrl, lang);
  };

  return (
    <section id="surprise" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.surprise.tag}
          title={t.surprise.title}
          subtitle={t.surprise.subtitle}
        />

        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          {/* Gift Box Component */}
          <div style={{ marginBottom: '2rem' }}>
            <GiftBox isOpen={isOpen} onOpen={handleOpen} />
          </div>

          {!isOpen ? (
            <div>
              <button
                onClick={handleOpen}
                className="btn btn-primary"
                style={{ fontSize: 'var(--text-base)', padding: '0.9rem 2.2rem' }}
              >
                {t.surprise.tapToOpen}
              </button>
            </div>
          ) : (
            /* Revealed Greeting Card */
            <div
              className="glass-card"
              style={{
                border: '2px solid var(--color-gold)',
                boxShadow: 'var(--glow-gold-md)',
                animation: 'fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                padding: '2.5rem 2rem'
              }}
            >
              <span style={{ fontSize: '2.8rem', display: 'inline-block', marginBottom: '0.8rem' }}>🎉</span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem'
                }}
              >
                {t.surprise.openedTitle}
              </h3>

              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.8',
                  color: '#FFF6E5',
                  marginBottom: '1.5rem',
                  whiteSpace: 'pre-line'
                }}
              >
                {surpriseCardMessage}
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '1.5rem'
                }}
              >
                <button onClick={handleCopy} className="btn btn-outline">
                  {isCopied ? t.wishes.copiedBtn : t.wishes.copyBtn}
                </button>

                <button onClick={handleShare} className="btn btn-whatsapp">
                  <span>💬</span>
                  <span>{t.surprise.shareGiftBtn}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

