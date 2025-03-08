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
          TITLES: {
            HOME: 'Home',
            SAVE_THE_DATE: 'Save the date!',
            OUR_STORY: 'Our Story',
            THE_EVENT: 'The event',
            CEREMONY_AND_RECEPTION: 'Ceremony & Reception',
            RSVP: 'RSPV'
          }
        }
      },
      es: {
        translation: {
          TITLES: {
            HOME: 'Inicio',
            SAVE_THE_DATE: '¡Guarda la fecha!',
            OUR_STORY: 'Nuestra historia',
            THE_EVENT: 'El evento',
            CEREMONY_AND_RECEPTION: 'Ceremonia & Recepción',
            RSVP: 'Asistencia'
          }
        }
      },
      de: {
        translation: {
          TITLES: {
            HOME: 'Home',
            SAVE_THE_DATE: 'Speichern Sie das Datum!',
            OUR_STORY: 'Unsere Geschichte',
            THE_EVENT: 'Die Veranstaltung',
            CEREMONY_AND_RECEPTION: 'Zeremonie & Empfangn',
            RSVP: 'RSVP'
          }
        }
      },
    }
  });

export default i18n;