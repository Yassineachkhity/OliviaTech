import React, { useEffect, useMemo, useState } from "react";
import translations from "../i18n/translations";
import type { Language } from "../i18n/translations";
import { LanguageContext } from "./LanguageContext";

const STORAGE_KEY = "oliviatech-language";

interface ProviderProps {
  children: React.ReactNode;
}

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === "en" || stored === "fr" || stored === "ar") {
    return stored;
  }
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("fr")) return "fr";
  if (browserLang.startsWith("ar")) return "ar";
  return "en";
};

export const LanguageProvider: React.FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const root = document.documentElement;
    const isRTL = language === "ar";

    root.dir = isRTL ? "rtl" : "ltr";
    root.lang = language;

    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
      isRTL: language === "ar",
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
