import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";
import { safeLocalStorageGet, safeLocalStorageSet, safeMatchMedia } from "../utils/browser";

const STORAGE_KEY = "oliviatech-theme";

interface ProviderProps {
  children: React.ReactNode;
}

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }
  const stored = safeLocalStorageGet(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  const prefersDark = safeMatchMedia("(prefers-color-scheme: dark)");
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    safeLocalStorageSet(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
