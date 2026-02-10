import React from "react";
import { useTranslation } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import um6pLogo from "../assets/um6p.png";
import agriFoodLogo from "../assets/agrifoodtech.png";
import agriChallengeLogo from "../assets/agrichallenge.png";

const ProgramsSection: React.FC = () => {
    const { t } = useTranslation();

    const partners = [
        { name: "AgriFood Tech", logo: agriFoodLogo, height: "h-12 sm:h-16" },
        { name: "AgriChallenge", logo: agriChallengeLogo, height: "h-12 sm:h-16" },
        { name: "UM6P", logo: um6pLogo, height: "h-10 sm:h-14" },
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-black/20">
            <div className="container-full">
                <ScrollReveal>
                    <div className="flex flex-col items-center gap-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                            {t.programs.title}
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {partners.map((partner) => (
                                <img
                                    key={partner.name}
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className={`${partner.height} w-auto object-contain transition-transform hover:scale-105 duration-300`}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ProgramsSection;
