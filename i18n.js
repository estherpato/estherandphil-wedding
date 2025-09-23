
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
            RSVP: 'R.S.V.P.'
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
            P1: "Although we talked for the first time in 2017, it wasn't until 2020 that our paths crossed again.",
            P2: "The first steps were not easy and we spent them travelling between Madrid, El Tiemblo and Berlin. Until 2023 when we decided to move to Spain for good.",
            P3: "In October 2024, we left for Japan with empty suitcases and our hearts brimming with wishes. We returned with full suitcases, two happy hearts and a ring on Esther's finger.",
            P4: "Those who know us will know that our love for watching anime, reading manga and playing video games brought us together; but it is our love for each other that keeps us going.",
            P5: "On the 6th of June, we will take another step forward and officially unite our hearts, and we are very happy that you will be a part of it."
          },
          SCHEDULE: {
            ROW1: 'Wedding ceremony in the hotel garden',
            ROW2: 'Cocktail reception in the hotel garden',
            ROW3: 'Dinner in "El Patio" lounge',
            ROW4: 'Party and dancing until the body can take it',
            NOTE: '*Remember that times are approximate.',
          },
          RSVP: {
            P1: 'We would love to see you there!',
            P2: 'Please register using the form below by simply adding your name and confirmation.'
          },
          FORM: {
            NAME_LABEL: 'Full name',
            CONFIRMATION: 'Are you coming?',
            POSITIVE: 'Yes',
            NEGATIVE: 'No',
            UNSURE: "I'm not sure",
            EXTRA_QUESTIONS: 'We are almost ready! Just a few more questions to make sure everything will be perfect.',
            PLUS_ONE: 'Are you bringing a +1 along?',
            PARTNER_NAME_LABEL: 'Full name of your partner',
            PARTNER_NOTE: 'Remember to let us know well in advance if you will be bringing a partner to the wedding.',
            CHILDREN_QUESTION: 'Are you bringing your children along?',
            HOW_MANY_CHILDREN: 'How many?',
            CHILD_NAME_AGE: 'Child #{{index}}: name and age',
            CHILD_NOTE: ' Please, remember to let us know well in advance so we have everything ready for them too!',
            HOTEL: 'Do you need a hotel room?',
            HOTEL_NOTE1: 'Please note that the rooms are guaranteed to be available from 5 to 7 June.',
            HOTEL_NOTE2: 'Unfortunately, due to circumstances beyond our control, we are unable to reserve rooms for any dates prior to Friday 5 June.',
            DATE_FROM: 'From when?',
            DATE_TO: 'Until when?',
            HOTEL_NOTE: 'Please remember to let us know in advance if you need to book a room at the hotel. We cannot guarantee availability if we are notified too late.',
            FOOD: 'Do you have any allergies, intolerances or special diets?',
            FOOD_RESTRICTION: 'Let us know',
            COMMENTS: 'Do you want to tell us something else?',
            SEND_BUTTON: 'Send'
          },
          MODAL: {
            TITLE_OK: 'Thank you!',
            SUBMISSION_OK: 'Form submitted successfully!',
            SUBMISSION_KO: 'Error submitting form. Please try again.',
            TITLE_ERROR: 'Oops!',
            ERROR_MESSAGE: 'An unexpected error occurred. Try again later.'
          },
          MODAL_NEGATIVE: {
            TITLE: 'Hold on!!!',
            MESSAGE: 'What do you mean "NO"? Are you sure? 😟',
            BUTTON_1: 'Not really...',
            BUTTON_2: 'Yes!',
          },
          MODAL_INIT: {
            TITLE: 'Hey!',
            MESSAGE: 'To enjoy the full experience, you should turn your volume up!',
            BUTTON: 'Done'
          },
          FOOTER: {
            CONTACT: 'Contact us',
            MESSAGE: "Can’t wait to celebrate with you!"
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
            P1: "Aunque la primera vez que hablamos fue en 2017, no fue hasta 2020 cuando nuestros caminos volvieron a cruzarse.",
            P2: "Los primeros pasos no fueron fáciles, y pasamos mucho tiempo viajando entre Madrid, El Tiemblo y Berlín. Hasta que en 2023 decidimos mudarnos definitivamente a España.",
            P3: "En octubre de 2024, partimos hacia Japón con las maletas vacías y el corazón rebosante de deseos. Volvimos con las maletas llenas, dos corazones felices y un anillo en el dedo de Esther.",
            P4: "Quienes nos conocen saben que nuestra afición por el anime, el manga y los videojuegos nos unió, pero es nuestro amor mutuo lo que nos hace seguir adelante.",
            P5: "El próximo 6 de junio daremos un paso más y uniremos oficialmente nuestros corazones, y estamos muy felices de que formes parte de ello.",
          },
          SCHEDULE: {
            ROW1: 'Ceremonia civil en el jardín del hotel',
            ROW2: 'Cóctel en el jardín del hotel',
            ROW3: 'Cena en el salón "El Patio"',
            ROW4: 'Fiesta y baile hasta que el cuerpo aguante',
            NOTE: '*Recuerda que el horario es aproximado.'
          },
          RSVP: {
            P1: '¡Nos encantaría verte allí!',
            P2: 'Por favor, regístrate utilizando el siguiente formulario, simplemente añadiendo tu nombre y confirmación.'
          },
          FORM: {
            NAME_LABEL: 'Nombre completo',
            CONFIRMATION: '¿Vas a venir?',
            POSITIVE: 'Sí',
            NEGATIVE: 'No',
            UNSURE: "No estoy segur@",
            EXTRA_QUESTIONS: '¡Ya casi estamos! Solo algunas preguntas más para asegurarnos de que todo saldrá perfecto.',
            PLUS_ONE: '¿Vas a traer un +1?',
            PARTNER_NAME_LABEL: 'Nombre completo de tu +1',
            PARTNER_NOTE: 'Recuerda avisarnos con suficiente antelación si vas a traer +1 a la boda.',
            CHILDREN_QUESTION: "¿Vas a traer a tus hij@s?",
            HOW_MANY_CHILDREN: "¿Cuántos?",
            CHILD_NAME_AGE: "Hij@ #{{index}}: nombre y edad",
            CHILD_NOTE: "¡Porfa, acuérdate de avisarnos con tiempo para tenerlo todo listo también para ellos!",
            HOTEL: '¿Necesita una habitación de hotel?',
            HOTEL_NOTE1: 'Ten en cuenta que las habitaciones estarán disponibles del 5 al 7 de junio.',
            HOTEL_NOTE2: 'Por desgracia, por motivos que no dependen de nosotros, no podemos reservar habitaciones para fechas anteriores al viernes 5 de junio.',
            DATE_FROM: '¿Desde qué fecha?',
            DATE_TO: '¿Hasta qué fecha?',
            HOTEL_NOTE: 'No olvides avisarnos con antelación si necesitas reservar una habitación en el hotel. No podemos garantizar la disponibilidad si se nos avisa demasiado tarde.',
            FOOD: '¿Tienes alergias, intolerancias o dietas especiales?',
            FOOD_RESTRICTION: 'Cuéntanos más',
            COMMENTS: '¿Quieres contarnos algo más?',
            SEND_BUTTON: 'Enviar'
          },
          MODAL: {
            TITLE_OK: '¡Gracias!',
            SUBMISSION_OK: '¡El formulario se ha enviado correctamente!',
            SUBMISSION_KO: 'Ha ocurrido un error al enviar el formulario. Prueba de nuevo.',
            TITLE_ERROR: '¡Ups!',
            ERROR_MESSAGE: 'Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.'
          },
          MODAL_NEGATIVE: {
            TITLE: '¡Espera!',
            MESSAGE: '¿Cómo que "NO"? ¿Estás segur@? 😟',
            BUTTON_1: 'No mucho...',
            BUTTON_2: '¡Sí!',
          },
          MODAL_INIT: {
            TITLE: '¡Hey!',
            MESSAGE: 'Para disfrutar de la experiencia, ¡sube el volumen!',
            BUTTON: 'Listo'
          },
          FOOTER: {
            CONTACT: 'Contacto',
            MESSAGE: "¡Estamos deseando celebrarlo contigo!"
          }
        }
      },
      de: {
        translation: {
          TITLES: {
            HOME: 'Startseite',
            SAVE_THE_DATE: 'Save the date!',
            OUR_STORY: 'Unsere Geschichte',
            THE_EVENT: 'Das Event',
            CEREMONY_AND_RECEPTION: 'Zeremonie & Empfang',
            RSVP: 'Bestätigung der Teilnahme'
          },
          COUNTDOWN: {
            DAYS: 'Tage',
            DAY: 'Tag',
            HOURS: 'Stunden',
            HOUR: 'Stunde',
            MINS: 'Min',
            MIN: 'Min',
            SECS: 'Sek',
            SEC: 'Sek',
          },
          SAVE_THE_DATE: {
            SUBTITLE: 'Begleite uns, wenn wir unsere Liebe mit einem <strong>"Ich will"</strong> für immer besiegeln',
            WHEN: 'Wann?',
            DATE: '6. Juni, 2026 - 18:00 Uhr',
            CALENDAR_BUTTON: 'Im Kalender speichern',
            WHERE: 'Wo?',
            LOCATION_BUTTON: 'Standort'
          },
          OUR_STORY: {
            P1: "Unsere ersten Worte wechselten wir 2017, doch unsere Wege führten uns erst 2020 erneut zusammen.",
            P2: "Der Anfang war nicht leicht - unzählige Reisen zwischen Madrid, El Tiemblo und Berlin bestimmten unseren Alltag. Bis wir uns schließlich 2023 entschieden, unser gemeinsames Leben dauerhaft in Spanien aufzubauen.",
            P3: "Im Oktober 2024 machten wir uns mit leeren Koffern und voller Träume auf den Weg nach Japan. Zurück kamen wir mit vielen Erinnerungen, vollen Koffern, zwei glücklichen Herzen – und einem Ring an Esthers Finger.",
            P4: "Wer uns kennt, weiß, dass unsere gemeinsame Leidenschaft für Anime, Manga und Videospiele uns zusammengebracht hat. Aber es ist unsere Liebe zueinander, die uns verbindet und stärkt.",
            P5: "Am 6. Juni wagen wir den nächsten Schritt und besiegeln unser Glück offiziell - und wir freuen uns riesig, dass du diesen besonderen Moment mit uns teilst."
          },
          SCHEDULE: {
            ROW1: 'Trauung im Garten des Hotels',
            ROW2: 'Cocktail-Empfang im Garten des Hotels',
            ROW3: 'Abendessen im Salon "El Patio"',
            ROW4: 'Feiern und Tanzen bis die Wolken wieder lila sind',
            NOTE: '*Angaben ohne Gewähr.',
          },
          RSVP: {
            P1: 'Wir würden uns freuen, dich dort zu sehen!',
            P2: 'Bitte fülle das unten stehende Formular aus, um deine Teilnahme zu bestätigen.'
          },
          FORM: {
            NAME_LABEL: 'Vor- und Nachname',
            CONFIRMATION: 'Wirst du kommen?',
            POSITIVE: 'Ja',
            NEGATIVE: 'Nein',
            UNSURE: "Vielleicht",
            EXTRA_QUESTIONS: 'Wir sind fast fertig! Nur noch ein paar Fragen, um sicherzustellen, dass alles perfekt ist.',
            PLUS_ONE: 'Kommst du in Begleitung?',
            PARTNER_NAME_LABEL: 'Vor- und Nachname deiner Begleitung',
            PARTNER_NOTE: 'Vergiss nicht, uns im Voraus mitzuteilen, ob du eine Begleitung zur Hochzeit mitbringst.',
            CHILDREN_QUESTION: 'Bringst du deine Kinder mit?',
            HOW_MANY_CHILDREN: 'Wie viele?',
            CHILD_NAME_AGE: 'Kind #{{index}}: Name und Alter',
            CHILD_NOTE: 'Vergiss nicht, uns im Voraus mitzuteilen, ob du Kinder zur Hochzeit mitbringst.',
            HOTEL: 'Brauchst du ein Hotelzimmer?',
            HOTEL_NOTE1: 'Achtung! Die Zimmer sind erst ab 5. Juni verfügbar und nur bis 7. Juni garantiert.',
            HOTEL_NOTE2: 'Leider können wir aufgrund von Umständen, die wir nicht beeinflussen können, keine Zimmer für Termine vor Freitag, dem 5. Juni, reservieren.',
            DATE_FROM: 'Von wann?',
            DATE_TO: 'Bis wann?',
            HOTEL_NOTE: 'Bitte denk daran, uns im Voraus Bescheid zu geben, wenn du ein Zimmer im Hotel buchen musst. Wir können die Verfügbarkeit nicht garantieren, wenn wir zu spät benachrichtigt werden.',
            FOOD: 'Hast du irgendwelche Allergien, Unverträglichkeiten oder spezielle Diäten?',
            FOOD_RESTRICTION: 'Welche?',
            COMMENTS: 'Möchtest du uns noch etwas mitteilen?',
            SEND_BUTTON: 'Absenden'
          },
          MODAL: {
            TITLE_OK: 'Dankeschön!',
            SUBMISSION_OK: 'Formular erfolgreich ausgefüllt!',
            SUBMISSION_KO: 'Fehlgeschlagen. Bitte erneut versuchen.',
            TITLE_ERROR: 'Oops!',
            ERROR_MESSAGE: 'Ein unerwarteter Fehler ist aufgetreten. Versuche es später noch einmal.'
          },
          MODAL_NEGATIVE: {
            TITLE: 'Warte!!!',
            MESSAGE: 'Was meinst du mit "NEIN"? Bist du dir sicher? 😟',
            BUTTON_1: 'Nich wirklich...',
            BUTTON_2: 'Ja!',
          },
          MODAL_INIT: {
            TITLE: 'Hey!',
            MESSAGE: 'Bevor du loslegst, dreh die Lautstärke hoch!',
            BUTTON: 'Fertig'
          },
          FOOTER: {
            CONTACT: 'Kontaktiere uns',
            MESSAGE: "Wir können es kaum erwarten, mit dir zu feiern!"
          }
        }
      },
    }
  });

export default i18n;