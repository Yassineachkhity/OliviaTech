import React, { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
    children,
    className = '',
    speed = 1,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const scroller = scrollerRef.current;
        const progress = progressRef.current;
        if (!container || !scroller) return;

        const scrollWidth = scroller.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${scrollWidth * speed}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.to(scroller, {
            x: -scrollWidth,
            ease: 'none',
        });

        // Progress bar animation
        if (progress) {
            gsap.to(progress, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: () => `+=${scrollWidth * speed}`,
                    scrub: true,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [speed, children]);

    return (
        <section ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* Progress indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-surface-muted z-50">
                <div
                    ref={progressRef}
                    className="h-full bg-accent origin-left"
                    style={{ transform: 'scaleX(0)' }}
                />
            </div>

            {/* Scrolling content */}
            <div
                ref={scrollerRef}
                className="flex items-center h-screen"
                style={{ width: 'max-content' }}
            >
                {children}
            </div>
        </section>
    );
};

// Individual scroll item with animation
interface ScrollItemProps {
    children: ReactNode;
    className?: string;
    width?: string;
}

export const ScrollItem: React.FC<ScrollItemProps> = ({
    children,
    className = '',
    width = '100vw',
}) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        gsap.fromTo(
            item,
            { scale: 0.9, opacity: 0.5 },
            {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    containerAnimation: ScrollTrigger.getAll().find((t) => t.vars.pin)?.animation,
                    start: 'left center',
                    end: 'center center',
                    scrub: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`flex-shrink-0 flex items-center justify-center ${className}`}
            style={{ width }}
        >
            {children}
        </div>
    );
};

export default HorizontalScroll;
