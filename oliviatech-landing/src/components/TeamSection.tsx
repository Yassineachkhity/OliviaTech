import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import profil1 from "../assets/profil1.jpeg";
import profil2 from "../assets/profil2.png";
import ScrollReveal, { TextReveal } from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { gsap } from "gsap";

const TeamSection: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();

  const members = [
    {
      name: "Ikhlasse Jebbar",
      role: t.team.members.ikhlasse.role,
      desc: t.team.members.ikhlasse.desc,
      focus: t.team.members.ikhlasse.focus,
      image: profil1,
      social: "@ikhlasse",
      linkedin: "https://www.linkedin.com/in/ikhlasse-jebbar/",
    },
    {
      name: "Yassine Achkhity",
      role: t.team.members.yassine.role,
      desc: t.team.members.yassine.desc,
      focus: t.team.members.yassine.focus,
      image: profil2,
      social: "@yassine",
      linkedin: "https://www.linkedin.com/in/yassine-achkhity/",
    },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className={`container-full section-padding overflow-hidden`}
    >
      <div className="text-center text-primary mb-16">
        <ScrollReveal animation="fadeDown">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted mb-3">
            {t.team.sectionLabel}
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl mb-4">
            <TextReveal>{t.team.title}</TextReveal>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted sm:text-lg">
            {t.team.subtitle}
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
        {members.map((member, index) => (
          <ScrollReveal
            key={member.name}
            animation={index === 0 ? "fadeRight" : "fadeLeft"}
            delay={index * 0.2}
          >
            <div className="group relative theme-card rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:shadow-2xl overflow-hidden">
              {/* Background gradient blob */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors duration-500" />

              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-md transform group-hover:scale-110 transition-transform duration-500" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative h-32 w-32 rounded-full object-cover ring-4 ring-surface-card shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-1 right-1 bg-surface-card rounded-full p-1.5 shadow-md">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4">
                {member.role}
              </p>

              <p className="text-sm text-primary/80 leading-relaxed mb-6">
                {member.desc}
              </p>

              <div className="flex flex-col items-center gap-4">
                <span className="inline-flex rounded-full border border-soft-color bg-surface-muted/50 px-4 py-1.5 text-xs font-medium text-muted">
                  {member.focus}
                </span>

                <MagneticButton strength={0.3}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-xs font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    CONNECT
                  </a>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
