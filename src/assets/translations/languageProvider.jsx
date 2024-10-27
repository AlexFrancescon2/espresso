import { createContext, useContext, useState } from "react";

import enTranslations from "@/assets/translations/en.json";

// import itTranslations from "@/assets/translations/it.json";

const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  // it: itTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        languages: Object.keys(translations),
        translations: translations[language],
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
