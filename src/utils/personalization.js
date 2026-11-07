import { siteConfig } from '../config/siteConfig.js';

/**
 * Safely parse, trim, and sanitize visitor/recipient name from URL parameters.
 * Returns null if no valid name is provided in the query string.
 */
export function getRawVisitorName(searchParams) {
  if (!searchParams) {
    if (typeof window !== 'undefined') {
      searchParams = new URLSearchParams(window.location.search);
    } else {
      return null;
    }
  }

  const rawName = searchParams.get('name');
  if (!rawName) return null;

  const trimmed = rawName.trim();
  if (!trimmed) return null;

  // Cap length to avoid visual overflow
  if (trimmed.length > siteConfig.maxNameLength) {
    return trimmed.slice(0, siteConfig.maxNameLength);
  }

  return trimmed;
}

/**
 * Returns the visitor name if available, otherwise falls back to a friendly recipient label.
 */
export function getPersonalizedName(searchParams, lang = 'en') {
  const raw = getRawVisitorName(searchParams);
  if (raw) return raw;
  return siteConfig.defaultRecipient[lang] || siteConfig.defaultRecipient.en;
}

/**
 * Safely parse optional sender name from URL parameters (?sender=...)
 */
export function getOptionalSenderName(searchParams) {
  if (!searchParams) {
    if (typeof window !== 'undefined') {
      searchParams = new URLSearchParams(window.location.search);
    } else {
      return null;
    }
  }

  const rawSender = searchParams.get('sender');
  if (!rawSender) return null;

  const trimmed = rawSender.trim();
  if (!trimmed) return null;

  if (trimmed.length > siteConfig.maxNameLength) {
    return trimmed.slice(0, siteConfig.maxNameLength);
  }

  return trimmed;
}

/**
 * Safely read initial language from URL or fallback to default
 */
export function getInitialLanguage(searchParams) {
  if (!searchParams && typeof window !== 'undefined') {
    searchParams = new URLSearchParams(window.location.search);
  }
  const langParam = searchParams ? searchParams.get('lang') : null;
  if (langParam === 'hi' || langParam === 'en') {
    return langParam;
  }
  return siteConfig.defaultLanguage;
}
