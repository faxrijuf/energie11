import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroMassiveWords: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.75, 1.2],
    prefersReducedMotion
      ? ["0%", "0%", "0%", "0%", "0%", "0%"]
      : ["5%", "0%", "0%", "0%", "8%", "40%"]
  );

  const x2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.75, 1],
    prefersReducedMotion
      ? ["0%", "0%", "0%", "0%", "0%", "0%"]
      : ["0%", "0%", "0%", "0%", "0%", "0%"]
  );

  const x3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.75, 1.2],
    prefersReducedMotion
      ? ["0%", "0%", "0%", "0%", "0%", "0%"]
      : ["15%", "0%", "0%", "0%", "-8%", "-40%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.38, 0.65, 0.8, 1],
    [0, 0, 1, 1, 0, 0]
  );

  const getWords = () => {
    switch (language) {
      case 'az':
        return { line1: '‎ ‎ ‎ Hər‎ ‎ ‎ ', line2: '‎ ‎ ‎ ŞEY‎ ‎ ‎ ', line3: 'MÜMKÜNDÜR' };
      case 'ru':
        return { line1: '‎ Чудеса‎ ', line2: '‎ ВСЕГДА‎ ', line3: 'ВОЗМОЖНЫ' };
      default:
        return { line1: 'Everything', line2: '‎ ‎ ‎ ‎ IS‎ ‎ ‎ ‎ ', line3: '‎ POSSIBLE‎ ' };
    }
  };

  const words = getWords();

  return (
    <div ref={sectionRef} className="mb-15 md:mb-20 flex flex-col gap-1 md:gap-2">
      {[
        { text: words.line1, color: "text-neutral-900", x: x1 },
        { text: words.line2, color: "text-brand-red", x: x2 },
        { text: words.line3, color: "text-neutral-900", x: x3 },
      ].map((line, i) => (
        <div key={i} className="w-full overflow-visible">
    <h1 className="font-hero text-[4rem] md:text-[6rem] lg:text-[8rem] leading-none tracking-tight font-semibold block text-center">
  <motion.span
    className={`font-hero inline-block will-change-transform whitespace-nowrap ${line.color}`}
    style={{ x: line.x, opacity }}
  >
    {line.text}
  </motion.span>
</h1>
        </div>
      ))}
    </div>
  );
};
