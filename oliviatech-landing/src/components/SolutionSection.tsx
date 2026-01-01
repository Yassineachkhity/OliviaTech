import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import LightRays from "./LightRays";

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
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section
      id="solution"
      ref={ref}
      className={`container-full section-padding reveal ${visible ? "visible" : ""} relative overflow-hidden`}
    >
      <div className="absolute inset-0 -z-10">
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
          <h2 className="text-3xl font-semibold text-center text-primary sm:text-4xl lg:text-5xl mb-8">
            {t.solution.title}
          </h2>

          <div className="theme-card rounded-3xl p-6 mx-auto">
            <div className="flex flex-col gap-4">
              <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-soft-color bg-surface-card px-6 py-8 text-center">
                <span className="flex items-center gap-2 text-lg font-medium text-primary">
                  <CameraIcon className="w-6 h-6" />
                  {t.solution.dropPhoto}
                </span>
                <input type="file" disabled className="hidden" />
              </label>

              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-3 rounded-xl bg-surface-muted px-6 py-3 text-sm font-medium text-primary shadow-soft transition hover:shadow-md">
                  <UploadIcon className="w-5 h-5" />
                  {t.solution.uploadButton}
                </button>
                <button className="flex items-center justify-center gap-3 rounded-xl bg-surface-muted border border-soft-color px-6 py-3 text-sm font-medium text-primary transition hover:bg-surface-card">
                  <GalleryIcon className="w-5 h-5" />
                  {t.solution.selectExamples}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
