// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
});

export default i18n;
