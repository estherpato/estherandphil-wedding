import { Html } from '@mui/icons-material';
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
          },
          COUNTDOWN: {
            DAYS: 'days',
            DAY: 'day',
            HOURS: 'hours',
            HOUR: 'hour',
            MINS: 'mins',
            MIN: 'min',
            SECS: 'secs',
            SEC: 'sec',
          },
          SAVE_THE_DATE: {
            SUBTITLE: 'Join us as we seal our love with an <strong>"I do"</strong> that will last a lifetime',
            WHEN: 'When?',
            DATE: '6th of June, 2026 · 18:00',
            CALENDAR_BUTTON: 'Save on your calendar',
            WHERE: 'Where?',
            LOCATION_BUTTON: 'See location'
          },
          OUR_STORY: {
            P1: "Although we officially met in 2016, it wasn't until 2020 that our paths crossed again.",
            P2: "The first steps were not easy and we spent them travelling between Madrid, El Tiemblo and Berlin. Until 2023 when we decided to move to Spain for good.",
            P3: "In October 2024, we left for Japan with empty suitcases and our hearts brimming with wishes. We returned with full suitcases, two happy hearts and a ring on Esther's finger.",
            P4: "Those who know us will know that our love for watching anime, reading manga and playing video games brought us together; but it is our love for each other that keeps us going.",
            P5: "On the 6th of June, we will take another step forward and officially unite our hearts, and we are very happy that you will be a part of it."
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
          },
          COUNTDOWN: {
            DAYS: 'días',
            DAY: 'día',
            HOURS: 'horas',
            HOUR: 'hora',
            MINS: 'mins',
            MIN: 'min',
            SECS: 'segs',
            SEC: 'seg',
          },
          SAVE_THE_DATE: {
            SUBTITLE: 'Acompáñanos a sellar nuestro amor con un <strong>"sí"</strong> que durará toda la vida',
            WHEN: '¿Cuándo?',
            DATE: '6 de junio, 2026 · 18:00',
            CALENDAR_BUTTON: 'Añádelo en tu calendario',
            WHERE: '¿Dónde?',
            LOCATION_BUTTON: 'Ver ubicación'
          },
          OUR_STORY: {
            P1: "Aunque nos conocimos oficialmente en 2016, no fue hasta 2020 cuando nuestros caminos volvieron a cruzarse.",
            P2: "Los primeros pasos no fueron fáciles, y pasamos mucho tiempo viajando entre Madrid, El Tiemblo y Berlín. Hasta que en 2023 decidimos mudarnos definitivamente a España.",
            P3: "En octubre de 2024, partimos hacia Japón con las maletas vacías y el corazón rebosante de deseos. Volvimos con las maletas llenas, dos corazones felices y un anillo en el dedo de Esther.",
            P4: "Quienes nos conocen saben que nuestra afición por el anime, el manga y los videojuegos nos unió, pero es nuestro amor mutuo lo que nos hace seguir adelante.",
            P5: "El próximo 6 de junio daremos un paso más y uniremos oficialmente nuestros corazones, y estamos muy felices de que formes parte de ello.",
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
          },
          COUNTDOWN: {
            DAYS: 'Tage',
            DAY: 'Tag',
            HOURS: 'Stunden',
            HOUR: 'Stunde',
            MINS: '??',
            MIN: '??',
            SECS: '??',
            SEC: '??',
          },
          SAVE_THE_DATE: {
            SUBTITLE: 'Join us as we seal our love with an <strong>"I do"</strong> that will last a lifetime',
            WHEN: 'When?',
            DATE: '6th of June, 2026 · 18:00',
            CALENDAR_BUTTON: 'Save on your calendar',
            WHERE: 'Where?',
            LOCATION_BUTTON: 'See location'
          },
        }
      },
    }
  });

export default i18n;