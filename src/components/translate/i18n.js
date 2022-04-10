import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from './languages'

i18next.use(LanguageDetector).init({
    debug: false,
    defaultNS: ['translations'],
    fallbackLng: 'pt',
    ns: ['translations'],
    interpolation: {
        escapeValue: false,
    },
    resources: messages
})

export default i18next;