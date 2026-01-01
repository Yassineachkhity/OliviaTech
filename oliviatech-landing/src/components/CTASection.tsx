import React, { type FormEvent } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";

const CTASection: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="cta"
      ref={ref}
      className={`container-full section-padding reveal ${visible ? "visible" : ""}`}
    >
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-soft-color bg-surface-card px-4 py-1 text-xs font-semibold text-muted mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              {t.cta.badge}
            </p>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl mb-3">
              {t.cta.title}
            </h2>
            <p className="text-base text-muted sm:text-lg max-w-xl mx-auto">
              {t.cta.subtitle}
            </p>
          </div>

          <div className="theme-card rounded-3xl p-8 sm:p-10 shadow-soft border border-soft-color">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-semibold text-primary">
                  {t.cta.nameLabel} <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.cta.namePlaceholder}
                  className="w-full rounded-xl border border-soft-color bg-surface-muted px-4 py-3.5 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-semibold text-primary">
                  {t.cta.emailLabel} <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.cta.emailPlaceholder}
                  className="w-full rounded-xl border border-soft-color bg-surface-muted px-4 py-3.5 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-semibold text-primary">
                  {t.cta.phoneLabel} <span className="text-muted text-xs font-normal">{t.cta.phoneOptional}</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder={t.cta.phonePlaceholder}
                  className="w-full rounded-xl border border-soft-color bg-surface-muted px-4 py-3.5 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-semibold text-primary">
                  {t.cta.messageLabel} <span className="text-muted text-xs font-normal">{t.cta.messageOptional}</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.cta.messagePlaceholder}
                  className="w-full rounded-xl border border-soft-color bg-surface-muted px-4 py-3.5 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent hover:bg-accent/90 text-white px-6 py-4 text-sm font-semibold shadow-soft transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.cta.submitButton}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t.cta.responseTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {t.cta.freeOnboarding}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
