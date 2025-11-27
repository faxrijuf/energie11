import React, { createContext, useContext, useState, ReactNode } from 'react';
import { az } from './az';
import { en } from './en';
import { ru } from './ru';

export type Language = 'az' | 'en' | 'ru';
type Translations = typeof en;

type PathValue<T, P extends string> =
  P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? PathValue<T[Key], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends string>(key: K) => PathValue<Translations, K>;
}

const translations: Record<Language, Translations> = {
  az,
  en,
  ru
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = <K extends string>(key: K): PathValue<Translations, K> => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return value as PathValue<Translations, K>;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
