import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = React.memo(({ children, ...props }) => {
  const { eyebrow, title, description } = props;

  return (
    <header className="mb-8 md:mb-12">
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-neutral-700 text-balance">
          {description}
        </p>
      )}
      {children}
    </header>
  );
});
