import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export const useLanguage = () => {
  const state = useContext(LanguageContext);

  return state;
}