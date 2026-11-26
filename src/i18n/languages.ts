export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'de', label: 'Deutsch' },
] as const;

export type Language = (typeof LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE: Language = 'en';

const STORAGE_KEY = 'hulm-language';

export function isLanguage(value: string | null | undefined): value is Language {
  return LANGUAGES.some((language) => language.code === value);
}

function getSavedLanguage(): Language | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(saved) ? saved : null;
  } catch {
    return null;
  }
}

export function saveLanguage(language: Language): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Storage can be blocked (private mode): the choice then lasts for this visit only.
  }
}

// 1) the visitor's own earlier choice, 2) the first browser/system language we support, 3) English.
export function detectLanguage(): Language {
  const saved = getSavedLanguage();
  if (saved) return saved;

  const preferred =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const tag of preferred) {
    const base = tag ? tag.toLowerCase().split('-')[0] : '';
    if (isLanguage(base)) return base;
  }

  return DEFAULT_LANGUAGE;
}
