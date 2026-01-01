import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import WaitlistModal from "./WaitlistModal";

const PricingSection: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { t } = useTranslation();

  const plans = [
    {
      name: t.pricing.plans.starter.name,
      price: "$0",
      period: "/month",
      highlight: t.pricing.plans.starter.highlight,
      features: t.pricing.plans.starter.features,
      cta: t.pricing.plans.starter.cta,
      ctaKey: "create-account",
    },
    {
      name: t.pricing.plans.proCoop.name,
      price: "$29.99",
      period: "/month",
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
      className={`container-full section-padding reveal ${visible ? "visible" : ""}`}
    >
      <div className="text-center text-primary">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {t.pricing.sectionLabel}
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {t.pricing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-muted sm:text-lg">
          {t.pricing.subtitle}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative theme-card rounded-3xl p-6 transition hover:-translate-y-1 ${plan.popular ? "ring-2 ring-accent" : ""
              } ${index === 1 ? "reveal-delay-1" : ""}`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-6 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-primary">
                {t.pricing.mostLoved}
              </span>
            )}
            <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
            <p className="mt-2 text-xs text-muted">{plan.highlight}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-primary">{plan.price}</span>
              <span className="text-xs text-muted">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-accent">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCtaClick(plan.ctaKey)}
              className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${plan.popular
                  ? "bg-accent text-white hover:bg-accent/90"
                  : "border border-soft-color text-primary hover:border-accent-color"
                }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PricingSection;
