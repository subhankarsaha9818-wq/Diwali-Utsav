import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { siteConfig } from '../config/siteConfig';
import { wishTemplates } from '../data/wishes';
import { copyToClipboard } from '../utils/clipboard';
import { openWhatsAppShare, buildShareableUrl } from '../utils/share';
import { getRawVisitorName, getOptionalSenderName } from '../utils/personalization';
import SectionHeading from '../components/SectionHeading';

export default function WishesGeneratorSection() {
  const { lang, t } = useLanguage();

  const [recipient, setRecipient] = useState('friend');
  const [tone, setTone] = useState('warm');
  const [wishIndex, setWishIndex] = useState(0);
  const [customName, setCustomName] = useState(() => {
    return getRawVisitorName() || '';
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const optionalSender = useMemo(() => {
    return getOptionalSenderName();
  }, []);

  // Update default custom name when URL parameters or language changes
  useEffect(() => {
    const raw = getRawVisitorName();
    if (raw) setCustomName(raw);
  }, [lang]);

  // Generate greeting function
  const handleGenerate = useCallback((forceNext = false) => {
    const templatesForLang = wishTemplates[lang] || wishTemplates.en;
    const recipientTemplates = templatesForLang[recipient] || templatesForLang.friend;
    const templateList = recipientTemplates[tone] || recipientTemplates.warm;

    let targetIndex = wishIndex;
    if (Array.isArray(templateList)) {
      if (forceNext && templateList.length > 1) {
        do {
          targetIndex = Math.floor(Math.random() * templateList.length);
        } while (targetIndex === wishIndex);
      } else if (targetIndex >= templateList.length) {
        targetIndex = 0;
      }
      setWishIndex(targetIndex);
      const templateFn = templateList[targetIndex];
      const effectiveName = customName.trim() || t.wishes.recipients[recipient] || siteConfig.defaultRecipient[lang];
      const message = templateFn(effectiveName, optionalSender);
      setGeneratedMessage(message);
    } else if (typeof templateList === 'function') {
      const effectiveName = customName.trim() || t.wishes.recipients[recipient] || siteConfig.defaultRecipient[lang];
      setGeneratedMessage(templateList(effectiveName, optionalSender));
    }
    setIsCopied(false);
  }, [lang, recipient, tone, customName, wishIndex, t, optionalSender]);

  // Initial generation on load or parameter change
  useEffect(() => {
    handleGenerate(false);
  }, [lang, recipient, tone]);

  const handleCopy = async () => {
    const success = await copyToClipboard(generatedMessage);
    if (success) {
      setIsCopied(true);
      setAnnouncement(t.feedback.copied);
      setTimeout(() => {
        setIsCopied(false);
        setAnnouncement('');
      }, 3000);
    } else {
      setAnnouncement(t.feedback.copyFailed);
    }
  };

  const handleWhatsAppShare = () => {
    const effectiveName = customName.trim();
    const shareUrl = buildShareableUrl({
      name: effectiveName,
      lang: lang,
      sender: optionalSender
    });
    openWhatsAppShare(generatedMessage, shareUrl, lang);
  };

  return (
    <section id="wishes" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag={t.wishes.tag}
          title={t.wishes.title}
          subtitle={t.wishes.subtitle}
        />

        {/* Form & Preview Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            border: '1px solid rgba(245, 199, 106, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Controls Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.5rem'
            }}
          >
            {/* Recipient Selector */}
            <div className="form-group" style={{ margin: 0 }}>
              <label htmlFor="wishes-recipient" className="form-label">{t.wishes.recipientLabel}</label>
              <select
                id="wishes-recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="form-select"
              >
                <option value="friend">{t.wishes.recipients.friend}</option>
                <option value="family">{t.wishes.recipients.family}</option>
                <option value="teacher">{t.wishes.recipients.teacher}</option>
                <option value="colleague">{t.wishes.recipients.colleague}</option>
                <option value="everyone">{t.wishes.recipients.everyone}</option>
              </select>
            </div>

            {/* Tone Selector */}
            <div className="form-group" style={{ margin: 0 }}>
              <label htmlFor="wishes-tone" className="form-label">{t.wishes.toneLabel}</label>
              <select
                id="wishes-tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="form-select"
              >
                <option value="warm">{t.wishes.tones.warm}</option>
                <option value="traditional">{t.wishes.tones.traditional}</option>
                <option value="cheerful">{t.wishes.tones.cheerful}</option>
              </select>
            </div>

            {/* Custom Recipient Name */}
            <div className="form-group" style={{ margin: 0 }}>
              <label htmlFor="wishes-name" className="form-label">{t.wishes.customNameLabel}</label>
              <input
                id="wishes-name"
                type="text"
                value={customName}
                maxLength={siteConfig.maxNameLength}
                placeholder={t.wishes.customNamePlaceholder}
                onChange={(e) => setCustomName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          {/* Action to regenerate */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <button
              onClick={() => handleGenerate(true)}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.6rem', fontSize: 'var(--text-xs)' }}
            >
              {t.wishes.generateBtn}
            </button>
          </div>

          {/* Editable Output Area */}
          <div className="form-group">
            <label htmlFor="wishes-output" className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{t.wishes.generatedLabel}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>✎ You can edit before sharing</span>
            </label>
            <textarea
              id="wishes-output"
              value={generatedMessage}
              onChange={(e) => setGeneratedMessage(e.target.value)}
              rows={6}
              className="form-textarea"
              style={{
                lineHeight: '1.7',
                fontSize: 'var(--text-sm)',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Share & Copy Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '1rem',
              marginTop: '1.5rem'
            }}
          >
            <button
              onClick={handleCopy}
              className="btn btn-outline"
              style={{
                borderColor: isCopied ? 'var(--color-gold)' : 'var(--color-card-border)',
                color: isCopied ? 'var(--color-gold)' : 'inherit'
              }}
              aria-label="Copy message text to clipboard"
            >
              {isCopied ? t.wishes.copiedBtn : t.wishes.copyBtn}
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="btn btn-whatsapp"
              aria-label="Share generated message directly on WhatsApp"
            >
              <span>💬</span>
              <span>{t.wishes.whatsappBtn}</span>
            </button>
          </div>

          {/* Accessible live region for feedback */}
          <div aria-live="polite" className="sr-only">
            {announcement}
          </div>
        </div>
      </div>
    </section>
  );
}

