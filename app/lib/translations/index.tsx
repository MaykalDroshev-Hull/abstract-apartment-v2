'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from './types';
import { en } from './en';
import { bg } from './bg';
import { el } from './el';

const translations: Record<Language, Translations> = {
  en,
  bg,
  el,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get initial language from localStorage
function getInitialLanguage(): Language {
  // Only access localStorage if we're in the browser
  if (typeof window === 'undefined') {
    return 'en';
  }
  
  try {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bg' || savedLanguage === 'el')) {
      return savedLanguage;
    }
  } catch (e) {
    // localStorage might not be available
  }
  
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with language from localStorage immediately using lazy initialization
  // This prevents the flash by reading localStorage during the first render
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Sync with localStorage on mount to ensure consistency
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bg' || savedLanguage === 'el') && savedLanguage !== language) {
      setLanguageState(savedLanguage);
      document.documentElement.setAttribute('lang', savedLanguage);
    } else {
      // Update html lang attribute to match current language
      document.documentElement.setAttribute('lang', language);
    }
    setIsHydrated(true);
    // Mark as hydrated to show body content
    document.documentElement.removeAttribute('data-wait-hydration');
    document.documentElement.setAttribute('data-hydrated', 'true');
  }, [language]);

  // Update html lang attribute when language changes
  useEffect(() => {
    if (isHydrated && typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', language);
    }
  }, [language, isHydrated]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      // Also set cookie for server-side reading
      document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      // Update html lang attribute
      document.documentElement.setAttribute('lang', lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslations() {
  const { t } = useLanguage();
  return t;
}

