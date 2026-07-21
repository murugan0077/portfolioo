/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Cpu, Palette, Server, Cloud, Check } from 'lucide-react';
import { disciplines } from '../data';

export default function Disciplines() {
  const [activeTab, setActiveTab] = useState('full-stack');

  const activeDiscipline = disciplines.find((d) => d.id === activeTab) || disciplines[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="text-green-accent" size={20} />;
      case 'Cpu':
        return <Cpu className="text-purple-accent" size={20} />;
      case 'Palette':
        return <Palette className="text-green-accent" size={20} />;
      case 'Server':
        return <Server className="text-purple-accent" size={20} />;
      case 'Cloud':
        return <Cloud className="text-amber-accent" size={20} />;
      default:
        return <Code className="text-green-accent" size={20} />;
    }
  };

  const getAccentColor = (name: string) => {
    switch (name) {
      case 'Cpu':
        return 'text-purple-accent border-purple-accent/30 bg-purple-dim';
      case 'Cloud':
        return 'text-amber-accent border-amber-accent/30 bg-amber-dim';
      default:
        return 'text-green-accent border-green-accent/30 bg-green-dim';
    }
  };

  const getProgressBarColor = (name: string) => {
    switch (name) {
      case 'Cpu':
        return 'bg-purple-accent';
      case 'Cloud':
        return 'bg-amber-accent';
      default:
        return 'bg-green-accent';
    }
  };

  return (
    <section id="disciplines" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
            WHAT I DO
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-txt-primary tracking-tight max-w-4xl leading-tight">
            Professional disciplines <br className="hidden md:block" />
            <span className="text-outline">engineered for high performance.</span>
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-border-soft gap-2 select-none -mx-6 px-6 md:mx-0 md:px-0">
          {disciplines.map((discipline) => {
            const isActive = activeTab === discipline.id;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveTab(discipline.id)}
                className={`relative px-5 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center space-x-2 border ${
                  isActive
                    ? 'border-transparent text-bg-primary bg-txt-primary'
                    : 'border-border-soft text-txt-muted hover:text-txt-primary hover:border-border-hi'
                }`}
              >
                <span>{getIcon(discipline.iconName)}</span>
                <span>{discipline.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-txt-primary rounded-full -z-10 mix-blend-difference"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Box: Text Info & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-bg-card border border-border-soft rounded-xl p-8 backdrop-blur-card hover:border-border-hi transition-all duration-300">
              <div className="space-y-6">
                {/* Header within Card */}
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl border ${getAccentColor(activeDiscipline.iconName)}`}>
                    {getIcon(activeDiscipline.iconName)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-txt-muted">
                      Discipline Area
                    </span>
                    <h3 className="font-heading font-black text-xl text-txt-primary">
                      {activeDiscipline.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-txt-muted leading-relaxed">
                  {activeDiscipline.description}
                </p>
              </div>

              {/* Bottom link CTA */}
              <div className="pt-8 mt-8 border-t border-border-soft">
                <a
                  href="#contact"
                  className="font-mono text-xs font-bold text-green-accent hover:text-green-accent/80 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>{activeDiscipline.linkText}</span>
                </a>
              </div>
            </div>

            {/* Middle/Right Box: Proficiency & Competencies */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Sub-Card 1: Proficiency (Progress Bars) */}
              <div className="bg-bg-card border border-border-soft rounded-xl p-8 backdrop-blur-card hover:border-border-hi transition-all duration-300">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-txt-muted mb-6 flex items-center justify-between">
                  <span>Tech Stack & Proficiency</span>
                  <span className="text-[9px] border border-border-soft px-1.5 py-0.5 rounded text-txt-dim">SKILLS</span>
                </h4>
                
                <div className="space-y-5">
                  {activeDiscipline.skills.map((skill, index) => (
                    <div key={skill.name} className="flex flex-col space-y-1.5">
                      <div className="flex justify-between text-xs font-mono font-medium">
                        <span className="text-txt-primary">{skill.name}</span>
                        <span className="text-txt-muted">{skill.percentage}%</span>
                      </div>
                      
                      <div className="w-full h-[3px] bg-border-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                          className={`h-full ${getProgressBarColor(activeDiscipline.iconName)} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Card 2: Competencies */}
              <div className="bg-bg-card border border-border-soft rounded-xl p-8 backdrop-blur-card hover:border-border-hi transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-txt-muted mb-6 flex items-center justify-between">
                    <span>Core Focus & Competency</span>
                    <span className="text-[9px] border border-border-soft px-1.5 py-0.5 rounded text-txt-dim">METHOD</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {activeDiscipline.competencies.map((comp) => (
                      <div key={comp} className="flex items-center space-x-2.5 text-xs text-txt-muted hover:text-txt-primary transition-colors">
                        <span className="p-1 rounded-full bg-border-soft flex items-center justify-center">
                          <Check size={10} className="text-green-accent" />
                        </span>
                        <span className="font-sans font-medium">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border-soft mt-6 text-[10px] font-mono text-txt-muted/50 leading-relaxed">
                  Engineered with strict adherence to OOP, SOLID principles, clean modular state, and high rendering efficiency.
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
