/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, Check } from 'lucide-react';
import { experience, education, calculateExperience, calculateDetailedExperience } from '../data';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">
      {/* Background visual details */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-green-accent/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-purple-accent/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
            BACKGROUND
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-txt-primary tracking-tight">
            Experience & Education
          </h2>
          <p className="font-sans text-sm text-txt-muted max-w-xl">
            A parallel view of professional service and educational engineering foundations.
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: WORK EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-bg-card border border-border-soft border-t-4 border-t-green-accent rounded-xl p-8 backdrop-blur-card hover:border-border-hi hover:shadow-card transition-all duration-300"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-8 border-b border-border-soft pb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-dim border border-green-accent/20 rounded-lg text-green-accent">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-txt-muted">Career</span>
                  <h3 className="font-heading font-black text-xl text-txt-primary">Work Experience</h3>
                </div>
              </div>
              <div 
                title={calculateDetailedExperience()}
                className="font-mono text-[10px] text-green-accent bg-green-dim border border-green-accent/20 px-2.5 py-1 rounded-full uppercase tracking-wider select-none font-bold cursor-default"
              >
                {calculateExperience()}
              </div>
            </div>

            {/* Career Entry */}
            <div className="space-y-6">
              <div>
                {/* Date & Title */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 select-none">
                  <div className="flex items-center space-x-2 text-xs font-mono text-txt-muted">
                    <Calendar size={12} className="text-green-accent" />
                    <span>{experience.period}</span>
                  </div>
                  <span className="text-[10px] bg-green-accent text-bg-primary font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    CURRENT
                  </span>
                </div>

                <h4 className="font-heading font-black text-lg text-txt-primary">
                  {experience.title}
                </h4>
                <p className="font-sans text-xs text-green-accent/90 mt-1 select-text">
                  {experience.company}
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-3.5 pt-2 border-t border-border-soft">
                {experience.highlights.map((bullet, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs md:text-sm text-txt-muted leading-relaxed">
                    <span className="mt-1 p-0.5 rounded-full bg-border-soft text-green-accent flex-shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Visual Tech Skills inside experience card */}
              <div className="pt-6 border-t border-border-soft mt-8 space-y-4">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-txt-muted font-bold">
                  Applied Tech Proficiency
                </h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {experience.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-txt-primary">{skill.name}</span>
                        <span className="text-txt-muted">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-border-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-green-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: EDUCATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-card border border-border-soft border-t-4 border-t-purple-accent rounded-xl p-8 backdrop-blur-card hover:border-border-hi hover:shadow-card transition-all duration-300"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-8 border-b border-border-soft pb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-dim border border-purple-accent/20 rounded-lg text-purple-accent">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-txt-muted">Academy</span>
                  <h3 className="font-heading font-black text-xl text-txt-primary">Education</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] text-purple-accent bg-purple-dim border border-purple-accent/20 px-2.5 py-1 rounded-full uppercase tracking-wider select-none font-bold">
                B.Sc Degree
              </div>
            </div>

            {/* Academic Entry */}
            <div className="space-y-6">
              <div>
                {/* Date & Title */}
                <div className="flex items-center justify-between gap-2 mb-2 select-none">
                  <div className="flex items-center space-x-2 text-xs font-mono text-txt-muted">
                    <Calendar size={12} className="text-purple-accent" />
                    <span>{education.period}</span>
                  </div>
                  <span className="text-[10px] bg-purple-accent text-bg-primary font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {education.score}
                  </span>
                </div>

                <h4 className="font-heading font-black text-lg text-txt-primary">
                  {education.title}
                </h4>
                <p className="font-sans text-xs text-purple-accent/90 mt-1 select-text">
                  {education.institution}
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-3.5 pt-2 border-t border-border-soft">
                {education.highlights.map((bullet, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs md:text-sm text-txt-muted leading-relaxed">
                    <span className="mt-1 p-0.5 rounded-full bg-border-soft text-purple-accent flex-shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Visual Tech Skills inside education card */}
              <div className="pt-6 border-t border-border-soft mt-8 space-y-4">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-txt-muted font-bold">
                  Theoretical Foundations
                </h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {education.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-txt-primary">{skill.name}</span>
                        <span className="text-txt-muted">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-border-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-purple-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
