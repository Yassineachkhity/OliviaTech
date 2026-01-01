import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import CountUp from "./CountUp";

const StatsSection: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();

  const stats = [
    {
      label: t.stats.yieldProtected.label,
      value: 70,
      suffix: "%",
      detail: t.stats.yieldProtected.detail,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      label: t.stats.support.label,
      value: 24,
      suffix: "/7",
      detail: t.stats.support.detail,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      )
    },
  ];

  return (
    <section
      id="stats"
      ref={ref}
      className={`container-full section-padding reveal ${visible ? "visible" : ""}`}
    >
      <dl className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
        {stats.map((item) => (
          <div key={item.label} className="theme-card rounded-2xl p-4 text-center">
            <div className="flex justify-center mb-3 text-primary">
              {item.icon}
            </div>
            <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              {item.label}
            </dt>
            <dd className="mt-2 text-3xl font-semibold text-primary">
              <CountUp
                to={item.value}
                from={0}
                duration={2}
                delay={0.2}
                className="inline-block"
              />
              {item.suffix && <span>{item.suffix}</span>}
            </dd>
            <p className="mt-1 text-xs text-muted">{item.detail}</p>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default StatsSection;
