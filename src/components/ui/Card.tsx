import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = React.memo(({ children, className = '' }) => (
  <article className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-neutral-300 md:hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] will-change-transform ${className}`}>
    {children}
  </article>
));
