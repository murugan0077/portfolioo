/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

// Custom CountUp Component for stats animation
function CountUp({ end, decimals = 0, suffix = '' }: { end: number; decimals?: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const ease = progress * (2 - progress);
      const current = start + ease * (end - start);
      
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(update);
  }, [end]);

  return <span>{value.toFixed(decimals)}{suffix}</span>;
}

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#disciplines');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsScroll = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger wrapper
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const codeString = `public class Developer {
  String name       = "Murugan S";
  String role       = "Full Stack Developer";
  String location   = "Tamil Nadu, India";
  boolean available = true;

  String[] stack = {
    "Java", "Spring Boot", "React",
    "TypeScript", "PostgreSQL", "Docker"
  };

  String build() {
    return "Scalable. Clean. Impactful.";
  }

  String getStatus() {
    return available
      ? "Open to opportunities 🟢"
      : "Currently engaged";
  }
}`;

  return (
    <section
      id="home"
      className="relative min-height-screen min-h-screen bg-bg-primary pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column (60%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} className="flex">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[3px] text-green-accent bg-green-dim border border-green-accent/20 px-3 py-1 rounded-full">
              Full Stack Development
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="flex flex-col">
            <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-txt-primary tracking-tight">
              Hi, I'm Murugan
            </span>
            <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-outline tracking-tight mt-1">
              I build great
            </span>
            <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-outline-green text-green-accent tracking-tight mt-1">
              software.
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-txt-muted leading-relaxed max-w-xl"
          >
            Full Stack Developer specializing in <strong className="text-txt-primary font-semibold">Java, Spring Boot</strong> backend systems and <strong className="text-txt-primary font-semibold">React / TypeScript</strong> frontends. I craft clean, scalable products that solve real problems.
          </motion.p>

          {/* CTA Buttons with clip-path */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={handleProjectsScroll}
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
              className="bg-green-accent text-bg-primary font-mono text-sm font-semibold px-6 py-3.5 hover:bg-green-accent/90 transition-all duration-200 cursor-pointer shadow-lg shadow-green-accent/10 hover:shadow-green-accent/20 flex items-center space-x-2 border border-green-accent"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={handleContactScroll}
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
              className="border border-green-accent/50 text-green-accent font-mono text-sm font-semibold px-6 py-3.5 hover:bg-green-dim transition-all duration-200 cursor-pointer flex items-center"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-10 border-t border-border-soft max-w-md w-full"
          >
            <div className="flex flex-col">
              <span className="font-heading font-black text-3xl md:text-4xl text-txt-primary tracking-tight">
                <CountUp end={1.7} decimals={1} suffix="+" />
              </span>
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-txt-muted mt-1">
                Years Exp.
              </span>
            </div>

            <div className="flex flex-col border-l border-border-soft pl-4">
              <span className="font-heading font-black text-3xl md:text-4xl text-txt-primary tracking-tight">
                <CountUp end={8} suffix="+" />
              </span>
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-txt-muted mt-1">
                Projects
              </span>
            </div>

            <div className="flex flex-col border-l border-border-soft pl-4">
              <span className="font-heading font-black text-3xl md:text-4xl text-txt-primary tracking-tight">
                <CountUp end={10} suffix="+" />
              </span>
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-txt-muted mt-1">
                Tech Stack
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (40%) - IDE Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-md bg-bg-card border border-border-soft rounded-xl shadow-card backdrop-blur-card overflow-hidden hover:border-border-hi transition-all duration-300">
            {/* Title Bar */}
            <div className="bg-bg-primary/60 border-b border-border-soft px-4 py-3 flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              
              {/* File Name */}
              <div className="font-mono text-xs text-txt-muted select-none flex items-center space-x-1.5">
                <span className="text-amber-accent">☕</span>
                <span>Developer.java</span>
              </div>

              {/* Copy button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2000);
                }}
                className="font-mono text-[10px] text-txt-muted hover:text-green-accent cursor-pointer bg-bg-primary px-2 py-0.5 rounded border border-border-soft"
              >
                {isCopied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Editor Textarea */}
            <div className="p-5 font-mono text-[11px] md:text-xs leading-relaxed text-txt-primary overflow-x-auto select-none bg-[#09090f]/80">
              <pre className="whitespace-pre">
                <div>
                  <span className="text-purple-accent">public class</span> <span className="text-amber-accent">Developer</span> &#123;
                </div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">String</span> <span className="text-txt-primary">name</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-green-accent">"Murugan S"</span>;
                </div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">String</span> <span className="text-txt-primary">role</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-green-accent">"Full Stack Developer"</span>;
                </div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">String</span> <span className="text-txt-primary">location</span>&nbsp;&nbsp;&nbsp;= <span className="text-green-accent">"Tamil Nadu, India"</span>;
                </div>
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">boolean</span> <span className="text-txt-primary">available</span> = <span className="text-purple-accent">true</span>;
                </div>
                <br />
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">String</span>[] <span className="text-txt-primary">stack</span> = &#123;
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-accent">"Java"</span>, <span className="text-green-accent">"Spring Boot"</span>, <span className="text-green-accent">"React"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-accent">"TypeScript"</span>, <span className="text-green-accent">"PostgreSQL"</span>, <span className="text-green-accent">"Docker"</span>
                </div>
                <div>
                  &nbsp;&nbsp;&#125;;
                </div>
                <br />
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">String</span> <span className="text-green-accent">build</span>() &#123;
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-accent">return</span> <span className="text-green-accent">"Scalable. Clean. Impactful."</span>;
                </div>
                <div>
                  &nbsp;&nbsp;&#125;
                </div>
                <br />
                <div>
                  &nbsp;&nbsp;<span className="text-purple-accent">String</span> <span className="text-green-accent">getStatus</span>() &#123;
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-accent">return</span> <span className="text-txt-primary">available</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? <span className="text-green-accent">"Open to opportunities 🟢"</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="text-green-accent">"Currently engaged"</span>;
                </div>
                <div>
                  &nbsp;&nbsp;&#125;
                </div>
                <div>&#125;</div>
              </pre>
            </div>

            {/* Footer / Status bar */}
            <div className="bg-bg-primary/40 border-t border-border-soft px-4 py-2 flex items-center justify-between select-none">
              <div className="font-mono text-[10px] text-txt-muted flex items-center space-x-2">
                <span>🟢 java-17</span>
                <span>|</span>
                <span>0 errors</span>
              </div>
              <div className="font-mono text-[10px] text-txt-muted">
                UTF-8
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator at bottom center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center select-none z-10">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center justify-center cursor-pointer group hover:opacity-85 text-txt-muted transition-opacity duration-200"
        >
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-txt-muted mb-2 group-hover:text-green-accent transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-green-accent" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
