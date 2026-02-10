import React from "react";
import { useTranslation } from "../context/LanguageContext";
import CountUp from "./CountUp";
import HorizontalScroll, { ScrollItem } from "./HorizontalScroll";

const StatsSection: React.FC = () => {
  const { t, language, isRTL } = useTranslation();

  const copyByLanguage = {
    en: {
      introLabel: "Impact in Numbers",
      introTitleMain: "Growing",
      introTitleAccent: "Together",
      introSubtitle: "Our technology is revolutionizing olive farming, one tree at a time.",
      farmersTrustedLabel: "Farmers Trusted",
      farmersTrustedDetail: "Across the Mediterranean",
      diseaseTypesLabel: "Disease Types",
      diseaseTypesDetail: "Detected with AI",
      outroTitle: "Ready to improve your yield?",
      outroCta: "Start Now",
    },
    fr: {
      introLabel: "Impact en chiffres",
      introTitleMain: "Grandir",
      introTitleAccent: "Ensemble",
      introSubtitle: "Notre technologie transforme l'oleiculture, arbre apres arbre.",
      farmersTrustedLabel: "Agriculteurs accompagnes",
      farmersTrustedDetail: "A travers la Mediterranee",
      diseaseTypesLabel: "Types de maladies",
      diseaseTypesDetail: "Detectes par IA",
      outroTitle: "Pret a ameliorer votre rendement ?",
      outroCta: "Commencer",
    },
    ar: {
      introLabel: "الاثر بالارقام",
      introTitleMain: "ننمو",
      introTitleAccent: "معا",
      introSubtitle: "تقنيتنا تحدث نقلة في زراعة الزيتون شجرة بعد شجرة.",
      farmersTrustedLabel: "مزارعون يثقون بنا",
      farmersTrustedDetail: "عبر حوض المتوسط",
      diseaseTypesLabel: "انواع الامراض",
      diseaseTypesDetail: "مكتشفة بالذكاء الاصطناعي",
      outroTitle: "جاهز لتحسين المردودية؟",
      outroCta: "ابدا الان",
    },
  } as const;

  const copy = copyByLanguage[language];

  const stats = [
    {
      label: t.stats.yieldProtected.label,
      value: 70,
      suffix: "%",
      detail: t.stats.yieldProtected.detail,
      color: "text-emerald-500",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: t.stats.support.label,
      value: 24,
      suffix: "/7",
      detail: t.stats.support.detail,
      color: "text-amber-500",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      ),
    },
    {
      label: copy.farmersTrustedLabel,
      value: 500,
      suffix: "+",
      detail: copy.farmersTrustedDetail,
      color: "text-blue-500",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: copy.diseaseTypesLabel,
      value: 15,
      suffix: "+",
      detail: copy.diseaseTypesDetail,
      color: "text-rose-500",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M10 2h4" />
          <path d="M12 2v20" />
          <path d="M12 6l-4 4h8l-4 4" />
        </svg>
      ),
    },
  ];

  return (
    <HorizontalScroll className="bg-surface-muted/50" speed={1}>
      <ScrollItem width="50vw" className="pl-10 md:pl-20">
        <div className={`max-w-md ${isRTL ? "text-right" : ""}`}>
          <p className={`text-xs font-semibold tracking-[0.3em] text-accent mb-4 ${isRTL ? "" : "uppercase"}`}>
            {copy.introLabel}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            {copy.introTitleMain} <br />
            <span className="text-gradient">{copy.introTitleAccent}</span>
          </h2>
          <p className="mt-6 text-lg text-muted">{copy.introSubtitle}</p>
        </div>
      </ScrollItem>

      {stats.map((item, index) => (
        <ScrollItem key={index} width="40vw" className="px-4">
          <div className="theme-card w-full max-w-sm aspect-square rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${item.color.replace("text-", "bg-")}`} />

            <div className={`mb-6 ${item.color} p-4 rounded-full bg-surface-muted`}>
              {item.icon}
            </div>

            <dt className={`text-sm font-bold tracking-widest text-muted mb-2 ${isRTL ? "" : "uppercase"}`}>{item.label}</dt>

            <dd className="text-5xl md:text-6xl font-bold text-primary mb-4 p-2">
              <CountUp to={item.value} from={0} duration={2.5} delay={0.5} className="inline-block" />
              <span className={item.color}>{item.suffix}</span>
            </dd>

            <p className="text-muted font-medium">{item.detail}</p>
          </div>
        </ScrollItem>
      ))}

      <ScrollItem width="50vw" className="pr-10 md:pr-20">
        <div className={`text-center ${isRTL ? "text-right sm:text-center" : ""}`}>
          <h3 className="text-3xl font-bold text-primary mb-6">{copy.outroTitle}</h3>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
          >
            {copy.outroCta} <span aria-hidden>{isRTL ? "\u2190" : "\u2192"}</span>
          </a>
        </div>
      </ScrollItem>
    </HorizontalScroll>
  );
};

export default StatsSection;
