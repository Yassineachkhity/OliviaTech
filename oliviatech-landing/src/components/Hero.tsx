import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import oliviaHero from "../assets/olive_hero2.jpg";
import TextType from "./TextType";
import StarBorder from "./StarBorder";

const Hero: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section
      id="top"
      ref={ref}
      className={`relative h-screen w-full flex flex-col justify-center reveal ${visible ? "visible" : ""} overflow-hidden`}
    >
      {/* Background Image - fixed within section bounds */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${oliviaHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Multi-layer gradient overlay for professional depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Subtle green accent glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

      {/* Content Container - pushed slightly up visually */}
      <div className="container-full relative z-10 -mt-24 sm:-mt-32">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white/90 shadow-lg">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xmlSpace="preserve">
                <g stroke="none" strokeWidth={0} fill="none" fillRule="nonzero" opacity={1} transform="translate(1.4 1.4) scale(2.81)">
                  <circle cx="45" cy="45" r="45" fill="rgb(193,39,45)" opacity={1} />
                  <path d="M 61.999 71.16 L 45 58.811 L 28.002 71.16 l 6.491 -19.98 L 17.5 38.834 h 21.004 L 45 18.84 l 6.496 19.994 H 72.5 L 55.507 51.179 L 61.999 71.16 z" fill="rgb(0,98,51)" opacity={1} />
                </g>
              </svg>
            </span>
            {t.hero.badge}
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <TextType
              key={t.hero.headline}
              as="h1"
              text={t.hero.headline}
              className="whitespace-nowrap text-[clamp(1.5rem,5vw,4.5rem)] font-bold leading-tight text-white"
              typingSpeed={70}
              initialDelay={300}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-accent"
              startOnVisible={true}
              loop={false}
            />
            <p
              className="max-w-xl text-lg text-white/90 sm:text-xl font-medium leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <StarBorder
              as="a"
              href="#solution"
              color="var(--accent)"
              speed="6s"
              thickness={2}
              bgClassName="bg-white/95"
              textClassName="text-gray-900"
              className="transition hover:-translate-y-0.5 shadow-xl"
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold">
                {t.hero.cta}
                <span aria-hidden>→</span>
              </span>
            </StarBorder>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col gap-4 pt-6">
            <p className="text-sm font-medium text-white/70">{t.hero.comingSoon || "Coming Soon"}</p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Apple App Store Badge */}
              <div className="group relative flex items-center gap-3 rounded-xl bg-black/60 backdrop-blur-md px-5 py-3 border border-white/15 transition-all hover:bg-black/80 hover:border-white/25 hover:-translate-y-0.5 cursor-pointer shadow-lg">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 leading-tight uppercase tracking-wide">{t.hero.downloadOn || "Download on the"}</span>
                  <span className="text-base font-semibold text-white leading-tight">App Store</span>
                </div>
                <div className="absolute -top-2 -end-2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-white shadow-lg">
                  {t.hero.soon || "SOON"}
                </div>
              </div>

              {/* Google Play Store Badge */}
              <div className="group relative flex items-center gap-3 rounded-xl bg-black/60 backdrop-blur-md px-5 py-3 border border-white/15 transition-all hover:bg-black/80 hover:border-white/25 hover:-translate-y-0.5 cursor-pointer shadow-lg">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a.996.996 0 0 1 .609-.92z" fill="#4285F4" />
                  <path d="M17.148 8.654L5.09.558A.993.993 0 0 0 3.609 1.814l10.183 10.186 3.356-3.346z" fill="#EA4335" />
                  <path d="M3.609 22.186A.993.993 0 0 0 5.09 23.442l12.058-8.096-3.356-3.346L3.609 22.186z" fill="#34A853" />
                  <path d="M20.855 10.32l-3.707-2.466-3.356 3.346 3.356 3.346 3.707-2.466a1.493 1.493 0 0 0 0-2.56v-.2z" fill="#FBBC05" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 leading-tight uppercase tracking-wide">{t.hero.getItOn || "GET IT ON"}</span>
                  <span className="text-base font-semibold text-white leading-tight">Google Play</span>
                </div>
                <div className="absolute -top-2 -end-2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-white shadow-lg">
                  {t.hero.soon || "SOON"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
