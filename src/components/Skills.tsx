/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const technologies = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  // { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  // { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
];

export default function Skills() {
  const words = ['deploy', 'engineer', 'scale', 'master'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Split into two rows for marquee
  const row1 = technologies.slice(0, Math.ceil(technologies.length / 2));
  const row2 = technologies.slice(Math.ceil(technologies.length / 2));

  // Helper to quadruple the array for seamless infinite scrolling
  const marqueeItems1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeItems2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="skills" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">

      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col space-y-3 mb-20 text-center items-center relative z-10 px-6">
        <span className="text-amber-accent border border-amber-accent/20 bg-amber-dim px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[3px] font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
          MY ARSENAL
        </span>
        <h2 className="font-heading font-black text-4xl md:text-6xl text-white tracking-tight mt-4 flex flex-col md:flex-row items-center gap-x-4">
          Technologies i
          <span className="relative inline-block w-[200px] h-[1.2em] overflow-hidden text-center md:text-left text-white align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'backOut' }}
                className="absolute inset-0 block text-center md:text-left text-white"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>
        <p className="font-sans text-sm md:text-base text-txt-muted max-w-xl text-center mt-2">
          Building modern web experiences with cutting-edge tools and frameworks
        </p>
      </div>

      {/* Marquees */}
      <div className="relative w-full flex flex-col gap-12 overflow-hidden py-10 marquee-container">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Scrolling Left) */}
        <div className="animate-marquee-left gap-12 md:gap-20">
          {marqueeItems1.map((tech, i) => (
            <div key={`r1-${i}`} className="flex flex-col items-center justify-center gap-3 group min-w-[80px]">
              <div className="h-16 w-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <img src={tech.icon} alt={tech.name} className="max-h-12 max-w-12 object-contain drop-shadow-md" />
              </div>
              <span className="font-mono text-xs text-txt-dim group-hover:text-txt-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="animate-marquee-right gap-12 md:gap-20">
          {marqueeItems2.map((tech, i) => (
            <div key={`r2-${i}`} className="flex flex-col items-center justify-center gap-3 group min-w-[80px]">
              <div className="h-16 w-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <img src={tech.icon} alt={tech.name} className="max-h-12 max-w-12 object-contain drop-shadow-md" />
              </div>
              <span className="font-mono text-xs text-txt-dim group-hover:text-txt-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
