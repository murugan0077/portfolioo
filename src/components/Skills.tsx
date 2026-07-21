/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Layers, FileCode, Code2, Wind,
  Coffee, Leaf, Terminal, Webhook, Database,
  HardDrive, Github, Container,
  Binary, GitMerge, Flame, Figma, Layout, ShieldCheck
} from 'lucide-react';
import { skillsList } from '../data';

export default function Skills() {
  // Group skills by category
  const categories = ['Frontend', 'Backend', 'Database & Tools', 'Soft / Other'] as const;

  const getIcon = (name: string) => {
    const iconSize = 16;
    switch (name) {
      // Frontend
      case 'Layers': return <Layers size={iconSize} />;
      case 'FileCode': return <FileCode size={iconSize} />;
      case 'Code2': return <Code2 size={iconSize} />;
      case 'FileHtml': return <FileCode size={iconSize} />;
      case 'Wind': return <Wind size={iconSize} />;
      
      // Backend
      case 'Coffee': return <Coffee size={iconSize} />;
      case 'Leaf': return <Leaf size={iconSize} />;
      case 'Terminal': return <Terminal size={iconSize} />;
      case 'Webhook': return <Webhook size={iconSize} />;
      case 'Database': return <Database size={iconSize} />;
      
      // Database & Tools
      case 'HardDrive': return <HardDrive size={iconSize} />;
      case 'DatabaseBackup': return <Database size={iconSize} />;
      case 'Github': return <Github size={iconSize} />;
      case 'Container': return <Container size={iconSize} />;
      case 'TerminalSquare': return <Terminal size={iconSize} />;
      
      // Soft / Other
      case 'Binary': return <Binary size={iconSize} />;
      case 'GitMerge': return <GitMerge size={iconSize} />;
      case 'Flame': return <Flame size={iconSize} />;
      case 'Figma': return <Figma size={iconSize} />;
      case 'Layout': return <Layout size={iconSize} />;
      default: return <ShieldCheck size={iconSize} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-green-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 text-center items-center">
          <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
            TECH STACK
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-txt-primary tracking-tight">
            Technologies I master
          </h2>
          <p className="font-sans text-sm text-txt-muted max-w-xl text-center">
            Building responsive, secure, and production-ready applications with modern web languages and system utilities.
          </p>
        </div>

        {/* Skill Groups Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const groupSkills = skillsList.filter((s) => s.category === category);
            return (
              <div key={category} className="flex flex-col space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3 border-b border-border-soft pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-accent" />
                  <h3 className="font-mono text-[11px] font-bold tracking-[2px] uppercase text-txt-primary">
                    {category}
                  </h3>
                </div>

                {/* Chips Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="flex flex-col gap-3"
                >
                  {groupSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 2 }}
                      className="group flex items-center space-x-3 bg-bg-card border border-border-soft hover:border-green-accent/30 rounded-lg p-3 backdrop-blur-card transition-all duration-200 select-none shadow-sm hover:shadow-glow-green"
                    >
                      <div className="text-txt-muted group-hover:text-green-accent transition-colors duration-200 p-1.5 bg-bg-primary rounded-md border border-border-soft">
                        {getIcon(skill.iconName)}
                      </div>
                      <span className="font-sans text-xs font-semibold text-txt-muted group-hover:text-txt-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
