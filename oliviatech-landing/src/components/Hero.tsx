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
      className={`container-full py-8 sm:py-10 md:py-12 lg:py-16 reveal ${visible ? "visible" : ""} relative overflow-hidden`}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${oliviaHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'blur(1px)',
          transform: 'scale(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-background/40 -z-10" />
      <div className="relative z-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-soft-color bg-surface-card px-4 py-1 text-xs font-semibold text-muted shadow-soft">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
                <g stroke="none" strokeWidth={0} strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fill="none" fillRule="nonzero" opacity={1} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                  <circle cx="45" cy="45" r="45" stroke="none" strokeWidth={1} strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fill="rgb(193,39,45)" fillRule="nonzero" opacity={1} transform="  matrix(1 0 0 1 0 0) " />
                  <path d="M 61.999 71.16 L 45 58.811 L 28.002 71.16 l 6.491 -19.98 L 17.5 38.834 h 21.004 L 45 18.84 l 6.496 19.994 H 72.5 L 55.507 51.179 L 61.999 71.16 z M 48.624 56.179 l 5.273 3.831 l -2.014 -6.199 L 48.624 56.179 z M 38.117 53.811 l -2.014 6.198 l 5.273 -3.83 L 38.117 53.811 z M 39.501 49.552 L 45 53.546 l 5.499 -3.995 l -2.098 -6.458 h -6.802 L 39.501 49.552 z M 30.612 43.094 l 5.266 3.825 l 1.243 -3.825 H 30.612 z M 52.88 43.094 l 1.243 3.825 l 5.266 -3.825 H 52.88 z M 42.983 38.834 h 4.034 L 45 32.626 L 42.983 38.834 z" stroke="none" strokeWidth={1} strokeDasharray="none" strokeLinejoin="miter" strokeMiterlimit={10} fill="rgb(0,98,51)" fillRule="nonzero" opacity={1} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                </g>
              </svg>
            </span>
            {t.hero.badge}
          </div>
          <div className="space-y-4 overflow-x-auto">
            <div className="inline-block">
              <TextType
                as="h1"
                text={t.hero.headline}
                className="whitespace-nowrap text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
                typingSpeed={80}
                initialDelay={500}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-primary"
                startOnVisible={true}
                loop={false}
              />
            </div>
            <p className="max-w-2xl text-lg font-medium text-white sm:text-xl">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <StarBorder
              as="a"
              href="#solution"
              color="var(--accent)"
              speed="6s"
              thickness={2}
              bgClassName="bg-surface-muted"
              textClassName="text-primary"
              className="transition hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                {t.hero.cta}
                <span aria-hidden>↗</span>
              </span>
            </StarBorder>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col gap-3 pt-4">
            <p className="text-sm font-medium text-white/80">{t.hero.comingSoon || "Coming Soon"}</p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Apple App Store Badge */}
              <div className="group relative flex items-center gap-3 rounded-xl bg-black/80 backdrop-blur-sm px-4 py-2.5 border border-white/10 transition-all hover:bg-black hover:border-white/20 hover:-translate-y-0.5 cursor-pointer">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 leading-tight">{t.hero.downloadOn || "Download on the"}</span>
                  <span className="text-sm font-semibold text-white leading-tight">App Store</span>
                </div>
                <div className="absolute -top-2 -end-2 rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold text-white shadow-lg">
                  {t.hero.soon || "SOON"}
                </div>
              </div>

              {/* Google Play Store Badge */}
              <div className="group relative flex items-center gap-3 rounded-xl bg-black/80 backdrop-blur-sm px-4 py-2.5 border border-white/10 transition-all hover:bg-black hover:border-white/20 hover:-translate-y-0.5 cursor-pointer">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a.996.996 0 0 1 .609-.92z" fill="#4285F4" />
                  <path d="M17.148 8.654L5.09.558A.993.993 0 0 0 3.609 1.814l10.183 10.186 3.356-3.346z" fill="#EA4335" />
                  <path d="M3.609 22.186A.993.993 0 0 0 5.09 23.442l12.058-8.096-3.356-3.346L3.609 22.186z" fill="#34A853" />
                  <path d="M20.855 10.32l-3.707-2.466-3.356 3.346 3.356 3.346 3.707-2.466a1.493 1.493 0 0 0 0-2.56v-.2z" fill="#FBBC05" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 leading-tight">{t.hero.getItOn || "GET IT ON"}</span>
                  <span className="text-sm font-semibold text-white leading-tight">Google Play</span>
                </div>
                <div className="absolute -top-2 -end-2 rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold text-white shadow-lg">
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
