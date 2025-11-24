import React from 'react';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navSections = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.work'), id: 'work' },
    { label: t('nav.capabilities'), id: 'capabilities' },
    { label: t('nav.philosophy'), id: 'philosophy' },
    { label: t('nav.process'), id: 'process' },
    { label: t('nav.studio'), id: 'studio' },
    { label: t('nav.contact'), id: 'contact' }
  ];

  return (
    <footer className="border-t border-white/40 bg-sand/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] items-start">
          <div className="space-y-3">
            <Logo />
            <p className="max-w-xs text-[13px] md:text-sm text-neutral-600 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
              {t('footer.sections')}
            </p>
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block text-[13px] md:text-sm text-neutral-700 hover:text-neutral-900 active:scale-95 transition-all"
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t('footer.language')}
            </p>
            <p className="text-[13px] md:text-sm text-neutral-600">AZ · EN · RU</p>
            <div className="pt-2 space-y-1">
              <p className="text-[13px] md:text-sm text-neutral-700">{t('contact.info.email')}</p>
              <p className="text-[13px] md:text-sm text-neutral-700">{t('contact.info.location')}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-8 flex flex-col gap-2 border-t border-neutral-200 pt-5 md:pt-6 text-[11px] md:text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Énergie studio · {t('footer.rights')}</p>
          <p className="text-neutral-600">{t('contact.info.availability')}</p>
        </div>
      </div>
    </footer>
  );
};
