import React, { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import LightRays from "./LightRays";
import ScrollReveal, { TextReveal } from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { gsap } from "gsap";

const CameraIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block animate-pulse ${className}`}
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
};

const UploadIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
};

const GalleryIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
};

const SolutionSection: React.FC = () => {
  const [ref] = useScrollAnimation();
  const { t } = useTranslation();
  const dropZoneRef = useRef<HTMLLabelElement>(null);

  // Mouse move effect for drop zone border
  const handleMouseMove = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (!dropZoneRef.current) return;
    const rect = dropZoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(dropZoneRef.current, {
      "--x": `${x}px`,
      "--y": `${y}px`,
      duration: 0.2,
    });
  };

  return (
    <section
      id="solution"
      ref={ref}
      className={`container-full section-padding relative overflow-hidden`}
    >
      <div className="absolute inset-0 -z-10 opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#0f8c63"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={2.5}
          pulsating={true}
          fadeDistance={1.2}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.15}
        />
      </div>

      <div className="flex flex-col items-center text-primary relative z-10">
        <div className="w-full max-w-2xl mx-auto">
          <ScrollReveal animation="fadeUp" className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl mb-4">
              <TextReveal as="span">{t.solution.title}</TextReveal>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={0.2}>
            <div className="theme-card rounded-[2rem] p-8 mx-auto shadow-2xl border border-white/10 backdrop-blur-sm bg-surface-card/80">
              <div className="flex flex-col gap-6">
                <label
                  ref={dropZoneRef}
                  onMouseMove={handleMouseMove}
                  className="group relative flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-soft-color bg-surface-muted/50 px-6 py-12 text-center overflow-hidden transition-colors hover:border-accent hover:bg-accent/5"
                  style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
                >
                  {/* Spotlight effect */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at var(--x) var(--y), rgba(15, 140, 99, 0.1), transparent 40%)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CameraIcon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-xl font-medium text-primary mt-2">
                      {t.solution.dropPhoto}
                    </span>
                    <span className="text-sm text-muted">This Solution is under construction - Supports JPG, PNG</span>
                  </div>
                  <input type="file" disabled className="hidden" />
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <MagneticButton strength={0.2} className="w-full">
                    <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-accent text-white px-6 py-4 text-sm font-bold shadow-soft transition-all hover:shadow-lg hover:bg-accent/90">
                      <UploadIcon className="w-5 h-5" />
                      {t.solution.uploadButton}
                    </button>
                  </MagneticButton>

                  <MagneticButton strength={0.2} className="w-full">
                    <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-surface-card border border-soft-color px-6 py-4 text-sm font-bold text-primary transition-all hover:bg-surface-muted hover:border-primary/20">
                      <GalleryIcon className="w-5 h-5" />
                      {t.solution.selectExamples}
                    </button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
