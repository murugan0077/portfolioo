/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { personalInfo } from '../data';

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Disciplines', href: '#disciplines' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-bg-primary border-t border-border-soft py-12 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Left column: logo & role */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="font-mono text-base font-bold tracking-tight text-green-accent flex items-center"
          >
            <span className="text-txt-muted">&lt;</span>
            Murugan
            <span className="text-txt-muted">&nbsp;/&gt;</span>
          </a>
          <span className="font-mono text-[11px] text-txt-muted">
            {personalInfo.role}
          </span>
        </div>

        {/* Middle column: navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-mono text-xs text-txt-muted hover:text-txt-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right column: credits */}
        <div className="flex flex-col items-center md:items-end space-y-1">
          <span className="font-mono text-[11px] text-txt-muted">
            © 2026 · Built with React & Tailwind
          </span>
          <span className="font-mono text-[10px] text-txt-dim select-text">
            Srivilliputtur, Tamil Nadu, India
          </span>
        </div>

      </div>
    </footer>
  );
}
