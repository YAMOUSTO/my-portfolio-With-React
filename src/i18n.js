
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json';
import translationTR from './locales/tr/translation.json'; // Assuming you have Turkish translations

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
  tr: {
    translation: translationTR, 
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  
  .init({
    resources,
    fallbackLng: 'en', 
    debug: process.env.NODE_ENV === 'development', 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], 
    },
  });

export default i18n;