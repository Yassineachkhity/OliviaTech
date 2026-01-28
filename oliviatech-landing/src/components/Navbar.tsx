import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";
import OliviatechLogo from "../assets/oliviatech_original.png";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setLangOpen(false);
    if (langOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [langOpen]);

  const links = [
    { href: "#solution", label: t.nav.solution },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#cta", label: t.nav.talkToUs },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-soft-color transition-colors duration-300 ${scrolled
          ? "bg-surface-card backdrop-blur-xl shadow-soft"
          : "bg-surface-muted backdrop-blur"
        }`}
    >
      <nav className="container-full flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={OliviatechLogo}
            alt="OliviaTech logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-semibold text-base sm:text-lg text-primary">
              OliviaTech
            </span>
            <span className="text-xs font-medium text-muted">
              {t.footer.tagline}
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
              aria-label="Select language"
              className="inline-flex h-10 items-center justify-center gap-1 rounded-full border border-soft-color bg-surface-card px-3 text-sm font-semibold text-primary transition hover:border-accent-color"
            >
              {languages.find(l => l.code === language)?.label}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute end-0 top-full mt-2 w-20 rounded-xl border border-soft-color bg-surface-card py-1 shadow-soft z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-sm text-start transition hover:bg-surface-muted ${language === lang.code ? "text-accent font-semibold" : "text-primary"
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color mode"
            aria-pressed={theme === "dark"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft-color bg-surface-card text-primary transition hover:border-accent-color"
          >
            <span className="sr-only">Switch theme</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {theme === "light" ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </>
              ) : (
                <path d="M17.25 14.5A5.75 5.75 0 0 1 9.5 6.75 6 6 0 1 0 17.25 14.5Z" />
              )}
            </svg>
          </button>

          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-full border border-strong-color px-4 py-2 text-sm font-semibold text-primary transition hover:border-accent-color"
          >
            {t.nav.talkToUs}
          </a>

          <button
            className="inline-flex flex-col items-center justify-center gap-1 rounded-lg border border-soft-color p-2 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            type="button"
          >
            <span
              className={`block h-0.5 w-6 bg-primary transition ${open ? "translate-y-1.5 rotate-45" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition ${open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 px-4 pb-4">
            <div className="mt-3 rounded-3xl border border-soft-color bg-surface-card p-6 shadow-soft">
              <p className="text-sm font-semibold text-muted">{t.nav.navigate}</p>
              <div className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-soft-color px-4 py-3 text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-primary/90 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {t.nav.talkToUs}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
