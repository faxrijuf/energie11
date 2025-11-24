import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { useLanguage } from '../../i18n/LanguageContext';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { useSectionInView } from '../../hooks/useSectionInView';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const { ref, active } = useSectionInView('testimonials');

  const testimonials = t('testimonials.items');

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24">
        <SectionHeader
          title={t('testimonials.title')}
          description={t('testimonials.subtitle')}
        />

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              variants={cardVariant}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-white/40">
                <p className="text-sm text-neutral-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-neutral-200/50 pt-4">
                  <div className="font-medium text-sm text-neutral-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-neutral-900 font-medium mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
