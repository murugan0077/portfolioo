/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { personalInfo } from '../data';

export default function MarqueeTicker() {
  const row1Items = [
    'Full Stack Developer',
    'Java Developer',
    'React Developer',
    'Spring Boot Expert',
    'TypeScript Pro',
    'Clean Code Advocate',
    'Full Stack Developer',
    'Java Developer',
    'React Developer',
    'Spring Boot Expert',
    'TypeScript Pro',
    'Clean Code Advocate',
  ];

  const row2Items = [
    'AI Enthusiast',
    'Pranion Technology',
    'Problem Solver',
    'Open to Work',
    'Srivilliputtur',
    'Tamil Nadu, India',
    '1.7+ Years Exp',
    'AI Enthusiast',
    'Pranion Technology',
    'Problem Solver',
    'Open to Work',
    'Srivilliputtur',
    'Tamil Nadu, India',
    '1.7+ Years Exp',
  ];

  return (
    <div className="marquee-container py-12 bg-bg-primary border-t border-b border-border-soft overflow-hidden flex flex-col space-y-6 relative select-none">
      {/* Row 1: Left scrolling */}
      <div className="relative flex w-full bg-bg-card py-4 border-t border-b border-border-soft overflow-hidden">
        <div className="animate-marquee-left flex items-center whitespace-nowrap space-x-8">
          {row1Items.map((item, idx) => (
            <div key={`row1-${idx}`} className="flex items-center space-x-8">
              <span className="font-mono text-xs md:text-sm text-txt-muted uppercase tracking-wider font-semibold">
                {item}
              </span>
              <span className="text-green-accent text-lg">•</span>
            </div>
          ))}
        </div>
        {/* Mirror row to make loop seamless */}
        <div className="animate-marquee-left flex items-center whitespace-nowrap space-x-8 absolute top-4 left-0">
          {row1Items.map((item, idx) => (
            <div key={`row1-mirror-${idx}`} className="flex items-center space-x-8">
              <span className="font-mono text-xs md:text-sm text-txt-muted uppercase tracking-wider font-semibold">
                {item}
              </span>
              <span className="text-green-accent text-lg">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right scrolling */}
      <div className="relative flex w-full bg-bg-card py-4 border-t border-b border-border-soft overflow-hidden">
        <div className="animate-marquee-right flex items-center whitespace-nowrap space-x-8">
          {row2Items.map((item, idx) => (
            <div key={`row2-${idx}`} className="flex items-center space-x-8">
              <span className="font-mono text-xs md:text-sm text-txt-muted uppercase tracking-wider font-semibold">
                {item}
              </span>
              <span className="text-green-accent text-lg">•</span>
            </div>
          ))}
        </div>
        {/* Mirror row to make loop seamless */}
        <div className="animate-marquee-right flex items-center whitespace-nowrap space-x-8 absolute top-4 left-0">
          {row2Items.map((item, idx) => (
            <div key={`row2-mirror-${idx}`} className="flex items-center space-x-8">
              <span className="font-mono text-xs md:text-sm text-txt-muted uppercase tracking-wider font-semibold">
                {item}
              </span>
              <span className="text-green-accent text-lg">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
