import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, BookOpen, Users, Briefcase, Cpu, Rocket } from 'lucide-react';
import { journeyTimeline } from '../data';

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="text-green-accent" size={16} />;
      case 'BookOpen':
        return <BookOpen className="text-purple-accent" size={16} />;
      case 'Users':
        return <Users className="text-amber-accent" size={16} />;
      case 'Briefcase':
        return <Briefcase className="text-green-accent" size={16} />;
      case 'Cpu':
        return <Cpu className="text-purple-accent" size={16} />;
      case 'Rocket':
        return <Rocket className="text-amber-accent" size={16} />;
      default:
        return <Sparkles className="text-green-accent" size={16} />;
    }
  };

  const getBorderColor = (index: number) => {
    const r = index % 3;
    if (r === 0) return 'border-l-2 md:border-l-0 md:border-r-2 md:border-r-green-accent border-l-green-accent';
    if (r === 1) return 'border-l-2 border-l-purple-accent';
    return 'border-l-2 md:border-l-0 md:border-r-2 md:border-r-amber-accent border-l-amber-accent';
  };

  // On desktop, we want even cards to have right border, odd cards to have left border,
  // matching their left/right side. Let's write a clean helper.
  const getCardBorder = (index: number, isLeft: boolean) => {
    const colors = ['border-green-accent', 'border-purple-accent', 'border-amber-accent'];
    const color = colors[index % 3];

    if (isLeft) {
      return `border-l-2 md:border-l-0 md:border-r-2 md:border-r-green-accent border-l-green-accent ${color}`;
    } else {
      return `border-l-2 border-l-green-accent ${color}`;
    }
  };

  return (
    <section id="journey" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">
      {/* Visual background lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1px] h-full bg-border-soft pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-20 text-center items-center">
          <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
            MY PATH
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-txt-primary tracking-tight">
            Tracing my path
          </h2>
          <div className="w-12 h-[2px] bg-green-accent mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto" ref={containerRef}>

          {/* Central Line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-border-soft -translate-x-1/2">
            <motion.div
              className="w-full bg-green-accent shadow-[0_0_15px_#4ade80]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Nodes */}
          <div className="space-y-12">
            {journeyTimeline.map((node, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={node.year}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${isEven ? 'md:justify-start' : 'md:justify-end'
                    }`}
                >
                  {/* central circle bullet */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-bg-card border border-border-soft flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                    {getIcon(node.iconName)}
                  </div>

                  {/* timeline card box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className={`w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                      }`}
                  >
                    <div
                      className={`bg-bg-card border border-border-soft rounded-xl p-6 md:p-8 backdrop-blur-card hover:border-border-hi hover:shadow-card transition-all duration-300 relative ${isEven
                          ? 'border-l-2 border-l-green-accent md:border-l border-r-border-soft md:border-r-2 md:border-r-green-accent'
                          : 'border-l-2 border-l-purple-accent'
                        }`}
                    >
                      {/* Year Indicator */}
                      <span className="font-mono text-[10px] uppercase tracking-wider text-green-accent bg-green-dim px-2.5 py-1 rounded-full inline-block mb-4">
                        {node.tag}
                      </span>

                      {/* Header */}
                      <h3 className="font-heading font-black text-lg md:text-xl text-txt-primary mb-3">
                        {node.title}
                      </h3>

                      {/* Description Body */}
                      <p className="font-sans text-xs md:text-sm text-txt-muted leading-relaxed">
                        {node.body}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
