import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageType } from "../enums/LanguageType.enum";

export type LanguageContextValue = {
  language: LanguageType;
  handleLanguageChange: (lng: LanguageType) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({} as LanguageContextValue);

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(LanguageType.ENGLISH);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: LanguageType) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  }

  useEffect(() => {
    const browserLanguage = window.navigator.language.split('-')[0];
    if (browserLanguage) {
      handleLanguageChange(browserLanguage as LanguageType);
    }
  }, []);

  const state = {
    language,
    handleLanguageChange
  }

  return <LanguageContext.Provider value={state}>{children}</LanguageContext.Provider>
};

export default LanguageProvider;
