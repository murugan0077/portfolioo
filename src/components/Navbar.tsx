/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Home, User, Code, Briefcase, Mail, ChevronDown, Award, Compass, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (href: string) => {
    setDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine active states for main items
  const isHomeActive = activeSection === 'home';
  const isAboutActive = ['disciplines', 'certifications', 'journey'].includes(activeSection);
  const isSkillsActive = activeSection === 'skills';
  const isWorkActive = activeSection === 'projects';
  const isContactActive = activeSection === 'contact';

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center relative w-full">
          {/* Logo on the left (clickable & pointer-events-auto) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="pointer-events-auto font-logo italic font-bold text-3xl tracking-tighter text-white hover:opacity-80 transition-opacity select-none"
          >
            MS
          </a>

          {/* Centered Pill Navigation (pointer-events-auto) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <nav
              className={`flex items-center gap-1 p-1 bg-zinc-950/60 border rounded-full transition-all duration-300 backdrop-blur-md ${
                scrolled ? 'border-white/10 shadow-lg' : 'border-white/5'
              }`}
            >
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#home');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isHomeActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Home size={13} className={isHomeActive ? 'text-white' : 'text-zinc-400'} />
                <span className="hidden sm:inline">Home</span>
              </a>

              {/* About with Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    isAboutActive
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <User size={13} className={isAboutActive ? 'text-white' : 'text-zinc-400'} />
                  <span className="hidden sm:inline">About</span>
                  <ChevronDown size={11} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-zinc-950/95 border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-lg z-50"
                    >
                      <a
                        href="#journey"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('#journey');
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          activeSection === 'journey' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Compass size={12} />
                        <span>My Journey</span>
                      </a>
                      <a
                        href="#disciplines"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('#disciplines');
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          activeSection === 'disciplines' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Heart size={12} />
                        <span>Disciplines</span>
                      </a>
                      <a
                        href="#certifications"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick('#certifications');
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          activeSection === 'certifications' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Award size={12} />
                        <span>Certifications</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Skills */}
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#skills');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isSkillsActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Code size={13} className={isSkillsActive ? 'text-white' : 'text-zinc-400'} />
                <span className="hidden sm:inline">Skills</span>
              </a>

              {/* Work */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#projects');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isWorkActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Briefcase size={13} className={isWorkActive ? 'text-white' : 'text-zinc-400'} />
                <span className="hidden sm:inline">Work</span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isContactActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Mail size={13} className={isContactActive ? 'text-white' : 'text-zinc-400'} />
                <span className="hidden sm:inline">Contact</span>
              </a>
            </nav>
          </div>

          {/* Right Spacer to balance the layout */}
          <div className="w-10 h-10 hidden md:block"></div>
        </div>
      </header>
    </>
  );
}
