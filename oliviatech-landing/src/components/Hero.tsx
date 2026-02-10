import React, { useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import oliviaHero from "../assets/olive_hero2.jpg";
import TextType from "./TextType";
import StarBorder from "./StarBorder";
import MagneticButton from "./MagneticButton";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLDivElement>(null);
  const appBadgesRef = useRef<HTMLDivElement>(null);

  // Staggered entrance animation
  useEffect(() => {
    if (!visible) return;

    const tl = gsap.timeline({ delay: 0.2 });



    if (ctaRef.current) {
      tl.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.3");
    }

    if (appBadgesRef.current) {
      tl.from(appBadgesRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.3");
    }
  }, [visible]);

  return (
    <section
      id="top"
      ref={ref}
      className={`relative min-h-screen w-full flex flex-col justify-center reveal ${visible ? "visible" : ""} overflow-hidden`}
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Subtle green accent glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 -z-10 hero-gradient-animate" />

      {/* Content Container */}
      <div className="container-full relative z-10 flex flex-col justify-center items-center min-h-[80vh] text-center">
        <div ref={contentRef} className="max-w-4xl space-y-8">


          {/* Main Headline */}
          <div className="space-y-6">
            <TextType
              key={t.hero.headline}
              as="h1"
              text={t.hero.headline}
              className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-tight text-white tracking-tight whitespace-nowrap"
              typingSpeed={70}
              initialDelay={300}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-accent"
              startOnVisible={true}
              loop={false}
            />
            <p
              className="max-w-2xl mx-auto text-lg text-white/90 sm:text-2xl font-medium leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <MagneticButton strength={0.4}>
              <StarBorder
                as="a"
                href="#solution"
                color="var(--accent)"
                speed="6s"
                thickness={2}
                bgClassName="bg-white/95"
                textClassName="text-gray-900"
                className="transition hover:-translate-y-0.5 shadow-xl hover:shadow-2xl px-8 py-4 text-base"
              >
                <span className="inline-flex items-center gap-2 font-bold">
                  {t.hero.cta}
                  <span aria-hidden className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </StarBorder>
            </MagneticButton>
          </div>

          {/* App Store Badges */}
          <div ref={appBadgesRef} className="flex flex-col items-center gap-4 pt-8 opacity-90 mb-20">
            <p className="text-sm font-medium text-white/70 tracking-wide uppercase">{t.hero.comingSoon || "Coming Soon"}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Apple App Store Badge */}
              <MagneticButton strength={0.25}>
                <div className="group relative flex items-center gap-3 rounded-xl bg-black/40 backdrop-blur-md px-5 py-3 border border-white/10 transition-all duration-300 hover:bg-black/60 hover:border-white/20 hover:-translate-y-0.5 cursor-pointer shadow-lg hover:shadow-xl">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-white/60 leading-tight uppercase tracking-wide">{t.hero.downloadOn || "Download on the"}</span>
                    <span className="text-base font-semibold text-white leading-tight">App Store</span>
                  </div>
                  <div className="absolute -top-2 -end-2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-white shadow-lg">
                    {t.hero.soon || "SOON"}
                  </div>
                </div>
              </MagneticButton>

              {/* Google Play Store Badge */}
              <MagneticButton strength={0.25}>
                <div className="group relative flex items-center gap-3 rounded-xl bg-black/40 backdrop-blur-md px-5 py-3 border border-white/10 transition-all duration-300 hover:bg-black/60 hover:border-white/20 hover:-translate-y-0.5 cursor-pointer shadow-lg hover:shadow-xl">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a.996.996 0 0 1 .609-.92z" fill="#4285F4" />
                    <path d="M17.148 8.654L5.09.558A.993.993 0 0 0 3.609 1.814l10.183 10.186 3.356-3.346z" fill="#EA4335" />
                    <path d="M3.609 22.186A.993.993 0 0 0 5.09 23.442l12.058-8.096-3.356-3.346L3.609 22.186z" fill="#34A853" />
                    <path d="M20.855 10.32l-3.707-2.466-3.356 3.346 3.356 3.346 3.707-2.466a1.493 1.493 0 0 0 0-2.56v-.2z" fill="#FBBC05" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-white/60 leading-tight uppercase tracking-wide">{t.hero.getItOn || "GET IT ON"}</span>
                    <span className="text-base font-semibold text-white leading-tight">Google Play</span>
                  </div>
                  <div className="absolute -top-2 -end-2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-white shadow-lg">
                    {t.hero.soon || "SOON"}
                  </div>
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
