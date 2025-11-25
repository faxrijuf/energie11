// src/components/sections/Work.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { useLanguage } from '../../i18n/LanguageContext';
import { projects } from '../../data/projects';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { useSectionInView } from '../../hooks/useSectionInView';

type Project = (typeof projects)[number];

const ProjectCardDesktop: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = ''
}) => {
  return (
    <motion.div variants={cardVariant} className={className}>
      <Card className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/55 bg-white/55 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
        {/* image */}
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
          <p className="text-xs md:text-sm leading-relaxed text-neutral-700">
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

const ProjectCardMobile: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="snap-center shrink-0 w-[86vw] max-w-sm">
      <div className="overflow-hidden rounded-3xl bg-white/6 backdrop-blur-xl border border-white/35 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="pointer-events-none absolute left-4 right-4 bottom-4 flex flex-col gap-1">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-100/90">
              {project.category}
            </span>
            <h3 className="text-base font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-neutral-900">
          {project.title}
        </h4>
        <p className="mt-1 text-[13px] leading-relaxed text-neutral-700">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export const Work: React.FC = () => {
  const { t } = useLanguage();
  const { ref } = useSectionInView('work');

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

        <div className="mt-8 md:mt-10">
          {/* Apple style mobile carousel, no filters */}
          <div className="md:hidden -mx-5 pl-5">
            <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth">
              {projects.map(project => (
                <ProjectCardMobile key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* desktop and tablet grid, no filters */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {projects.map((project, index) => {
              const spanClasses =
                index === 0
                  ? 'md:col-span-2 lg:col-span-2 lg:row-span-2'
                  : index === 3
                  ? 'lg:row-span-2'
                  : '';

              return (
                <ProjectCardDesktop
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
