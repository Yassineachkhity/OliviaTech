import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CustomCursorProps {
    className?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ className = '' }) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        if (!cursor || !cursorDot || !cursorOutline) return;

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant dot position
            gsap.set(cursorDot, {
                x: mouseX,
                y: mouseY,
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                opacity: 1,
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                opacity: 0,
                duration: 0.3,
            });
        };

        // Smooth outline following
        const animateOutline = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            gsap.set(cursorOutline, {
                x: outlineX,
                y: outlineY,
            });

            requestAnimationFrame(animateOutline);
        };

        // Handle hover on interactive elements
        const handleHoverStart = () => {
            gsap.to(cursorOutline, {
                scale: 2,
                borderColor: 'var(--accent)',
                duration: 0.3,
                ease: 'power2.out',
            });
            gsap.to(cursorDot, {
                scale: 0.5,
                duration: 0.3,
            });
        };

        const handleHoverEnd = () => {
            gsap.to(cursorOutline, {
                scale: 1,
                borderColor: 'rgba(79, 227, 160, 0.5)',
                duration: 0.3,
                ease: 'power2.out',
            });
            gsap.to(cursorDot, {
                scale: 1,
                duration: 0.3,
            });
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, [data-cursor-hover], input, textarea, [role="button"]'
        );
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // Start animation loop
        animateOutline();

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor pointer-events-none fixed inset-0 z-[9999] hidden lg:block ${className}`}
            style={{ opacity: 0 }}
        >
            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent mix-blend-difference"
                style={{ willChange: 'transform' }}
            />
            {/* Cursor outline */}
            <div
                ref={cursorOutlineRef}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-accent/50"
                style={{ willChange: 'transform' }}
            />
        </div>
    );
};

export default CustomCursor;
