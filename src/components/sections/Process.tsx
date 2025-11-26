import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionContainer } from '../layout/SectionContainer';

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const { ref, active } = useSectionInView('process');

  const steps = t('process.steps');

  return (
    <motion.section
      ref={ref}
      id="process"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <SectionContainer className="py-16 md:py-20 lg:py-24">
        <SectionHeader
          title={t('process.title')}
          description={t('process.subtitle')}
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="flex items-start gap-4"
            >
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-medium text-white shadow-[0_10px_25px_rgba(198,40,40,0.35)]">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-neutral-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </motion.section>
  );
};
