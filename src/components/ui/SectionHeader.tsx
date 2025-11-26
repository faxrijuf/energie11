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
      <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_14px_34px_rgba(15,23,42,0.3)]">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
        {eyebrow}
      </div>
    )}
    <div className="mt-3 flex items-center gap-3">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        {title}
      </h2>
      <span className="hidden sm:block h-[2px] flex-1 bg-gradient-to-r from-neutral-900 via-neutral-700/40 to-transparent" />
    </div>
    {description && (
      <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-neutral-700">
        {description}
      </p>
    )}
  </header>
));
