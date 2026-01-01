import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "../i18n/translations";
import type { Language, Translations } from "../i18n/translations";

interface LanguageContextValue {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "oliviatech-language";

interface ProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<ProviderProps> = ({ children }) => {
    const getInitialLanguage = (): Language => {
        if (typeof window === "undefined") {
            return "en";
        }
        const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
        if (stored === "en" || stored === "fr" || stored === "ar") {
            return stored;
        }
        // Check browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("fr")) return "fr";
        if (browserLang.startsWith("ar")) return "ar";
        return "en";
    };

    const [language, setLanguage] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }
        const root = document.documentElement;
        const isRTL = language === "ar";

        // Set dir attribute for RTL support
        root.dir = isRTL ? "rtl" : "ltr";
        root.lang = language;

        // Store preference
        window.localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const value = useMemo(() => ({
        language,
        setLanguage,
        t: translations[language],
        isRTL: language === "ar",
    }), [language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useTranslation = (): LanguageContextValue => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useTranslation must be used within LanguageProvider");
    }
    return context;
};
