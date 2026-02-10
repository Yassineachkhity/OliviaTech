import React from "react";
import { useTranslation } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import StarBorder from "./StarBorder";

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            key: "detection",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            data: t.services.items.detection,
            highlight: true,
        },
        {
            key: "marketplace",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            data: t.services.items.marketplace,
            highlight: false,
        },
        {
            key: "consulting",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            data: t.services.items.consulting,
            highlight: false,
        },
    ];

    return (
        <section id="services" className="page-section section-padding relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container-full relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">
                        {t.services.sectionLabel}
                    </p>
                    <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl mb-6 text-primary">
                        {t.services.title}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        {t.services.subtitle}
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={service.key}
                            animation="fadeUp"
                            delay={index * 0.15}
                            className="h-full"
                        >
                            <div className={`relative group h-full p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2
                                ${service.highlight
                                    ? "bg-surface-card border-accent/30 shadow-xl shadow-accent/5"
                                    : "bg-surface-muted/30 border-white/5 hover:bg-surface-card hover:border-white/10"
                                }`}
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                                        ${service.highlight ? "bg-accent/10 text-accent" : "bg-surface-muted text-muted group-hover:text-primary group-hover:bg-white/10"}`}
                                    >
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-primary mb-3">
                                        {service.data.title}
                                    </h3>

                                    <p className="text-muted leading-relaxed mb-8 flex-grow">
                                        {service.data.desc}
                                    </p>

                                    <div className="mt-auto">
                                        {service.data.price && (
                                            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                                                {service.data.price}
                                            </div>
                                        )}

                                        <MagneticButton strength={0.2} className="w-full">
                                            {service.highlight ? (
                                                <StarBorder
                                                    as="button"
                                                    color="var(--accent)"
                                                    className="w-full rounded-xl"
                                                    speed="3s"
                                                >
                                                    <span className="font-bold text-sm">{service.data.cta}</span>
                                                </StarBorder>
                                            ) : (
                                                <button className="w-full py-3 px-6 rounded-xl border border-white/10 bg-white/5 text-primary text-sm font-bold btn-premium-hover">
                                                    {service.data.cta}
                                                </button>
                                            )}
                                        </MagneticButton>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
