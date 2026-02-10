import React from 'react';

interface StarBorderProps {
  as?: 'button' | 'a' | 'div' | 'span';
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  bgClassName?: string;
  textClassName?: string;
  [key: string]: unknown;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  bgClassName,
  textClassName,
  children,
  ...rest
}) => {
  const bgClass = bgClassName || 'bg-accent';
  const textClass = textClassName || 'text-white';
  const { style, ...restProps } = rest as { style?: React.CSSProperties };

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...(restProps as Record<string, unknown>)}
      style={{
        padding: `${thickness}px 0`,
        ...(style ?? {})
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-[0]"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-[0]"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className={`relative z-[1] ${bgClass} border border-accent/20 ${textClass} text-center text-[16px] py-[16px] px-[26px] rounded-[20px] shadow-soft`}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

