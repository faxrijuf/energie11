// src/components/sections/Technology.tsx

import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';
import { useScroll } from 'framer-motion';

const techItems = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'GraphQL',
  'Figma',
  'Prisma',
  'PostgreSQL',
  'Framer',
  'Vercel',
  'Supabase'
];

// horizontal radius
const RADIUS = 300;
// vertical stretch factor for ellipse
const VERTICAL_FACTOR = 1.35;

export const Technology: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [sliderAngle, setSliderAngle] = useState(0);
  const [scrollAngle, setScrollAngle] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', v => {
      setScrollAngle(v * 360);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const angle = sliderAngle + scrollAngle;

  const handleSliderChange = (value: number) => {
    setSliderAngle(value);
  };

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 pr-5 pl-0 md:flex-row md:items-center md:gap-16 md:pr-8 md:pl-0 lg:pr-10 lg:pl-0">
        {/* roulette on the left, pulled toward and past page edge */}
        <div className="md:w-[60%] flex flex-col items-start gap-6 md:-ml-10 lg:-ml-20 xl:-ml-28">
          <TechRoulette angle={angle} items={techItems} />

          {/* translucent slider bar, slightly lower */}
          <div className="mt-6 w-full max-w-md rounded-full bg-white/35 backdrop-blur-xl border border-white/60 px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)]">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              <span>Rotate stack</span>
              <span className="text-neutral-600">{Math.round(sliderAngle)}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={sliderAngle}
              onChange={e => handleSliderChange(Number(e.target.value))}
              className="
                w-full appearance-none bg-transparent
                [&::-webkit-slider-runnable-track]:h-[2px]
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:bg-neutral-300/70
                [&::-moz-range-track]:h-[2px]
                [&::-moz-range-track]:rounded-full
                [&::-moz-range-track]:bg-neutral-300/70
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-[#E65A4F]
                [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(230,90,79,0.7)]
                [&::-webkit-slider-thumb]:mt-[-6px]
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:border-none
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-[#E65A4F]
                [&::-moz-range-thumb]:shadow-[0_0_10px_rgba(230,90,79,0.7)]
              "
            />
          </div>
        </div>

        {/* text on the right */}
        <div className="md:w-[40%] mt-4 md:mt-0">
          <SectionHeader
            title={t('technology.title')}
            description={t('technology.subtitle')}
          />
          <p className="mt-4 text-sm text-neutral-600 max-w-md">
            We work with a focused modern stack that keeps your site fast stable and ready to evolve while the most relevant tools stay in front of you.
          </p>
        </div>
      </div>
    </section>
  );
};

type TechRouletteProps = {
  angle: number;
  items: string[];
};

const TechRoulette: React.FC<TechRouletteProps> = ({ angle, items }) => {
  const count = items.length;
  const step = 360 / count;

  const normalized = ((angle % 360) + 360) % 360;
  let rawIndex = Math.round(-normalized / step);
  const activeIndex = ((rawIndex % count) + count) % count;

  return (
    <div className="relative flex h-[820px] w-full items-center justify-start overflow-visible">
      {/* full ellipse, shifted strongly left so part is outside page */}
      <div className="relative h-[720px] w-[720px] -ml-72 md:-ml-96 lg:-ml-[28rem] xl:-ml-[32rem]">
        {items.map((label, index) => {
          const baseDeg = step * index;
          const globalDeg = baseDeg + angle;
          const rad = (globalDeg * Math.PI) / 180;

          const x = Math.cos(rad) * RADIUS;
          const y = Math.sin(rad) * (RADIUS * VERTICAL_FACTOR);

          const closeness = (Math.cos(rad) + 1) / 2;

          const baseScale = 0.9 + 0.2 * closeness;
          const baseOpacity = 0.6 + 0.4 * closeness;

          const isActive = index === activeIndex;
          const finalScale = isActive ? baseScale * 1.3 : baseScale;
          const finalOpacity = isActive ? 1 : baseOpacity;

          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div
                className={[
                  'flex items-center justify-center rounded-full px-6 h-10 md:h-11 text-xs md:text-sm whitespace-nowrap',
                  'transition-all duration-400 ease-out',
                  isActive
                    ? 'bg-[radial-gradient(circle_at_top,_rgba(230,90,79,0.32),_rgba(230,90,79,0.04))] text-[#E65A4F] shadow-[0_0_22px_rgba(230,90,79,0.35)]'
                    : 'bg-white/95 text-neutral-900 shadow-[0_0_14px_rgba(0,0,0,0.08)]'
                ].join(' ')}
                style={{
                  transform: `scale(${finalScale})`,
                  opacity: finalOpacity
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
