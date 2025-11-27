import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { glassCallout } from '../../utils/glassStyles';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionContainer } from '../layout/SectionContainer';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();
  const { ref, active } = useSectionInView();

  const principles = t('philosophy.principles');

  return (
    <motion.section
      ref={ref}
      id="philosophy"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <SectionContainer className="py-16 md:py-20 lg:py-24 space-y-6 lg:space-y-0 lg:grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
        <div>
          <SectionHeader
            title={t('philosophy.title')}
            description={t('philosophy.subtitle')}
          />
          <motion.div
            variants={cardVariant}
            className={`mt-8 inline-flex max-w-lg items-center gap-4 px-4 py-3 ${glassCallout} ${
              active ? 'bg-white/80' : 'bg-white/60'
            } transition-colors duration-700`}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/90 text-[11px] font-semibold text-white">
              AZ
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-neutral-800">
              Premium design from Baku for global brands
            </p>
          </motion.div>
        </div>
        <div className="space-y-4">
          {principles.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariant}
              className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-white/60 hover:bg-white/80 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-base font-medium text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </SectionContainer>
    </motion.section>
  );
};
