import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-US/en-US.json';
import ja from './ja-JP/ja-JP.json';

const resources = {
  en,
  ja,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
