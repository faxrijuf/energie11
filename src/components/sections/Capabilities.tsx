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
import { useScroll } from 'framer-motion';
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
const SLOT_HEIGHT = 40;
const REEL_CYCLES = 4;
const REEL_REPEAT = REEL_CYCLES + 2;
const SPIN_DURATION = 900;

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
 * machine is red
 * slots are neutral/translucent white
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

  const stopTimeoutRef = useRef<number | null>(null);

  const reelSymbols = useMemo(
    () => Array(REEL_REPEAT).fill(items).flat(),
    [items]
  );
  const maxIndex = reelSymbols.length - 1;

  useEffect(() => {
    return () => {
      if (stopTimeoutRef.current) {
        window.clearTimeout(stopTimeoutRef.current);
      }
    };
  }, []);

  const startSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setIsJackpot(false);
    setShowWave(false);

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
        window.setTimeout(() => setShowWave(false), 900);
      }
    }, SPIN_DURATION);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E65A4F]/75 bg-[#E65A4F] p-4 backdrop-blur-xl shadow-[0_18px_45px_rgba(230,90,79,0.45)]">
      {/* strong jackpot wave behind content */}
      {showWave && (
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <span className="h-96 w-96 rounded-full bg-[#E65A4F]/55 animate-ping" />
          <span className="absolute h-72 w-72 rounded-full bg-[#E65A4F]/40 animate-ping" />
          <span className="absolute h-52 w-52 rounded-full bg-[#E65A4F]/30 animate-pulse" />
        </div>
      )}

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex flex-1 gap-2">
          {[0, 1, 2].map(reel => (
            <div
              key={reel}
              className="relative h-[40px] w-full overflow-hidden rounded-2xl bg-black/10"
              style={{ minWidth: 0 }}
            >
              <div
                className="absolute left-0 top-0 w-full"
                style={{
                  transform: `translateY(${-reelIndex[reel] * SLOT_HEIGHT}px)`,
                  transition: isSpinning
                    ? `transform ${SPIN_DURATION}ms cubic-bezier(0.22,0.61,0.36,1)`
                    : 'transform 0ms'
                }}
              >
                {reelSymbols.map((label, idx) => {
                  const isCenter = idx === reelIndex[reel] && !isSpinning;
                  const isJackpotSymbol = isCenter && isJackpot;

                  return (
                    <div
                      key={`${reel}-${idx}-${label}`}
                      className="flex h-[40px] w-full items-center justify-center"
                      style={{ height: SLOT_HEIGHT }}
                    >
                      <div
                        className={[
                          'flex h-9 w-full max-w-[140px] items-center justify-center rounded-full px-4 text-[11px] font-medium leading-tight text-center',
                          'transition-colors duration-300',
                          isJackpotSymbol
                            ? 'bg-white text-neutral-900 shadow-[0_0_20px_rgba(255,255,255,0.9)] border border-white/70'
                            : isCenter
                            ? 'bg-white/90 text-neutral-900 shadow-[0_0_14px_rgba(0,0,0,0.28)] border border-white/60'
                            : 'bg-white/55 text-neutral-900/85 border border-white/35'
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
          className="flex h-10 w-20 flex-shrink-0 items-center justify-center rounded-full border border-white/85 bg.white/40 text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b0b07] shadow-[0_0_18px_rgba(0,0,0,0.25)] transition-all duration-200 active:scale-95"
        >
          {isSpinning ? spinningLabel : spinLabel}
        </button>
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
  let rawIndex = Math.round(-normalized / step);
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