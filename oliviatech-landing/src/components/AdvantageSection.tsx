import React, { type JSX } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";

const AdvantageSection: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();

  const items = [
    {
      title: t.advantage.features.userFriendly.title,
      desc: t.advantage.features.userFriendly.desc,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <path d="M9 6h6" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.multilingual.title,
      desc: t.advantage.features.multilingual.desc,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.agronomist.title,
      desc: t.advantage.features.agronomist.desc,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M16 11l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.dailyAdvice.title,
      desc: t.advantage.features.dailyAdvice.desc,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="12" cy="15" r="1" />
          <path d="M12 12v3" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.meteoAlerts.title,
      desc: t.advantage.features.meteoAlerts.desc,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
          <path d="M19 9v6" />
          <path d="M19 9l-2-2" />
          <path d="M19 9l2-2" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.aiDiagnosis.title,
      desc: t.advantage.features.aiDiagnosis.desc,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M8 12l2-2 2 2 4-4" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      className={`container-full section-padding reveal ${visible ? "visible" : ""}`}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center text-primary">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            {t.advantage.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t.advantage.title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            {t.advantage.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`theme-card rounded-3xl p-5 transition hover:-translate-y-1 ${index === 1 || index === 3 || index === 5 ? "reveal-delay-1" : index === 2 || index === 4 ? "reveal-delay-2" : ""
                }`}
            >
              <div className="text-2xl text-primary">{item.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
