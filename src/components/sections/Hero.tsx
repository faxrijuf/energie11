// src/components/sections/Hero.tsx

import React from 'react';
import { HeroMassiveWords } from '../ui/HeroMassiveWords';
import { SectionContainer } from '../layout/SectionContainer';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-[#f6f1eb]">
      <SectionContainer className="flex flex-col items-start pb-20 pt-24 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
          Énergie Studio · Web design
        </p>

        <div className="mt-6 w-full">
          <HeroMassiveWords />
        </div>

        <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-neutral-800">
          Énergie Studio is a modern web design studio founded in 2025 in Baku, Azerbaijan. We create
          clean high-quality websites for brands that want a strong digital presence.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-brand">
            View our work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-neutral-800 underline-offset-4 hover:underline"
          >
            Start a project
          </a>
        </div>
      </SectionContainer>
    </section>
  );
};
