import { createContext } from 'react';
import type { Language } from './languages';
import type { Translations } from './en';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
