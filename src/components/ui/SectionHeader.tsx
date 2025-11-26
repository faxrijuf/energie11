import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = React.memo(({
  eyebrow,
  title,
  description,
}) => (
  <header className="mb-10 md:mb-12">
    {eyebrow && (
      <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-red">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-neutral-700">
        {description}
      </p>
    )}
  </header>
));
