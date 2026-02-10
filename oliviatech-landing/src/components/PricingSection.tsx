import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import WaitlistModal from "./WaitlistModal";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import StarBorder from "./StarBorder";

const PricingSection: React.FC = () => {
  const [ref] = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const plans = [
    {
      name: t.pricing.plans.starter.name,
      price: "Free", // Changed from 0 MAD
      period: "", // Removed /month
      highlight: t.pricing.plans.starter.highlight,
      features: t.pricing.plans.starter.features,
      cta: t.pricing.plans.starter.cta,
      ctaKey: "create-account",
    },
    {
      name: t.pricing.plans.proCoop.name,
      price: "Consulting", // Changed from 300 MAD
      period: "",
      highlight: t.pricing.plans.proCoop.highlight,
      features: t.pricing.plans.proCoop.features,
      cta: t.pricing.plans.proCoop.cta,
      ctaKey: "join-waitlist",
      popular: true,
    },
  ];

  const handleCtaClick = (ctaKey: string) => {
    if (ctaKey === "join-waitlist") {
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className={`container-full section-padding relative`}
    >
      <ScrollReveal className="text-center text-primary mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted mb-3">
          {t.pricing.sectionLabel}
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl mb-4">
          {t.pricing.title}
        </h2>
        <p className="mx-auto max-w-3xl text-base text-muted sm:text-lg">
          {t.pricing.subtitle}
        </p>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
        {plans.map((plan, index) => (
          <ScrollReveal
            key={plan.name}
            animation="fadeUp"
            delay={index * 0.2}
            className="h-full"
          >
            <div
              className={`relative h-full theme-card rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col ${plan.popular ? "ring-2 ring-accent card-3d" : "border border-soft-color"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {t.pricing.mostLoved}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.highlight}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary tracking-tight">{plan.price}</span>
                <span className="text-sm font-medium text-muted">{plan.period}</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                      <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-primary/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <MagneticButton strength={0.3} className="w-full">
                  {plan.popular ? (
                    <StarBorder
                      as="button"
                      color="var((--accent))"
                      className="w-full rounded-2xl"
                      speed="4s"
                      onClick={() => handleCtaClick(plan.ctaKey)}
                    >
                      <span className="font-bold">{plan.cta}</span>
                    </StarBorder>
                  ) : (
                    <button
                      onClick={() => handleCtaClick(plan.ctaKey)}
                      className="w-full rounded-2xl border border-soft-color bg-surface-muted px-6 py-4 text-sm font-bold text-primary transition-all hover:bg-surface-card hover:border-primary/20"
                    >
                      {plan.cta}
                    </button>
                  )}
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PricingSection;
