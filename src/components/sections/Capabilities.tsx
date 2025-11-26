// src/components/sections/Capabilities.tsx

import React, {
  useEffect,
  useRef,
  useState,
  useMemo
} from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReducedMotion, useScroll } from 'framer-motion';
import { SectionContainer } from '../layout/SectionContainer';

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

// roulette geometry for desktop
const RADIUS = 300;
const VERTICAL_FACTOR = 1.35;

// slot machine constants
const SLOT_HEIGHT = 44;
const REEL_CYCLES = 4;
const REEL_REPEAT = REEL_CYCLES + 2;
const SPIN_DURATION = 1100;

export const Capabilities: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [sliderAngle, setSliderAngle] = useState(0);
  const [scrollAngle, setScrollAngle] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const unsub = scrollYProgress.on('change', value => {
      setScrollAngle(value * 360);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const combinedOffset = sliderAngle + scrollAngle;

  const handleSliderChange = (value: number) => {
    setSliderAngle(value);
  };

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24"
    >
      <SectionContainer>
        {/* slots visible on all devices */}
        <div className="mb-10 w-full">
          <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {t('technology.title')}
          </h3>
          <TechSlots
            items={techItems}
            spinLabel={t('technology.controls.spin')}
            spinningLabel={t('technology.controls.spinning')}
          />
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16 md:pr-8 lg:pr-10">
          {/* roulette and slider for tablet and desktop */}
          <div className="hidden md:flex md:basis-[36%] lg:basis-[34%] flex-col items-start gap-6 md:-ml-10 lg:-ml-20 xl:-ml-28">
            <TechRoulette angle={combinedOffset} items={techItems} />

            <div className="mt-6 w-full max-w-md rounded-full bg-white/35 backdrop-blur-xl border border-white/60 px-5 py-4 shadow-[0_0_30px_rgba(0,0,0,0.08)]">
              <div className="mb-3 flex items-center justify-center">
                <span className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-neutral-700">
                  {Math.round(sliderAngle)}°
                </span>
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
                  [&::-webkit-slider-runnable-track]:h-[3px]
                  [&::-webkit-slider-runnable-track]:rounded-full
                  [&::-webkit-slider-runnable-track]:bg-neutral-300/80
                  [&::-moz-range-track]:h-[3px]
                  [&::-moz-range-track]:rounded-full
                  [&::-moz-range-track]:bg-neutral-300/80
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#E65A4F]
                  [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(230,90,79,0.8)]
                  [&::-webkit-slider-thumb]:mt-[-8px]
                  [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:w-5
                  [&::-moz-range-thumb]:border-none
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#E65A4F]
                  [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(230,90,79,0.8)]
                "
              />
            </div>
          </div>

          {/* cards */}
          <div className="md:basis-[64%] lg:basis-[66%] mt-2 md:mt-0 md:h-[820px] flex flex-col">
            <SectionHeader
              title={t('capabilities.title')}
              description={t('capabilities.subtitle')}
            />

            <div className="mt-8 flex-1">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* row 1 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-5">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.webDesign.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.webDesign.description')}
                  </p>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-5">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.development.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.development.description')}
                  </p>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-5">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.branding.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.branding.description')}
                  </p>
                </Card>

                {/* row 2 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-5">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.strategy.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.strategy.description')}
                  </p>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-5">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.ecommerce.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.ecommerce.description')}
                  </p>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-5">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.catalogues.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.catalogues.description')}
                  </p>
                </Card>

                {/* long horizontal booking card */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 md:p-6 md:col-span-3">
                  <h3 className="mb-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {t('capabilities.portals.title')}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                    {t('capabilities.portals.description')}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

/**
 * Slot styled tech display
 * follows the site's glass/neutral design language with red accents
 * jackpot when all three final labels match
 */
type TechSlotsProps = {
  items: string[];
  spinLabel: string;
  spinningLabel: string;
};

const TechSlots: React.FC<TechSlotsProps> = ({ items, spinLabel, spinningLabel }) => {
  const [reelIndex, setReelIndex] = useState<number[]>([0, 1, 2]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isJackpot, setIsJackpot] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [useTransition, setUseTransition] = useState(false);
  const [slotHeight, setSlotHeight] = useState(SLOT_HEIGHT);

  const stopTimeoutRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const slotWindowHeight = slotHeight + 8;
  const spinDuration = prefersReducedMotion ? 300 : SPIN_DURATION;

  const reelSymbols = useMemo(
    () => Array(REEL_REPEAT).fill(items).flat(),
    [items]
  );
  const maxIndex = reelSymbols.length - 1;

  useEffect(() => {
    const mobileMedia = window.matchMedia('(max-width: 480px)');
    const updateSlotHeight = () => {
      setSlotHeight(mobileMedia.matches ? 38 : SLOT_HEIGHT);
    };

    updateSlotHeight();
    mobileMedia.addEventListener('change', updateSlotHeight);

    return () => {
      if (stopTimeoutRef.current) {
        window.clearTimeout(stopTimeoutRef.current);
      }

      mobileMedia.removeEventListener('change', updateSlotHeight);
    };
  }, []);

  const startSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setIsJackpot(false);
    setShowWave(false);

    const normalizedStart = reelIndex.map(idx => idx % items.length);
    setUseTransition(false);
    setReelIndex(normalizedStart);

    const forceJackpot = Math.random() < 0.2;

    let baseIndices: number[];
    if (forceJackpot) {
      const sym = Math.floor(Math.random() * items.length);
      baseIndices = [sym, sym, sym];
    } else {
      baseIndices = [0, 1, 2].map(
        () => Math.floor(Math.random() * items.length)
      );
    }

    const baseOffset = items.length * REEL_CYCLES;
    const targets = baseIndices.map(b => {
      const target = baseOffset + b;
      return target > maxIndex ? maxIndex : target;
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setUseTransition(true);
        setReelIndex(targets);

        stopTimeoutRef.current = window.setTimeout(() => {
          setIsSpinning(false);

          const finalLabels = targets.map(idx => {
            const labelIndex = idx % items.length;
            return items[labelIndex];
          });

          const jackpot =
            finalLabels[0] === finalLabels[1] &&
            finalLabels[1] === finalLabels[2];

          setIsJackpot(jackpot);

          if (jackpot) {
            setShowWave(true);
            window.setTimeout(() => setShowWave(false), 1300);
          }
        }, spinDuration);
      });
    });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white via-white/80 to-neutral-50/70 p-5 md:p-6 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] max-w-xl sm:max-w-3xl mx-auto">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(230,90,79,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(59,11,7,0.08),transparent_36%)]"
        aria-hidden
      />

      {/* strong jackpot wave behind content */}
      {showWave && (
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <span className="jackpot-wave jackpot-wave--outer" />
          <span className="jackpot-wave jackpot-wave--mid" />
          <span className="jackpot-wave jackpot-wave--inner" />
        </div>
      )}

      <div className="relative z-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-[#E65A4F] animate-pulse" />
            <span>Stack slots</span>
          </div>

          {isJackpot && (
            <span className="rounded-full bg-[#E65A4F]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E65A4F]">
              Triple match
            </span>
          )}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 px-3 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
          <div className="pointer-events-none absolute inset-y-[18%] left-1 right-1 rounded-2xl border border-[#E65A4F]/25 bg-[#E65A4F]/6 shadow-[0_0_24px_rgba(230,90,79,0.16)]" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex flex-1 gap-2 sm:gap-3">
              {[0, 1, 2].map(reel => (
                <div
                  key={reel}
                  className="relative w-full overflow-hidden rounded-xl border border-neutral-200/70 bg-white/90"
                  style={{ minWidth: 0, height: slotWindowHeight }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-100/40 via-transparent to-neutral-100/55" />
                  <div
                    className="absolute left-0 top-0 w-full"
                    style={{
                      transform: `translateY(${-reelIndex[reel] * slotHeight}px)`,
                      transition: useTransition
                        ? `transform ${spinDuration}ms cubic-bezier(0.16,0.84,0.44,1)`
                        : 'none',
                      transitionDelay: useTransition ? `${reel * 80}ms` : '0ms',
                      willChange: 'transform'
                    }}
                  >
                    {reelSymbols.map((label, idx) => {
                      const isCenter = idx === reelIndex[reel] && !isSpinning;
                      const isJackpotSymbol = isCenter && isJackpot;

                      return (
                        <div
                          key={`${reel}-${idx}-${label}`}
                          className="flex w-full items-center justify-center"
                          style={{ height: slotHeight }}
                        >
                          <div
                            className={[
                              'flex h-[38px] w-full max-w-[150px] items-center justify-center rounded-full px-4 text-[11px] font-semibold leading-tight text-center uppercase tracking-[0.12em]',
                              'transition-all duration-300',
                              isJackpotSymbol
                                ? 'bg-gradient-to-br from-white to-white/80 text-neutral-900 shadow-[0_0_20px_rgba(255,255,255,0.85)] border border-white'
                                : isCenter
                                ? 'bg-white text-neutral-900 shadow-[0_10px_24px_rgba(15,23,42,0.08)] border border-white'
                                : 'bg-white/70 text-neutral-900/80 border border-white/70'
                            ].join(' ')}
                          >
                            {label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={startSpin}
              disabled={isSpinning}
              className="group relative flex h-12 w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E65A4F]/60 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-80 sm:w-24 touch-manipulation"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E65A4F] to-[#b53a32] shadow-[0_10px_25px_rgba(230,90,79,0.4)] transition-transform duration-200 group-active:scale-95 group-hover:scale-[1.02]" />
              <span className="relative text-white">{isSpinning ? spinningLabel : spinLabel}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * Roulette layout for desktop and tablet.
 */
type TechRouletteProps = {
  angle: number;
  items: string[];
};

const TechRoulette: React.FC<TechRouletteProps> = ({ angle, items }) => {
  const count = items.length;
  const step = 360 / count;

  const normalized = ((angle % 360) + 360) % 360;
  const rawIndex = Math.round(-normalized / step);
  const activeIndex = ((rawIndex % count) + count) % count;

  return (
    <div className="relative flex h-[820px] w-full items-center justify-start overflow-visible">
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
                  'transition-all duration-300 ease-out',
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
