import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface Chain {
  id: number;
  left: string;
  leftMobile: string;
  scale: number;
  scaleMobile: number;
  speed: number;
  opacity: number;
  opacityMobile: number;
  rotation: number;
}

const chainConfigs: Chain[] = [
  { id: 1, left: '5%', leftMobile: '2%', scale: 0.6, scaleMobile: 0.45, speed: 0.3, opacity: 0.08, opacityMobile: 0.05, rotation: -3 },
  { id: 2, left: '15%', leftMobile: '18%', scale: 0.8, scaleMobile: 0.6, speed: 0.5, opacity: 0.12, opacityMobile: 0.08, rotation: 2 },
  { id: 3, left: '28%', leftMobile: '45%', scale: 1, scaleMobile: 0.7, speed: 0.7, opacity: 0.15, opacityMobile: 0.1, rotation: -1 },
  { id: 4, left: '42%', leftMobile: '72%', scale: 0.7, scaleMobile: 0.55, speed: 0.4, opacity: 0.1, opacityMobile: 0.07, rotation: 4 },
  { id: 5, left: '58%', leftMobile: '88%', scale: 0.9, scaleMobile: 0.5, speed: 0.6, opacity: 0.13, opacityMobile: 0.06, rotation: -2 },
  { id: 6, left: '72%', leftMobile: '', scale: 0.75, scaleMobile: 0, speed: 0.45, opacity: 0.11, opacityMobile: 0, rotation: 3 },
  { id: 7, left: '85%', leftMobile: '', scale: 0.65, scaleMobile: 0, speed: 0.35, opacity: 0.09, opacityMobile: 0, rotation: -4 },
  { id: 8, left: '95%', leftMobile: '', scale: 0.55, scaleMobile: 0, speed: 0.25, opacity: 0.07, opacityMobile: 0, rotation: 1 },
];

interface ChainItemProps {
  chain: Chain;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
  prefersReducedMotion: boolean;
}

const ChainItem: React.FC<ChainItemProps> = React.memo(({ chain, scrollYProgress, isMobile, prefersReducedMotion }) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -1500 * chain.speed]
  );

  const leftPosition = isMobile ? chain.leftMobile : chain.left;
  const scaleValue = isMobile ? chain.scaleMobile : chain.scale;
  const opacityValue = isMobile ? chain.opacityMobile : chain.opacity;

  return (
    <motion.div
      style={{
        y,
        left: leftPosition,
        scale: scaleValue,
        opacity: opacityValue,
        rotate: chain.rotation,
      }}
      className="absolute top-0 -mt-32 will-change-transform"
    >
      <ChainSVG isMobile={isMobile} />
    </motion.div>
  );
});

export const ParallaxChains: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleChains = useMemo(() =>
    isMobile ? chainConfigs.filter(chain => chain.leftMobile !== '') : chainConfigs,
    [isMobile]
  );

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#f6f1eb]">
      {visibleChains.map((chain) => (
        <ChainItem
          key={chain.id}
          chain={chain}
          scrollYProgress={scrollYProgress}
          isMobile={isMobile}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
};

interface ChainSVGProps {
  isMobile?: boolean;
}

const ChainSVG: React.FC<ChainSVGProps> = React.memo(({ isMobile = false }) => {
  const linkCount = isMobile ? 8 : 12;

  return (
    <svg
      width="80"
      height={linkCount * 200}
      viewBox={`0 0 80 ${linkCount * 200}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="chain-svg"
    >
      {Array.from({ length: linkCount }).map((_, index) => (
        <g key={index} transform={`translate(0, ${index * 200})`}>
          <path
            d="M40 10 C20 10 10 20 10 40 L10 110 C10 130 20 140 40 140 C60 140 70 130 70 110 L70 40 C70 20 60 10 40 10 Z M40 25 C50 25 55 30 55 40 L55 110 C55 120 50 125 40 125 C30 125 25 120 25 110 L25 40 C25 30 30 25 40 25 Z"
            fill="#c62828"
          />
          <rect x="35" y="140" width="10" height="60" fill="#c62828" />
        </g>
      ))}
    </svg>
  );
});
