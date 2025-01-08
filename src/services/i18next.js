import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '../languages/english.json'
import nepali from '../languages/nepali.json'

export  const languageResources = {
    English : {translation: english},
    Nepali : {translation: nepali}
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'English',
    fallbackLng: 'English',
    resources: languageResources
})

export default i18next