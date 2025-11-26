// src/components/sections/Hero.tsx

import React from 'react';
import { HeroMassiveWords } from '../ui/HeroMassiveWords';
import { SectionContainer } from '../layout/SectionContainer';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-[#f6f1eb]">
      <SectionContainer className="flex flex-col items-start gap-6 pb-20 pt-24 text-left">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
            es
          </span>
          Web studio for brands that demand clarity
        </p>

        <div className="w-full">
          <HeroMassiveWords />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div className="space-y-5">
            <p className="max-w-2xl text-sm md:text-base leading-relaxed text-neutral-800 text-balance">
              Énergie Studio is a boutique web studio founded in 2025 in Baku. We combine design systems,
              conversion thinking, and crisp engineering to deliver websites that look premium and perform
              beautifully for modern brands.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-brand">
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline-offset-6 hover:underline"
              >
                Book a project call
                <span aria-hidden className="text-base">→</span>
              </a>
            </div>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              { title: 'Dedicated team', description: 'Senior designers & engineers on every project.' },
              { title: 'Fast & polished', description: 'Responsive experiences tuned for performance.' },
              { title: 'Global mindset', description: 'Based in Baku, collaborating with brands worldwide.' }
            ].map(card => (
              <div
                key={card.title}
                className="rounded-2xl border border-neutral-800/80 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black px-4 py-3 text-left shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">{card.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/80">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
