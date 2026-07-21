/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'purple':
        return {
          borderTop: 'border-t-2 border-purple-accent',
          badgeBg: 'bg-purple-dim text-purple-accent border-purple-accent/20',
          glowHover: 'hover:shadow-glow-purple hover:border-purple-accent/30',
          textColor: 'text-purple-accent',
        };
      case 'amber':
        return {
          borderTop: 'border-t-2 border-amber-accent',
          badgeBg: 'bg-amber-dim text-amber-accent border-amber-accent/20',
          glowHover: 'hover:shadow-glow-amber hover:border-amber-accent/30',
          textColor: 'text-amber-accent',
        };
      case 'green':
      default:
        return {
          borderTop: 'border-t-2 border-green-accent',
          badgeBg: 'bg-green-dim text-green-accent border-green-accent/20',
          glowHover: 'hover:shadow-glow-green hover:border-green-accent/30',
          textColor: 'text-green-accent',
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-bg-primary relative border-t border-border-soft overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
              CREDENTIALS
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-txt-primary tracking-tight">
              Certificates & Awards
            </h2>
            <p className="font-sans text-sm text-txt-muted max-w-xl">
              A visual journey through verified industry credentials, academic achievements, and software engineering competitions.
            </p>
          </div>

          <a
            href="#contact"
            className="font-mono text-xs font-bold text-green-accent hover:text-green-accent/80 transition-colors inline-flex items-center space-x-1 border-b border-green-accent pb-1 cursor-pointer self-start md:self-auto"
          >
            <span>Verify Credential Docs</span>
            <span>→</span>
          </a>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => {
            const styles = getAccentStyles(cert.accent);
            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                className={`bg-bg-card border border-border-soft ${styles.borderTop} rounded-xl p-8 backdrop-blur-card flex flex-col justify-between transition-all duration-300 ${styles.glowHover} hover:-translate-y-1`}
              >
                {/* Header line: Verified tag and certificate ID */}
                <div className="flex items-center justify-between gap-4 mb-8 select-none">
                  <div className={`flex items-center space-x-1.5 border text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${styles.badgeBg}`}>
                    <CheckCircle size={10} />
                    <span>VERIFIED</span>
                  </div>
                  <div className="font-mono text-[10px] text-txt-muted select-text">
                    {cert.no}
                  </div>
                </div>

                {/* Issuer, Year and Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between select-none">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-txt-muted uppercase flex items-center space-x-1.5">
                      <Award size={13} className={styles.textColor} />
                      <span>{cert.issuer}</span>
                    </span>
                    <span className="font-mono text-xs text-txt-dim font-bold">{cert.year}</span>
                  </div>

                  <h3 className="font-heading font-black text-lg md:text-xl text-txt-primary leading-snug">
                    {cert.title}
                  </h3>

                  {cert.score && (
                    <div className="pt-2">
                      <span className="font-mono text-xs text-txt-muted">
                        Evaluation Score: <strong className="text-green-accent font-semibold">{cert.score}</strong>
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Link */}
                <div className="border-t border-border-soft pt-6 mt-8 flex justify-between items-center select-none">
                  <span className="font-mono text-[10px] text-txt-dim uppercase tracking-wider">
                    SECURE_DOCS_HASH
                  </span>
                  
                  <a
                    href={cert.link}
                    onClick={(e) => e.preventDefault()} // Keep as interactive placeholder
                    className="font-mono text-xs text-txt-muted hover:text-txt-primary transition-colors inline-flex items-center space-x-1 group"
                  >
                    <span>Inspect credential</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
