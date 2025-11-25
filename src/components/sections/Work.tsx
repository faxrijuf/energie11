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

type Project = (typeof projects)[number];

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = ''
}) => {
  return (
    <motion.div variants={cardVariant} className={className}>
      <Card className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/55 bg-white/55 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
        {/* image block */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-80" />
          <div className="pointer-events-none absolute left-4 right-4 bottom-4 flex flex-col gap-1">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-100/90">
              {project.category}
            </span>
            <h3 className="text-sm md:text-base font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3 md:px-5 md:pb-5 md:pt-4">
          <p className="text-sm md:text-sm leading-relaxed text-neutral-700">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-white/70 bg-white/70 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const Work: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const { ref } = useSectionInView('work');

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
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-0">
        <SectionHeader
          title={t('work.title')}
          description={t('work.subtitle')}
        />

        {/* filter bar */}
        <div className="mt-6 md:mt-8">
          <div
            className={`${glassPanel} flex flex-col gap-3 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)]`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                {t('work.allProjects')}
              </span>
              <span className="text-[11px] text-neutral-600">
                {filteredProjects.length} / {projects.length}
              </span>
            </div>

            {/* chips – horizontal scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 pt-1">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  className={[
                    'flex-shrink-0 rounded-full border px-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase transition-all',
                    filter === tag
                      ? 'border-[#E65A4F] bg-[#E65A4F] text-white shadow-[0_0_18px_rgba(230,90,79,0.6)]'
                      : 'border-white/60 bg-white/35 text-neutral-700 hover:bg-white/60'
                  ].join(' ')}
                >
                  {tag === 'All' ? t('work.filterAll') : tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* content */}
        <div className="mt-8 md:mt-10">
          {/* Apple style mobile carousel */}
          <div className="md:hidden -mx-5 px-5">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className="snap-center shrink-0 w-[86%]"
                />
              ))}
            </div>
          </div>

          {/* desktop / tablet grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {filteredProjects.map((project, index) => {
              const spanClasses =
                index === 0
                  ? 'md:col-span-2 lg:col-span-2 lg:row-span-2'
                  : index === 3
                  ? 'lg:row-span-2'
                  : '';

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className={spanClasses}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
