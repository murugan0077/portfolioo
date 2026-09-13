/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('loading');

    // We want the text to reveal letter by letter, then stay for a moment, then zoom out.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleExitComplete = () => {
    document.body.classList.remove('loading');
    onComplete();
  };

  const name = "Murugan S";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
      `}</style>
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isVisible && (
          <motion.div
            id="loader"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.85,
              transition: { duration: 0.8, ease: 'easeInOut' }
            }}
            className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center select-none"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-white text-6xl md:text-8xl pr-2 md:pr-4 flex"
                style={{ fontFamily: "'Kaushan Script', cursive", fontWeight: 400 }}
              >
                {name.split('').map((letter, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Brush stroke underline reveal */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-white to-transparent origin-left rounded-[50%]"
                style={{ boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
