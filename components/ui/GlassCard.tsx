import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        bg-white rounded-4xl shadow-soft border border-transparent
        ${hoverEffect ? 'hover:-translate-y-2 hover:shadow-floating transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};