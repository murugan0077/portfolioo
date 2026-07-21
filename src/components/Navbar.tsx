/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Disciplines', href: '#disciplines' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 border-b border-border-soft backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="font-mono text-lg font-bold tracking-tight text-green-accent flex items-center"
          >
            <span className="text-txt-muted">&lt;</span>
            Murugan
            <span className="text-txt-muted">&nbsp;/&gt;</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 hover:text-txt-primary ${
                    isActive ? 'text-txt-primary' : 'text-txt-muted'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-accent"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Status Badge */}
          <div className="hidden sm:flex items-center space-x-2 bg-green-dim border border-green-accent/20 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-accent"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold text-green-accent uppercase tracking-wider">
              {personalInfo.status}
            </span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-txt-primary focus:outline-none focus:ring-1 focus:ring-green-accent p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] bg-bg-primary/95 backdrop-blur-lg z-45 lg:hidden flex flex-col justify-start p-8 pt-12 space-y-6 border-t border-border-soft"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`text-xl font-heading font-medium tracking-wide border-b border-border-soft pb-3 flex justify-between items-center ${
                    isActive ? 'text-green-accent' : 'text-txt-muted'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="font-mono text-xs">&lt;active&gt;</span>}
                </a>
              );
            })}

            {/* Mobile Status Badge */}
            <div className="pt-6 flex justify-center">
              <div className="flex items-center space-x-2 bg-green-dim border border-green-accent/20 px-4 py-2 rounded-full w-full justify-center">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-accent"></span>
                </span>
                <span className="font-mono text-xs font-semibold text-green-accent uppercase tracking-widest">
                  {personalInfo.status}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
