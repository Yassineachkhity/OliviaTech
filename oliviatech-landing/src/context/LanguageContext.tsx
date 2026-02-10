import { createContext, useContext } from "react";
import type { Language, Translations } from "../i18n/translations";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const useTranslation = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
};
