/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, MessageSquare, Terminal, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';
import TerminalPopup from './TerminalPopup';

export default function Hero() {
  const [dots, setDots] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Generate random background stars/dots once on mount to avoid hydration mismatch
    const generatedDots = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setDots(generatedDots);
  }, []);

  const handleContactScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDisciplinesScroll = () => {
    const element = document.querySelector('#disciplines');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030303] flex flex-col justify-center items-center overflow-hidden py-24 select-none"
    >
      {/* Background Star Dots (Twinkling) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
            animate={{
              opacity: [0.15, 0.75, 0.15],
            }}
            transition={{
              duration: 3 + dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Background Diagonal Shooting Star Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top line */}
        <div
          className="absolute top-[18%] left-[30%] w-[160px] h-[1px] rotate-[35deg]"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)',
          }}
        />
        {/* Bottom line */}
        <div
          className="absolute bottom-[28%] right-[22%] w-[220px] h-[1px] rotate-[35deg]"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Core Typography Layout Container */}
      <div className="max-w-6xl w-full px-6 md:px-12 flex flex-col items-center justify-center relative z-10 text-center">

        {/* Left Subtext (Desktop: Absolute on the left, Mobile: Centered at the top) */}
        <div className="lg:absolute lg:left-6 xl:left-12 lg:top-[12%] lg:text-left max-w-xs mb-8 lg:mb-0 select-none">
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] leading-relaxed text-zinc-500 font-semibold uppercase">
            MURUGAN S •
            <br />
            DEVELOPING MODERN,
            <br />
            SCALABLE WEB PLATFORMS WITH
            <br />
            PREMIUM LOGIC.
          </p>
        </div>

        {/* Massive Center Titles with Social Icons */}
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 max-w-full">

          {/* Row 1: AI & WEB + Github Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 sm:gap-5 md:gap-7"
          >
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none select-none">
              AI & WEB
            </h1>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-2xl p-1"
              aria-label="GitHub profile"
            >
              <Github className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 stroke-[1]" />
            </a>
          </motion.div>

          {/* Row 2: Linkedin Icon + SOFTWARE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center gap-3 sm:gap-5 md:gap-7"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-2xl p-1"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 stroke-[1]" />
            </a>
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none select-none">
              SOFTWARE
            </h1>
          </motion.div>

          {/* Row 3: DEVELOPER + Instagram/Email Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 sm:gap-5 md:gap-7"
          >
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none select-none">
              DEVELOPER
            </h1>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-2xl p-1"
              aria-label="Instagram profile"
            >
              <Instagram className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 stroke-[1]" />
            </a>
          </motion.div>

        </div>

        {/* Right Subtext (Desktop: Absolute on the right, Mobile: Centered at the bottom) */}
        <div className="lg:absolute lg:right-6 xl:right-12 lg:bottom-[12%] lg:text-right max-w-xs mt-8 lg:mt-0 select-none">
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] leading-relaxed text-zinc-500 font-semibold uppercase">
            CRAFTING ULTRA-FAST REACT
            <br />
            APPLICATIONS
            <br />
            POWERED BY REACT.JS
            <br />
            & TYPESCRIPT.
          </p>
        </div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3 bg-[#0a0a0c] border border-orange-500/35 rounded-full text-xs font-mono tracking-widest text-zinc-200 hover:text-white hover:border-orange-500/80 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]"
          >
            <span>VIEW RESUME</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
          </a>
        </motion.div>

      </div>

      {/* Right Edge: Available for Opportunity vertical tag */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center gap-4 bg-[#0a0a0c]/85 border border-white/5 backdrop-blur-md rounded-full px-3 py-6 shadow-xl select-none">
          <span
            className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-zinc-400 font-semibold uppercase"
            style={{ writingMode: 'vertical-rl' }}
          >
            AVAILABLE FOR OPPORTUNITY
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
      </div>

      {/* Floating Action Buttons at Bottom Corners */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="w-11 h-11 rounded-full border border-white/5 hover:border-white/20 bg-[#0a0a0c]/80 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
          title="Explore Services"
        >
          <Terminal size={16} />
        </button>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12 z-20">
        <button
          onClick={handleContactScroll}
          className="w-11 h-11 rounded-full border border-white/5 hover:border-white/20 bg-[#0a0a0c]/80 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
          title="Send a Message"
        >
          <MessageSquare size={16} />
        </button>
      </div>

      {/* Bottom Red Planetary Horizon Glow Arc */}
      <div
        className="absolute bottom-0 left-1/2 w-[160%] h-[120px] rounded-[100%] border-t border-red-500/25 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(239, 68, 68, 0.28) 0%, rgba(249, 115, 22, 0.04) 55%, transparent 85%)',
          transform: 'translate(-50%, 55px)',
        }}
      />
      
      {/* Sandbox Terminal Popup */}
      <TerminalPopup isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </section>
  );
}
