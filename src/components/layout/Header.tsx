import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../i18n/LanguageContext';

const headerVariants = {
  expanded: {
    opacity: 1,
    y: 0,
    pointerEvents: 'auto' as const,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
  compact: {
    opacity: 0,
    y: -10,
    pointerEvents: 'none' as const,
    transition: { type: 'spring', stiffness: 140, damping: 20 },
  },
};

const logoBubbleVariants = {
  expanded: {
    opacity: 0,
    scale: 0.9,
    y: -10,
    pointerEvents: 'none' as const,
    transition: { duration: 0.25 },
  },
  compact: {
    opacity: 1,
    scale: 1,
    y: 0,
    pointerEvents: 'auto' as const,
    transition: { type: 'spring', stiffness: 140, damping: 20, delay: 0.1 },
  },
};

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const direction = currentY > lastY ? 'down' : 'up';

          if (direction !== scrollDirection && Math.abs(currentY - lastY) > 5) {
            setScrollDirection(direction);
          }

          lastY = currentY;

          if (currentY > 100) {
            setIsCompact(true);
          } else {
            setIsCompact(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.work'), id: 'work' },
    { label: t('nav.capabilities'), id: 'capabilities' },
    { label: t('nav.philosophy'), id: 'philosophy' },
    { label: t('nav.process'), id: 'process' },
    { label: t('nav.studio'), id: 'studio' },
    { label: t('nav.contact'), id: 'contact' }
  ];

  const languages = [
    { code: 'az' as const, label: 'AZ' },
    { code: 'en' as const, label: 'EN' },
    { code: 'ru' as const, label: 'RU' }
  ];

  return (
    <>
      <motion.header
        initial={false}
        animate={isCompact ? 'compact' : 'expanded'}
        variants={headerVariants}
        className="sticky top-0 z-40 flex justify-center backdrop-blur-2xl border-b border-white/40 bg-sand/85 will-change-transform"
      >
        <div className="flex w-full justify-center">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-3 md:px-8 lg:px-10">
            <div className="mt-2 md:mt-4 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform" onClick={() => scrollToSection('hero')}>
              <Logo className="h-7 md:h-12" />
              <p className="mt-1 md:mt-1.5 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-500">
                est. 2025 Baku, Azerbaijan
              </p>
            </div>

            <div className="flex w-full items-center justify-between pt-2 pb-2 md:pt-5 md:pb-4 relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 active:scale-95 transition-all"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <nav className="hidden items-center gap-8 md:flex">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs md:text-sm font-medium tracking-wide text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <motion.div
                initial={false}
                animate={isMenuOpen ? 'open' : 'closed'}
                variants={{
                  open: { opacity: 1, y: 0, pointerEvents: 'auto' as const },
                  closed: { opacity: 0, y: -8, pointerEvents: 'none' as const },
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/40 bg-white/90 backdrop-blur-xl shadow-lg md:hidden z-50"
              >
                <nav className="flex flex-col p-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className="text-left px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-white/50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </motion.div>

              <div className="flex-1" />

              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1.5 md:gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`rounded-full px-2 md:px-2.5 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] transition-colors active:scale-95 ${
                        language === lang.code
                          ? 'bg-brand-red text-white shadow-[0_10px_25px_rgba(198,40,40,0.35)]'
                          : 'border border-white/40 bg-white/10 text-neutral-700 hover:bg-white/20'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center rounded-full bg-neutral-900 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 text-[10px] sm:text-[11px] md:text-sm font-medium text-white shadow-[0_10px_25px_rgba(15,23,42,0.24)] hover:bg-neutral-800 hover:shadow-[0_14px_30px_rgba(15,23,42,0.32)] active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  {t('nav.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={isCompact ? 'compact' : 'expanded'}
        variants={logoBubbleVariants}
        className="fixed top-4 left-1/2 z-50 will-change-transform"
        style={{ x: '-50%' }}
      >
        <div className="rounded-full bg-white/85 backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,23,42,0.22)] px-8 py-4 md:px-8 md:py-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Logo className="h-10 md:h-10 object-contain" />
        </div>
      </motion.div>
    </>
  );
};
