import React, { type FormEvent, Suspense } from "react";
import { useTranslation } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import OliveTree3D from "./OliveTree3D";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="cta"
      className={`container-full section-padding overflow-hidden bg-surface-muted/30`}
    >
      <div className="flex flex-col items-center">
        <ScrollReveal className="text-center mb-16 max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-soft-color bg-surface-card px-4 py-1 text-xs font-semibold text-muted mb-4 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {t.cta.badge}
          </p>
          <h2 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted">
            {t.cta.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-6xl">

          {/* Left Side: 3D Tree for "Lovable" placement */}
          <div className="hidden lg:block relative h-[600px] w-full bg-gradient-to-b from-surface-card/0 via-surface-card/50 to-surface-card/0 rounded-[3rem]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
              <Suspense fallback={null}>
                <OliveTree3D className="w-full h-full" />
              </Suspense>
            </div>
          </div>

          {/* Right Side: Form */}
          <ScrollReveal animation="fadeLeft" delay={0.2} className="w-full">
            <div className="theme-card rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-soft-color relative overflow-hidden bg-surface-card">
              {/* Decorative gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-primary ml-1">
                      {t.cta.nameLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={t.cta.namePlaceholder}
                      className="w-full rounded-2xl border border-soft-color bg-surface-muted px-5 py-4 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-primary ml-1">
                      {t.cta.emailLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={t.cta.emailPlaceholder}
                      className="w-full rounded-2xl border border-soft-color bg-surface-muted px-5 py-4 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-primary ml-1">
                    {t.cta.phoneLabel} <span className="text-muted text-xs font-normal opacity-70">({t.cta.phoneOptional})</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={t.cta.phonePlaceholder}
                    className="w-full rounded-2xl border border-soft-color bg-surface-muted px-5 py-4 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-primary ml-1">
                    {t.cta.messageLabel} <span className="text-muted text-xs font-normal opacity-70">({t.cta.messageOptional})</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={t.cta.messagePlaceholder}
                    className="w-full rounded-2xl border border-soft-color bg-surface-muted px-5 py-4 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all resize-none"
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton strength={0.4} className="w-full">
                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-accent hover:bg-accent/90 text-white px-8 py-5 text-base font-bold shadow-lg shadow-accent/25 transition-all hover:translate-y-[-2px] hover:shadow-xl"
                    >
                      {t.cta.submitButton}
                    </button>
                  </MagneticButton>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-medium text-muted">
                  <span className="inline-flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-muted text-accent">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {t.cta.responseTime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-muted text-accent">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    {t.cta.freeOnboarding}
                  </span>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
