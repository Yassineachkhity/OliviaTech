import React, { useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 3D tilt effect on mouse move
const use3DTilt = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      gsap.to(el, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
};

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card3D: React.FC<Card3DProps> = ({ children, className = '', delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  use3DTilt(cardRef);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, { opacity: 0, y: 60 });

    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay * 0.1,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </div>
  );
};

const AdvantageSection: React.FC = () => {
  const [ref, visible] = useScrollAnimation();
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);

  // Header animation
  useEffect(() => {
    if (!visible || !headerRef.current) return;

    const tl = gsap.timeline();
    const label = headerRef.current.querySelector('.section-label');
    const title = headerRef.current.querySelector('h2');
    const subtitle = headerRef.current.querySelector('p');

    tl.from(label, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      .from(title, { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from(subtitle, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3');
  }, [visible]);

  const items = [
    {
      title: t.advantage.features.userFriendly.title,
      desc: t.advantage.features.userFriendly.desc,
      gradient: "from-emerald-500/20 to-teal-500/20",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <path d="M9 6h6" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.multilingual.title,
      desc: t.advantage.features.multilingual.desc,
      gradient: "from-blue-500/20 to-indigo-500/20",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.agronomist.title,
      desc: t.advantage.features.agronomist.desc,
      gradient: "from-amber-500/20 to-orange-500/20",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M16 11l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.dailyAdvice.title,
      desc: t.advantage.features.dailyAdvice.desc,
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="12" cy="15" r="1" />
          <path d="M12 12v3" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.meteoAlerts.title,
      desc: t.advantage.features.meteoAlerts.desc,
      gradient: "from-cyan-500/20 to-sky-500/20",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
          <path d="M19 9v6" />
          <path d="M19 9l-2-2" />
          <path d="M19 9l2-2" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      ),
    },
    {
      title: t.advantage.features.aiDiagnosis.title,
      desc: t.advantage.features.aiDiagnosis.desc,
      gradient: "from-rose-500/20 to-red-500/20",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M8 12l2-2 2 2 4-4" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      className={`container-full section-padding reveal ${visible ? "visible" : ""}`}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center text-primary">
        <div ref={headerRef}>
          <p className="section-label text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            {t.advantage.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t.advantage.title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            {t.advantage.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card3D
              key={item.title}
              delay={index}
              className={`group theme-card rounded-3xl p-5 transition-all duration-300 hover:shadow-lg cursor-pointer relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-2xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                  {item.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
