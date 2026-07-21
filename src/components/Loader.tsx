/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Disable scrolling when loader is active
    document.body.classList.add('loading');

    // Simulate progress counting up to 100
    const duration = 1800; // 1.8s total
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentPercent);

      if (currentPercent >= 80) {
        setShowTagline(true);
      }

      if (currentPercent >= 100) {
        clearInterval(timer);
        // Add a slight delay before triggering onComplete for a polished feel
        setTimeout(() => {
          document.body.classList.remove('loading');
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.classList.remove('loading');
    };
  }, [onComplete]);

  // Split logo letters for staggered entrance
  const logoText = `<Murugan />`;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        id="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col justify-between p-12 select-none"
      >
        {/* Top bar (decorative) */}
        <div className="flex justify-between items-center text-xs font-mono text-txt-muted">
          <div>SYS_ONLINE: true</div>
          <div>PORT: 3000</div>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
          {/* Logo staggering animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-mono text-3xl md:text-4xl font-bold text-green-accent mb-3 flex items-center justify-center tracking-wide"
          >
            {logoText.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle fading in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-sans text-sm tracking-[4px] uppercase text-txt-muted mb-8"
          >
            {personalInfo.role}
          </motion.div>

          {/* Progress bar and numeric percentage */}
          <div className="w-64 md:w-80 flex flex-col items-center">
            {/* Numerical percentage counter */}
            <div className="font-mono text-xs text-green-accent mb-2 tracking-widest">
              {progress}%
            </div>

            {/* Thin progress bar background */}
            <div className="w-full h-[1px] bg-border-soft relative overflow-hidden">
              <div
                className="h-full bg-green-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Tagline showing up at 80%+ */}
          <div className="h-6 mt-4">
            <AnimatePresence>
              {showTagline && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-xs italic text-txt-muted font-medium"
                >
                  "{personalInfo.tagline}"
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="flex justify-between items-center text-[10px] font-mono text-txt-muted/50">
          <div>© 2026 Murugan S</div>
          <div>EST_INIT_COMPLETED</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
