import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { useSectionInView } from '../../hooks/useSectionInView';

export const Technology: React.FC = () => {
  const { t } = useLanguage();
  const { ref, active } = useSectionInView('technology');

  const technologies = [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'Next.js' },
    { name: 'Tailwind CSS' },
    { name: 'Node.js' },
    { name: 'GraphQL' },
    { name: 'Figma' },
    { name: 'Framer' },
    { name: 'Vercel' },
    { name: 'Supabase' },
    { name: 'Prisma' },
    { name: 'PostgreSQL' }
  ];

  return (
    <motion.section
      ref={ref}
      id="technology"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10 py-16 md:py-24 lg:py-28">
        <SectionHeader
          title={t('technology.title')}
          description={t('technology.subtitle')}
        />

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariant}
            >
              <span className={`inline-block rounded-full backdrop-blur-sm px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                index % 7 === 0
                  ? 'bg-[#c62828]/10 text-[#c62828] border border-[#c62828]/20 hover:bg-[#c62828]/15 hover:shadow-[0_4px_12px_rgba(198,40,40,0.2)]'
                  : 'border border-white/40 bg-white/30 text-neutral-900 hover:bg-white/50 hover:shadow-sm'
              }`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
