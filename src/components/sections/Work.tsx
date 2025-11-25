// src/components/sections/Work.tsx

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
  const [filter, setFilter] = useState<string>('All');
  const { ref, active } = useSectionInView('work');

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects =
    filter === 'All'
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
      className="relative bg-transparent py-16 sm:py-20"
    >
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.12),_transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          title={t('work.title')}
          description={t('work.subtitle')}
          active={active}
        />

        {/* filters - horizontal scroll on mobile, wrap on desktop */}
        <div className="mt-6 md:mt-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:justify-center md:gap-3">
            {allTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={`whitespace-nowrap rounded-full border px-3.5 md:px-4 py-2 text-xs font-medium transition-all duration-200 active:scale-95 ${
                  filter === tag
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-[0_10px_25px_rgba(15,23,42,0.22)]'
                    : 'border-white/40 bg-white/25 backdrop-blur-md text-neutral-800 hover:bg-white/40'
                }`}
              >
                {tag === 'All' ? t('work.filterAll') : tag}
              </button>
            ))}
          </div>
        </div>

        {/* desktop and tablet grid */}
        <div className="mt-10 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8">
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
                        className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-105"
                        loading={index < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                      {project.category}
                    </p>
                    <h3 className="text-lg md:text-xl font-medium text-neutral-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
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
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* mobile slider */}
        <div className="mt-8 md:mt-10 md:hidden">
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              {t('work.allProjects') ?? 'Selected work'}
            </p>
            <p className="text-[11px] text-neutral-500">
              {filteredProjects.length.toString().padStart(2, '0')}
            </p>
          </div>

          <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 scrollbar-none scroll-smooth snap-x snap-mandatory scroll-ml-5">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariant}
                className="snap-start"
              >
                <Card className="bg-white/95 border border-white/80 shadow-[0_0_18px_rgba(15,23,42,0.08)] h-full min-w-[78vw] max-w-[82vw]">
                  <div className="mb-4 overflow-hidden rounded-xl bg-neutral-950/90">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        loading={index < 2 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-medium text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-neutral-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-[11px] font-medium ${
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
      </div>
    </motion.section>
  );
};
