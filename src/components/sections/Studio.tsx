import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { glassCallout } from '../../utils/glassStyles';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionContainer } from '../layout/SectionContainer';

export const Studio: React.FC = () => {
  const { t } = useLanguage();
  const { ref, active } = useSectionInView();

  const stats = t('studio.stats');

  return (
    <motion.section
      ref={ref}
      id="studio"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <SectionContainer className="py-16 md:py-20 lg:py-24">
        <SectionHeader
          title={t('studio.title')}
          description={t('studio.subtitle')}
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.p
            variants={cardVariant}
            className="text-sm md:text-base text-neutral-800 leading-relaxed"
          >
            {t('studio.description')}
          </motion.p>

          <motion.div
            variants={cardVariant}
            className={`inline-flex max-w-lg items-center gap-4 px-4 py-3 ${glassCallout} ${
              active ? 'bg-white/80' : 'bg-white/60'
            } transition-colors duration-700`}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/90 text-[11px] font-semibold text-white">
              20
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-neutral-800">
              Founded in 2020, serving clients worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-medium text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={cardVariant}
            className="rounded-2xl overflow-hidden border border-white/40 shadow-[0_22px_65px_rgba(15,23,42,0.18)]"
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Studio workspace"
              className="w-full max-w-sm mx-auto md:max-w-none h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  );
};
