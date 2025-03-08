import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React"
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido a React"
        }
      },
      de: {
        translation: {
          welcome: "Wilkommen"
        }
      },
    }
  });

export default i18n;