import React, { useCallback, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    as?: 'div' | 'button' | 'a' | 'span';
    [key: string]: unknown;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    strength = 0.3,
    as: Component = 'div',
    ...props
}) => {
    const magnetRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const setMagnetRef = useCallback((node: HTMLElement | null) => {
        magnetRef.current = node;
    }, []);

    useEffect(() => {
        const magnet = magnetRef.current;
        const content = contentRef.current;
        if (!magnet || !content) return;

        const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = magnet.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (mouseEvent.clientX - centerX) * strength;
            const deltaY = (mouseEvent.clientY - centerY) * strength;

            gsap.to(magnet, {
                x: deltaX,
                y: deltaY,
                duration: 0.4,
                ease: 'power3.out',
            });

            gsap.to(content, {
                x: deltaX * 0.3,
                y: deltaY * 0.3,
                duration: 0.4,
                ease: 'power3.out',
            });
        };

        const handleMouseDown = () => {
            gsap.to([magnet, content], {
                scale: 0.9,
                duration: 0.2,
                ease: 'power3.out',
            });
        };

        const handleMouseUp = () => {
            gsap.to([magnet, content], {
                scale: 1,
                duration: 0.2,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                scale: 1, // Ensure scale resets
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)',
            });

            gsap.to(content, {
                x: 0,
                y: 0,
                scale: 1, // Ensure scale resets
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        magnet.addEventListener('mousemove', handleMouseMove);
        magnet.addEventListener('mouseleave', handleMouseLeave);
        magnet.addEventListener('mousedown', handleMouseDown);
        magnet.addEventListener('mouseup', handleMouseUp);

        return () => {
            magnet.removeEventListener('mousemove', handleMouseMove);
            magnet.removeEventListener('mouseleave', handleMouseLeave);
            magnet.removeEventListener('mousedown', handleMouseDown);
            magnet.removeEventListener('mouseup', handleMouseUp);
        };
    }, [strength]);

    return (
        <Component
            ref={setMagnetRef}
            className={`magnetic-button ${className}`}
            style={{ willChange: 'transform' }}
            data-cursor-hover
            {...props}
        >
            <span ref={contentRef} className="inline-block" style={{ willChange: 'transform' }}>
                {children}
            </span>
        </Component>
    );
};

export default MagneticButton;
