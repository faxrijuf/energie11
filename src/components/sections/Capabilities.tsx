import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { useLanguage } from '../../i18n/LanguageContext';
import { Palette, Code, Sparkles, TrendingUp } from 'lucide-react';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { useSectionInView } from '../../hooks/useSectionInView';

export const Capabilities: React.FC = () => {
  const { t } = useLanguage();
  const { ref, active } = useSectionInView('capabilities');

  const capabilities = [
    {
      icon: Palette,
      title: t('capabilities.webDesign.title'),
      description: t('capabilities.webDesign.description'),
    },
    {
      icon: Code,
      title: t('capabilities.development.title'),
      description: t('capabilities.development.description'),
    },
    {
      icon: Sparkles,
      title: t('capabilities.branding.title'),
      description: t('capabilities.branding.description'),
    },
    {
      icon: TrendingUp,
      title: t('capabilities.strategy.title'),
      description: t('capabilities.strategy.description'),
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="capabilities"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24">
        <SectionHeader
          title={t('capabilities.title')}
          description={t('capabilities.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
              >
                <Card className="h-full bg-white/70 backdrop-blur-sm border-white/40 p-5 md:p-6 lg:p-8">
                  <div className="mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#c62828] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(198,40,40,0.25)]">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-base font-medium text-neutral-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {capability.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
