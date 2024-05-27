//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslations from "./locale/pt.json";
import enTranslations from "./locale/en.json";
import jpTranslations from "./locale/jp.json";

const browserLanguage = navigator.language.slice(0, 2);
const supportedLanguages = ["pt", "ja", "en"];
let selectedLanguage;

if (localStorage.getItem("selectedLanguage")) {
  selectedLanguage = localStorage.getItem("selectedLanguage");
} else {
  selectedLanguage = supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : "en";
  localStorage.setItem("selectedLanguage", selectedLanguage);
}

i18next.use(initReactI18next).init({
  resources: {
    pt: {
      ...ptTranslations,
    },
    en: {
      ...enTranslations,
    },
    ja: {
      ...jpTranslations,
    },
  },
  lng: selectedLanguage,
});
