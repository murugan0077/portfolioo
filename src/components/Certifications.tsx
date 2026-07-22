import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'purple':
        return {
          textColor: 'text-purple-accent',
          gradientBg: 'from-purple-900/40 to-bg-card',
        };
      case 'amber':
        return {
          textColor: 'text-amber-accent',
          gradientBg: 'from-amber-900/40 to-bg-card',
        };
      case 'green':
      default:
        return {
          textColor: 'text-green-accent',
          gradientBg: 'from-green-900/40 to-bg-card',
        };
    }
  };

  const cardPositions = [
    // Top Left
    "lg:absolute lg:top-[5%] lg:left-[calc(50%-480px)] xl:left-[calc(50%-560px)] lg:-rotate-6",
    // Top Right
    "lg:absolute lg:top-[12%] lg:left-[calc(50%+220px)] xl:left-[calc(50%+240px)] lg:rotate-3",
    // Bottom Left
    "lg:absolute lg:top-[52%] lg:left-[calc(50%-460px)] xl:left-[calc(50%-530px)] lg:rotate-3",
    // Bottom Right
    "lg:absolute lg:top-[58%] lg:left-[calc(50%+200px)] xl:left-[calc(50%+220px)] lg:-rotate-2"
  ];

  return (
    <section id="certifications" className="py-24 lg:py-0 bg-bg-primary relative border-t border-border-soft overflow-hidden min-h-screen lg:min-h-[900px] flex items-center justify-center">
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5a36]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:block lg:h-[850px]">
        
        {/* Center Text Block (Standard flow on mobile, absolute center on lg) */}
        <div className="flex flex-col items-center text-center max-w-sm xl:max-w-md mx-auto lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 mb-20 lg:mb-0">
          
          {/* Pill */}
          <div className="flex items-center space-x-2 px-3 py-1.5 border border-border-soft rounded-full mb-8 bg-bg-card/50 backdrop-blur-sm">
            <Award size={12} className="text-[#ff5a36]" />
            <span className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-txt-muted">
              Professional Milestones
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="font-heading font-black text-5xl md:text-6xl tracking-tight mb-6 leading-[1.1]">
            <span className="text-txt-primary">Certificates</span>
            <br/>
            <span className="text-[#ff5a36]">& Awards</span>
          </h2>
          
          {/* Description */}
          <p className="font-sans text-sm text-txt-muted leading-relaxed mb-6">
            A visual journey through verified certifications, hackathons, and credentials.
          </p>
          
          {/* Metrics */}
          <div className="font-mono text-[10px] text-txt-dim tracking-[2px] uppercase mb-10">
            04 certifications • 03 platforms • 2025-26
          </div>
          
          {/* Action Button */}
          <a
            href="#contact"
            className="px-6 py-3 border border-[#ff5a36]/40 text-txt-primary rounded-full font-mono text-xs font-bold transition-all flex items-center space-x-2 group hover:bg-[#ff5a36]/10 hover:border-[#ff5a36]/80 bg-bg-card/30 backdrop-blur-sm"
          >
            <span>VIEW CREDENTIALS</span>
            <span className="text-[#ff5a36] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </div>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:block relative z-10 w-full h-full">
          {certifications.map((cert, index) => {
            const styles = getAccentStyles(cert.accent);
            const positionClass = cardPositions[index] || "lg:relative";
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`bg-bg-card border border-border-soft rounded-[20px] p-2 flex flex-col group hover:z-30 hover:border-border-hi transition-all duration-300 hover:shadow-2xl hover:shadow-bg-primary/50 w-full lg:w-[260px] xl:w-[320px] ${positionClass}`}
              >
                {/* Image Placeholder */}
                <div className={`relative w-full h-[160px] xl:h-[180px] rounded-[14px] bg-gradient-to-br ${styles.gradientBg} overflow-hidden border border-white/5 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                  <Award size={48} className={`${styles.textColor} opacity-20`} />
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white/90 font-bold">
                    {cert.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 pt-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className={`font-mono text-[10px] font-bold tracking-wider uppercase mb-2 ${styles.textColor}`}>
                      {cert.issuer}
                    </div>
                    <h3 className="font-heading font-bold text-base xl:text-lg text-txt-primary leading-snug mb-2">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <a
                    href={cert.link}
                    onClick={(e) => e.preventDefault()}
                    className="mt-6 font-mono text-[10px] font-bold text-txt-muted uppercase tracking-widest flex items-center space-x-1 hover:text-txt-primary transition-colors group/link"
                  >
                    <span>EXPLORE CREDENTIALS</span>
                    <span className="text-[#ff5a36] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">↗</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
