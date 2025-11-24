import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { useLanguage } from '../../i18n/LanguageContext';
import { projects } from '../../data/projects';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { glassPanel } from '../../utils/glassStyles';
import { useSectionInView } from '../../hooks/useSectionInView';

export const Work: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const { ref, active } = useSectionInView('work');

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <motion.section
      ref={ref}
      id="work"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-transparent"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.15)_0%,_rgba(198,40,40,0.08)_35%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24">
        <SectionHeader
          title={t('work.title')}
          description={t('work.subtitle')}
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full border px-3.5 md:px-4 py-1.5 text-xs font-medium transition-all duration-200 active:scale-95 ${
                filter === tag
                  ? 'border-neutral-900 bg-neutral-900 text-white shadow-[0_10px_25px_rgba(15,23,42,0.22)]'
                  : 'border-white/40 bg-white/20 backdrop-blur-sm text-neutral-700 hover:bg-white/30'
              }`}
            >
              {tag === 'All' ? t('work.filterAll') : tag}
            </button>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredProjects.map((project, index) => {
            const isHero = index === 0;
            return (
              <motion.div
                key={project.id}
                variants={cardVariant}
                className={isHero ? 'md:col-span-2' : ''}
              >
                <Card className={isHero ? glassPanel : 'bg-white'}>
                  <div className="mb-5 overflow-hidden rounded-xl bg-neutral-950/90">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500 will-change-transform"
                        loading={index < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          tagIndex === 0
                            ? 'bg-[#c62828]/10 text-[#c62828] border border-[#c62828]/20'
                            : 'border border-neutral-200 text-neutral-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:hidden -mx-5 px-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              className="min-w-[280px] max-w-[300px] flex-shrink-0 snap-start"
            >
              <Card className="bg-white h-full">
                <div className="mb-4 overflow-hidden rounded-xl bg-neutral-950/90">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        tagIndex === 0
                          ? 'bg-[#c62828]/10 text-[#c62828] border border-[#c62828]/20'
                          : 'border border-neutral-200 text-neutral-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
