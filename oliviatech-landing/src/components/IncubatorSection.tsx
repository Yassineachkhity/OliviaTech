import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { useTranslation } from "../context/LanguageContext";
import um6pLogo from "../assets/um6p.png";
import agritechLogo from "../assets/agritech.png";

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const AnimatedIncubatorSection: React.FC = () => {
  const { t } = useTranslation();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  );

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_time, delta) => {
    let moveBy = directionFactor.current * 50 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const logos = [
    { src: um6pLogo, alt: "UM6P" },
    { src: agritechLogo, alt: "Agritech" },
  ];

  const numCopies = 8;
  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <div key={i} className="flex-shrink-0 flex items-center gap-12 md:gap-16" ref={i === 0 ? copyRef : null}>
        {logos.map((logo, idx) => (
          <img
            key={`${i}-${idx}`}
            src={logo.src}
            alt={logo.alt}
            className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    );
  }

  return (
    <section className="py-8 bg-surface-muted border-y border-soft-color overflow-hidden">
      <div className="container-full">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted text-center mb-6">
          {t.incubator.sectionLabel}
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            style={{ x }}
          >
            {spans}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedIncubatorSection;
