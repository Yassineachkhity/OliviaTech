import React from "react";
import { useTranslation } from "../context/LanguageContext";
import OliviatechLogo from "../assets/oliviatech_original.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-soft-color bg-surface-card text-primary">
      <div className="container-full flex flex-col gap-4 py-6 text-xs text-muted sm:text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={OliviatechLogo}
            alt="OliviaTech logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
          <span className="text-primary">© {new Date().getFullYear()} OliviaTech</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span>{t.footer.tagline}</span>
          <span className="hidden sm:inline text-muted">|</span>
          <a href="mailto:ikhlassejebbar75@gmail.com" className="text-primary">
            ikhlassejebbar75@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
