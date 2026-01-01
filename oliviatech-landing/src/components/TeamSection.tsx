import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import profil1 from "../assets/profil1.jpeg";
import profil2 from "../assets/profil2.png";

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
    },
    {
      name: "Yassine Achkhity",
      role: t.team.members.yassine.role,
      desc: t.team.members.yassine.desc,
      focus: t.team.members.yassine.focus,
      image: profil2,
    },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className={`container-full section-padding reveal ${visible ? "visible" : ""}`}
    >
      <div className="text-center text-primary">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {t.team.sectionLabel}
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {t.team.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-muted sm:text-lg">
          {t.team.subtitle}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`theme-card rounded-3xl p-6 text-center transition hover:-translate-y-1 ${index === 1 ? "reveal-delay-1" : ""
              }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-accent/20"
            />
            <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted">{member.role}</p>
            <p className="mt-4 text-sm text-muted">{member.desc}</p>
            <span className="mt-4 inline-flex rounded-full border border-soft-color px-4 py-1 text-[11px] text-muted">
              {member.focus}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
