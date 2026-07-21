/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, FolderGit2, Star } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack' | 'Frontend' | 'AI/Automation'>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const filters: ('All' | 'Full Stack' | 'Frontend' | 'AI/Automation')[] = [
    'All',
    'Full Stack',
    'Frontend',
    'AI/Automation',
  ];

  return (
    <section id="projects" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-green-accent/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-accent/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Grid */}
        <div className="flex flex-col space-y-4 mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
            FEATURED WORK
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-txt-primary tracking-tight">
            Projects that matter
          </h2>
          <p className="font-sans text-sm text-txt-muted max-w-xl">
            A curated showcase of production applications, custom client dashboards, and automated AI utilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 select-none">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'border-transparent text-bg-primary bg-green-accent shadow-sm shadow-green-accent/15'
                    : 'border-border-soft text-txt-muted hover:text-txt-primary hover:border-border-hi'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-bg-card border border-border-soft rounded-xl p-8 backdrop-blur-card flex flex-col justify-between transition-all duration-300 hover:border-border-hi hover:shadow-glow-green hover:-translate-y-1 relative"
              >
                {/* Featured badge / star */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-green-dim border border-green-accent/20 px-2.5 py-1 rounded-full select-none">
                    <Star size={10} className="text-green-accent fill-green-accent" />
                    <span className="font-mono text-[9px] font-bold text-green-accent uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header Line: Number & Category Badge */}
                  <div className="flex items-center space-x-4 mb-6 select-none">
                    <span className="font-mono text-xs font-bold text-green-accent">
                      {project.number}
                    </span>
                    <span className="font-mono text-[9px] border border-border-soft text-txt-muted px-2 py-0.5 rounded-md uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-black text-xl md:text-2xl text-txt-primary group-hover:text-green-accent transition-colors duration-200 mb-4 select-text">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-txt-muted leading-relaxed mb-8 select-text">
                    {project.description}
                  </p>
                </div>

                {/* Footer details: Tech pills & arrow action */}
                <div className="border-t border-border-soft pt-6 mt-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between select-none">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 max-w-xs md:max-w-sm">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] text-txt-muted border border-border-soft px-2 py-0.5 rounded-md hover:border-green-accent/30 hover:text-green-accent transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Icon action slide */}
                  <div className="flex justify-end mt-2 sm:mt-0">
                    <div className="p-2 border border-border-soft rounded-lg group-hover:border-green-accent/50 group-hover:bg-green-dim text-txt-muted group-hover:text-green-accent transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
