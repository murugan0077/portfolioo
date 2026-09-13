import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface TerminalPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalPopup({ isOpen, onClose }: TerminalPopupProps) {
  const [step, setStep] = useState(0);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showJson, setShowJson] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const fullText1 = 'javac Murugan.java';
  const fullText2 = 'java Murugan';

  useEffect(() => {
    if (isOpen) {
      // Reset state
      setStep(0);
      setText1('');
      setText2('');
      setShowJson(false);
      setShowPrompt(false);

      let t1 = 0;
      const type1 = setInterval(() => {
        setText1(fullText1.slice(0, t1 + 1));
        t1++;
        if (t1 === fullText1.length) {
          clearInterval(type1);
          setTimeout(() => setStep(1), 500);
        }
      }, 70); // typing speed

      return () => clearInterval(type1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (step === 1) {
      let t2 = 0;
      const type2 = setInterval(() => {
        setText2(fullText2.slice(0, t2 + 1));
        t2++;
        if (t2 === fullText2.length) {
          clearInterval(type2);
          setTimeout(() => {
            setShowJson(true);
            setTimeout(() => setShowPrompt(true), 400);
          }, 300);
        }
      }, 70);
      return () => clearInterval(type2);
    }
  }, [step]);

  // JSON content
  const jsonContent = `{
  "name": "Murugan S",
  "role": "Software Developer",
  "status": "Available for Opportunity",
  "skills": ["Java", "React.js", "TypeScript", "Node.js"],
  "location": "India",
  "passion": "Building scalable web platforms with premium logic"
}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-[#0a0a0c] border border-white/10 rounded-xl shadow-2xl overflow-hidden font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-zinc-400 text-xs font-semibold tracking-wider">
                &gt;_ Sandbox Terminal
              </div>
              <button
                onClick={onClose}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 text-sm md:text-base text-green-400 min-h-[300px] overflow-y-auto font-mono">
              {/* Line 1 */}
              <div className="mb-2">
                <span className="text-blue-400">guest@murugan.me</span>
                <span className="text-zinc-400">:~</span>
                <span className="text-white">$ </span>
                <span>{text1}</span>
                {step === 0 && <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1 align-middle" />}
              </div>

              {/* Line 2 */}
              {step >= 1 && (
                <div className="mb-2">
                  <span className="text-blue-400">guest@murugan.me</span>
                  <span className="text-zinc-400">:~</span>
                  <span className="text-white">$ </span>
                  <span>{text2}</span>
                  {step === 1 && !showJson && <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1 align-middle" />}
                </div>
              )}

              {/* Output JSON */}
              {showJson && (
                <div className="mb-2 text-zinc-300 whitespace-pre font-mono">
                  {jsonContent}
                </div>
              )}

              {/* Prompt */}
              {showPrompt && (
                <div>
                  <span className="text-blue-400">guest@murugan.me</span>
                  <span className="text-zinc-400">:~</span>
                  <span className="text-white">$ </span>
                  <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1 align-middle" />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
