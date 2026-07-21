/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines';
import Certifications from './components/Certifications';
import Journey from './components/Journey';
import ExperienceEducation from './components/ExperienceEducation';
import Skills from './components/Skills';
import MarqueeTicker from './components/MarqueeTicker';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const sectionIds = ['home', 'disciplines', 'certifications', 'journey', 'skills', 'projects', 'contact'];
    
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          rootMargin: '-20% 0px -60% 0px' // Trigger when section occupies the main viewing zone
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="bg-bg-primary min-h-screen text-txt-primary font-sans antialiased selection:bg-green-accent selection:text-bg-primary">
          {/* Top navigation */}
          <Navbar activeSection={activeSection} />

          {/* Core content sections */}
          <main>
            <Hero />
            <Disciplines />
            <Certifications />
            <Journey />
            <ExperienceEducation />
            <Skills />
            <MarqueeTicker />
            <Projects />
            <Contact />
          </main>

          {/* Footer credentials */}
          <Footer />
        </div>
      )}
    </>
  );
}
