import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { glassPanel } from '../../utils/glassStyles';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { HeroMassiveWords } from '../ui/HeroMassiveWords';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroMockupRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroMockupRef,
    offset: ["start end", "end start"],
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;
  const heroParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || isMobile ? [0, 0] : [-20, 20]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion || isMobile ? [1, 1, 1] : [0.95, 1, 0.95]
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center gap-10 px-5 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24 lg:flex-row lg:items-center lg:text-left">
        <div className="flex-1 space-y-6 md:space-y-8">

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-neutral-900 text-center lg:text-left"
          >
            {t('hero.title.part1')}{" "}
            <span className="text-brand-red">{t('hero.title.highlight')}</span>{" "}
            {t('hero.title.part2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[22rem] mx-auto lg:mx-0 lg:max-w-xl text-sm md:text-base leading-relaxed text-neutral-800 text-center lg:text-left"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>

        <div className="flex-1 w-full relative">
  <div
    className="
      pointer-events-none
      absolute
      -inset-3
      md:-inset-6
      lg:-inset-10
      rounded-[2rem]
      md:rounded-[2.5rem]
      lg:rounded-[3rem]
      bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.16),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(0,0,0,0.08),_transparent_60%)]
    "
  />
  <motion.div
    ref={heroMockupRef}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    style={{ y: heroParallaxY }}
    className="relative max-w-md mx-auto lg:max-w-none"
  >
            <div className="flex flex-col items-center gap-6">
              <HeroMassiveWords />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center w-full"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center rounded-full border border-brand-red/40 bg-brand-red/20 px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold tracking-wide text-neutral-900 backdrop-blur-md hover:bg-brand-red/30 hover:border-brand-red/50 transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  {t('hero.ctaPrimary')}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
