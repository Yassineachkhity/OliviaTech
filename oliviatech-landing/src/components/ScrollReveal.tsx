import React, { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'clip' | 'rotate';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    animation?: AnimationType;
    duration?: number;
    delay?: number;
    stagger?: number;
    threshold?: number;
    once?: boolean;
}

const getAnimationProps = (type: AnimationType) => {
    const base = { opacity: 0 };

    switch (type) {
        case 'fadeUp':
            return { from: { ...base, y: 80 }, to: { opacity: 1, y: 0 } };
        case 'fadeDown':
            return { from: { ...base, y: -80 }, to: { opacity: 1, y: 0 } };
        case 'fadeLeft':
            return { from: { ...base, x: 80 }, to: { opacity: 1, x: 0 } };
        case 'fadeRight':
            return { from: { ...base, x: -80 }, to: { opacity: 1, x: 0 } };
        case 'scale':
            return { from: { ...base, scale: 0.8 }, to: { opacity: 1, scale: 1 } };
        case 'clip':
            return { from: { ...base, clipPath: 'inset(100% 0% 0% 0%)' }, to: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } };
        case 'rotate':
            return { from: { ...base, rotation: 10, y: 50 }, to: { opacity: 1, rotation: 0, y: 0 } };
        default:
            return { from: base, to: { opacity: 1 } };
    }
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = '',
    animation = 'fadeUp',
    duration = 1,
    delay = 0,
    stagger = 0.1,
    threshold = 0.2,
    once = true,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animProps = getAnimationProps(animation);
        const childElements = container.children;

        gsap.set(childElements, animProps.from);

        ScrollTrigger.create({
            trigger: container,
            start: `top ${(1 - threshold) * 100}%`,
            once,
            onEnter: () => {
                gsap.to(childElements, {
                    ...animProps.to,
                    duration,
                    delay,
                    stagger,
                    ease: 'power3.out',
                });
            },
            onLeaveBack: once ? undefined : () => {
                gsap.to(childElements, {
                    ...animProps.from,
                    duration: duration * 0.5,
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [animation, duration, delay, stagger, threshold, once]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

// Parallax wrapper component
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export const Parallax: React.FC<ParallaxProps> = ({
    children,
    className = '',
    speed = 0.5,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.to(element, {
            y: () => -ScrollTrigger.maxScroll(window) * speed * 0.1,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [speed]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

// Text split reveal animation
interface TextRevealProps {
    children: string;
    className?: string;
    as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
    children,
    className = '',
    as: Component = 'div',
    delay = 0,
}) => {
    const containerRef = useRef<HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const words = children.split(' ');
        container.innerHTML = words
            .map((word) => `<span class="inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`)
            .join(' ');

        const wordInners = container.querySelectorAll('.word-inner');

        gsap.set(wordInners, { y: '100%' });

        ScrollTrigger.create({
            trigger: container,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.to(wordInners, {
                    y: '0%',
                    duration: 0.8,
                    delay,
                    stagger: 0.05,
                    ease: 'power3.out',
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [children, delay]);

    return (
        <Component
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className={className}
        />
    );
};

export default ScrollReveal;
