import 'server-only';
import type { Locale } from './i18n-config.ts';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  ka: () => import('./dictionaries/ka.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ka();
