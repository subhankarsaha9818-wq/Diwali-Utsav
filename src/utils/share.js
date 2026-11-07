/**
 * WhatsApp Sharing Utilities for Diwali Utsav
 * Handles dynamic production origin detection, emoji UTF-8 safety,
 * query parameter preservation, and local development notices.
 */

/**
 * Check if the application is currently running in a local development environment.
 */
export function isLocalEnvironment() {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname;
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname.endsWith('.local')
  );
}

/**
 * Dynamically construct the shareable website URL using the current deployment origin.
 * Does not hardcode localhost or invent domains.
 * Format: https://YOUR-DEPLOYED-DOMAIN/?lang=en&name=Mehak
 */
export function buildShareableUrl({ name, lang = 'en', sender } = {}) {
  if (typeof window === 'undefined') return '';

  const origin = window.location.origin;
  const pathname = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : `${window.location.pathname}/`;

  const url = new URL(pathname, origin);

  // Set query parameters in clean, readable order: ?lang=...&name=...
  if (lang) {
    url.searchParams.set('lang', lang);
  }
  if (name && typeof name === 'string' && name.trim()) {
    url.searchParams.set('name', name.trim());
  }
  if (sender && typeof sender === 'string' && sender.trim()) {
    url.searchParams.set('sender', sender.trim());
  }

  return url.toString();
}

/**
 * Display a temporary on-screen notice if the user triggers WhatsApp sharing from localhost
 */
function showLocalhostNoticeToast() {
  if (typeof document === 'undefined') return;

  const existingToast = document.getElementById('localhost-share-notice');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'localhost-share-notice';
  toast.setAttribute('role', 'alert');
  toast.style.position = 'fixed';
  toast.style.bottom = '2rem';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.zIndex = '9999';
  toast.style.maxWidth = '92vw';
  toast.style.width = '540px';
  toast.style.background = 'rgba(20, 10, 38, 0.96)';
  toast.style.border = '1px solid #F5C76A';
  toast.style.color = '#FFF5E1';
  toast.style.padding = '1rem 1.4rem';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(245, 199, 106, 0.4)';
  toast.style.fontSize = '0.85rem';
  toast.style.lineHeight = '1.5';
  toast.style.textAlign = 'left';
  toast.style.animation = 'fadeInUp 0.3s ease';

  toast.innerHTML = `
    <div style="display:flex; align-items:flex-start; gap:0.75rem;">
      <span style="font-size:1.4rem; line-height:1;">⚠️</span>
      <div style="flex:1;">
        <strong style="color:#F5C76A; display:block; margin-bottom:0.25rem;">Localhost Development Notice</strong>
        <span>The link currently includes <code>${window.location.origin}</code> because you are testing locally. <strong>Once deployed to Vercel or Netlify</strong>, your actual live domain will be used automatically.</span>
      </div>
      <button style="background:none; border:none; color:#C7BCD4; font-size:1.1rem; cursor:pointer; padding:0 0.3rem;" onclick="this.parentElement.parentElement.remove()">✕</button>
    </div>
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 7000);
}

/**
 * Generate WhatsApp share link with UTF-8 emoji safety and dynamic origin URL
 */
export function getWhatsAppShareUrl(message, currentUrl, lang = 'en') {
  const urlToShare = currentUrl || (typeof window !== 'undefined' ? buildShareableUrl({ lang }) : '');

  const leadIn = lang === 'hi'
    ? '🪔 मेरे साथ दीपावली उत्सव मनाएं:'
    : '🪔 Celebrate Diwali with me here:';

  const isLocal = isLocalEnvironment();
  const localNotice = isLocal
    ? '\n(⚠️ Development Note: Generated from localhost - for external visitors, please deploy to Vercel or Netlify)'
    : '';

  const fullText = message
    ? `${message}\n\n${leadIn}\n${urlToShare}${localNotice}`
    : `${leadIn}\n${urlToShare}${localNotice}`;

  // Sanitize Unicode variation selector \uFE0F which causes some WhatsApp versions/browsers to render \uFFFD replacement characters
  const cleanText = fullText.replace(/\uFE0F/g, '');

  // Use direct WhatsApp Web/App endpoint (api.whatsapp.com/send) which parses UTF-8 directly without HTTP 302 redirect drops
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(cleanText)}`;
}

/**
 * Open WhatsApp sharing safely in a new tab/window
 */
export function openWhatsAppShare(message, currentUrl, lang = 'en') {
  if (isLocalEnvironment()) {
    showLocalhostNoticeToast();
    console.warn(
      'WhatsApp Share Notice: Sharing from localhost (%s). In production (Vercel/Netlify), your live deployment domain will be shared automatically.',
      typeof window !== 'undefined' ? window.location.origin : 'local'
    );
  }

  const url = getWhatsAppShareUrl(message, currentUrl, lang);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
