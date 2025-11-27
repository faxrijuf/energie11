// src/components/sections/Hero.tsx

import React from 'react';
import { HeroMassiveWords } from '../ui/HeroMassiveWords';
import { SectionContainer } from '../layout/SectionContainer';
import { useLanguage } from '../../i18n/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroCards = t('hero.cards');

  return (
    <section id="hero" className="bg-[#f6f1eb]">
      <SectionContainer className="flex flex-col items-start gap-6 pb-20 pt-24 text-left">

        <div className="w-full">
          <HeroMassiveWords />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div className="space-y-5">
            <p className="max-w-2xl text-sm md:text-base leading-relaxed text-neutral-800 text-balance">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-brand font-hero">
                {t('hero.ctaSecondary')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline-offset-6 hover:underline font-hero"
              >
                {t('hero.ctaPrimary')}
                <span aria-hidden className="text-base">→</span>
              </a>
            </div>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4">
            {heroCards.map((card: { title: string; description: string }) => (
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
