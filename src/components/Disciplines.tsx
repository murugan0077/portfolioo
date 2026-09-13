import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Cpu, Palette, Server, Cloud, Check, MessageSquare } from 'lucide-react';
import { disciplines, personalInfo } from '../data';

export default function Disciplines() {
  const [activeTab, setActiveTab] = useState('full-stack');

  const activeDiscipline = disciplines.find((d) => d.id === activeTab) || disciplines[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'Palette':
        return <Palette size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Cloud':
        return <Cloud size={20} />;
      default:
        return <Code size={20} />;
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
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-txt-primary tracking-tight max-w-4xl leading-tight">
            Professional disciplines <br className="hidden md:block" />
            engineered for high <br className="hidden md:block" />
            performance.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (Navigation) */}
          <div className="lg:col-span-4 bg-bg-card border border-border-soft rounded-[24px] p-6 md:p-8 flex flex-col">
            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-txt-muted block mb-2">
                DISCIPLINES
              </span>
              <h3 className="font-heading font-bold text-xl text-txt-primary">
                Expertise Areas
              </h3>
            </div>

            <div className="flex flex-col space-y-3 flex-grow">
              {disciplines.map((discipline) => {
                const isActive = activeTab === discipline.id;
                
                // Determine icon text color when not active based on accent
                let iconColor = 'text-green-accent';
                if (discipline.iconName === 'Cpu') iconColor = 'text-purple-accent';
                if (discipline.iconName === 'Cloud') iconColor = 'text-amber-accent';

                return (
                  <button
                    key={discipline.id}
                    onClick={() => setActiveTab(discipline.id)}
                    className={`relative p-4 rounded-xl text-left transition-all duration-300 flex items-center space-x-4 border ${
                      isActive
                        ? 'border-border-hi bg-border-soft/20'
                        : 'border-transparent hover:bg-border-soft/10 hover:border-border-soft/50'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg border ${isActive ? getAccentColor(discipline.iconName) : 'bg-bg-primary border-border-soft ' + iconColor}`}>
                      {getIcon(discipline.iconName)}
                    </div>
                    <div>
                      <div className={`font-sans font-bold text-sm ${isActive ? 'text-txt-primary' : 'text-txt-muted'}`}>
                        {discipline.title}
                      </div>
                      <div className="font-sans text-[11px] text-txt-dim mt-0.5">
                        {discipline.subtitle}
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabOutline"
                        className="absolute inset-0 border border-border-hi rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-border-soft flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-dim border border-green-accent/20 rounded text-[10px] font-mono font-bold text-green-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-green-accent shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                <span>{personalInfo.experience} EXP</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-dim border border-green-accent/20 rounded text-[10px] font-mono font-bold text-green-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-green-accent shadow-[0_0_8px_rgba(0,255,100,0.5)]"></span>
                <span>{personalInfo.projectsCount} PROJECTS</span>
              </div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-8 bg-bg-card border border-border-soft rounded-[24px] flex flex-col relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow flex flex-col"
              >
                <div className="p-8 md:p-10 flex-grow">
                  {/* Header inside Right Box */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-start space-x-5">
                      <div className={`p-4 rounded-xl border ${getAccentColor(activeDiscipline.iconName)}`}>
                        {getIcon(activeDiscipline.iconName)}
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-2xl md:text-3xl text-txt-primary mb-2">
                          {activeDiscipline.title}
                        </h3>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-green-accent font-bold">
                          {activeDiscipline.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center space-x-2 px-3 py-1.5 bg-bg-primary border border-border-soft rounded text-[10px] font-mono font-medium text-txt-muted">
                        <span className="text-green-accent text-xs">◲</span>
                        <span>{personalInfo.projectsCount.replace('+', '')} PROJECTS</span>
                      </div>
                      <div className="flex items-center space-x-2 px-3 py-1.5 bg-bg-primary border border-border-soft rounded text-[10px] font-mono font-medium text-txt-muted">
                        <span className="text-green-accent text-xs">★</span>
                        <span>{personalInfo.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm md:text-sm text-txt-muted leading-relaxed mb-10 max-w-3xl">
                    {activeDiscipline.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-10">
                    <h4 className="font-mono text-[11px] uppercase tracking-[2px] text-txt-muted mb-6">
                      TECH STACK & PROFICIENCY
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                      {activeDiscipline.skills.map((skill, index) => (
                        <div key={skill.name} className="flex flex-col space-y-2">
                          <div className="flex justify-between text-xs font-mono font-medium items-center">
                            <div className="flex items-center space-x-2.5">
                              <div className="w-6 h-6 flex items-center justify-center bg-bg-primary border border-border-soft rounded-full">
                                <span className="text-txt-primary text-[10px]"><Code size={10}/></span>
                              </div>
                              <span className="text-txt-primary">{skill.name}</span>
                            </div>
                            <span className="text-txt-muted">{skill.percentage}%</span>
                          </div>
                          
                          <div className="w-full h-1 bg-bg-primary rounded-full overflow-hidden">
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

                  {/* Competencies */}
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[2px] text-txt-muted mb-5">
                      CORE FOCUS & COMPETENCIES
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                      {activeDiscipline.competencies.map((comp) => (
                        <div key={comp} className="flex items-start space-x-3 text-xs text-txt-muted hover:text-txt-primary transition-colors group">
                          <span className="p-0.5 rounded bg-bg-primary border border-border-soft flex items-center justify-center mt-0.5 group-hover:border-green-accent/50 transition-colors">
                            <Check size={10} className="text-green-accent" />
                          </span>
                          <span className="font-sans leading-relaxed">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Action */}
                <div className="mt-auto bg-bg-primary/30 border-t border-border-soft p-6 px-8 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-bg-card rounded-xl border border-border-soft">
                      <MessageSquare size={16} className="text-green-accent" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-txt-primary">Interested in this service?</h4>
                      <p className="font-sans text-xs text-txt-muted mt-0.5">Let's discuss your project</p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="px-6 py-2.5 bg-border-soft hover:bg-border-hi text-txt-primary rounded-full font-mono text-xs font-bold transition-all flex items-center space-x-2 border border-transparent hover:border-txt-dim whitespace-nowrap"
                  >
                    <span>Get In Touch</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
