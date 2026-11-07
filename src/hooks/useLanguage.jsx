import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { getInitialLanguage } from '../utils/personalization';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return getInitialLanguage();
  });

  useEffect(() => {
    // Sync html tag lang attribute
    document.documentElement.lang = lang;
    
    // Update URL query parameter smoothly without reload
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

