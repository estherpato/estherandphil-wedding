import { createContext, FC, PropsWithChildren, useState } from "react";
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

  const state = {
    language,
    handleLanguageChange
  }

  return <LanguageContext.Provider value={state}>{children}</LanguageContext.Provider>
};

export default LanguageProvider;
