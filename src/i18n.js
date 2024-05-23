import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    ns: ['common','1-0-0'],
    defaultNs: 'common',
    detection: {
      order: ['querystring'],
      caches: [],
      lookupQuerystring: 'vehicleType'
    },
    backend: {
      loadPath: `/i18n/{{lng}}/{{ns}}.json`
    },
    interpolation: {
      escapeValue: false // React already escapes by default
    },
  });

export default i18next;
