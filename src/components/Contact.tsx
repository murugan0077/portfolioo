/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending time
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Dismiss toast in 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden border-t border-border-soft">
      {/* Background glow blobs */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-green-accent/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-purple-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[3px] text-txt-muted">
            GET IN TOUCH
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-txt-primary tracking-tight">
            Let's work together.
          </h2>
          <p className="font-sans text-sm text-txt-muted max-w-xl">
            Have an exciting role, full-time opportunity, or system build in mind? Send an email or fill out the secure terminal below.
          </p>
        </div>

        {/* Form and info row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Cards (Stacked) - 5 Cols */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.01 }}
              className="group bg-bg-card border border-border-soft hover:border-border-hi hover:shadow-glow-green rounded-xl p-6 backdrop-blur-card transition-all duration-300 flex items-start space-x-4 cursor-pointer"
            >
              <div className="p-3 bg-green-dim rounded-xl border border-green-accent/20 text-green-accent select-none">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-txt-muted font-bold">Email</span>
                <h4 className="font-heading font-black text-base text-txt-primary mt-0.5 truncate select-text">
                  {personalInfo.email}
                </h4>
                <p className="font-sans text-xs text-txt-muted mt-1 select-none">Click to compose mail</p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              whileHover={{ scale: 1.01 }}
              className="group bg-bg-card border border-border-soft hover:border-border-hi hover:shadow-glow-purple rounded-xl p-6 backdrop-blur-card transition-all duration-300 flex items-start space-x-4 cursor-pointer"
            >
              <div className="p-3 bg-purple-dim rounded-xl border border-purple-accent/20 text-purple-accent select-none">
                <Phone size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-txt-muted font-bold">Phone</span>
                <h4 className="font-heading font-black text-base text-txt-primary mt-0.5 truncate select-text">
                  {personalInfo.phone}
                </h4>
                <p className="font-sans text-xs text-txt-muted mt-1 select-none">Click to place mobile call</p>
              </div>
            </motion.a>

            {/* Location Card */}
            <div className="bg-bg-card border border-border-soft hover:border-border-hi rounded-xl p-6 backdrop-blur-card transition-all duration-300 flex items-start space-x-4 select-none">
              <div className="p-3 bg-amber-dim rounded-xl border border-amber-accent/20 text-amber-accent">
                <MapPin size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-txt-muted font-bold">Location</span>
                <h4 className="font-heading font-black text-base text-txt-primary mt-0.5 select-text">
                  {personalInfo.location}
                </h4>
                <p className="font-sans text-xs text-txt-muted mt-1">Srivilliputtur, India (Remote Available)</p>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-bg-card border border-border-soft hover:border-border-hi rounded-xl p-6 backdrop-blur-card transition-all duration-300 flex items-start space-x-4 select-none">
              <div className="p-3 bg-green-dim rounded-xl border border-green-accent/20 text-green-accent">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-accent"></span>
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-txt-muted font-bold">Status</span>
                <h4 className="font-heading font-black text-base text-green-accent mt-0.5">
                  {personalInfo.status}
                </h4>
                <p className="font-sans text-xs text-txt-muted mt-1">Open to Full-Time, Remote & Freelance contracts.</p>
              </div>
            </div>

            {/* Social handles row */}
            <div className="pt-4 flex items-center space-x-4 select-none">
              <span className="font-mono text-[10px] uppercase tracking-wider text-txt-muted">Social Handles:</span>
              <div className="flex space-x-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-bg-card border border-border-soft hover:border-green-accent/30 hover:text-green-accent rounded-lg transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-bg-card border border-border-soft hover:border-green-accent/30 hover:text-green-accent rounded-lg transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form Card - 7 Cols */}
          <div className="lg:col-span-7 bg-bg-card border border-border-soft rounded-xl p-8 backdrop-blur-card hover:border-border-hi transition-all duration-300">
            <h3 className="font-heading font-black text-lg text-txt-primary mb-6 flex items-center justify-between border-b border-border-soft pb-4 select-none">
              <span>Secure Dispatch Terminal</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-txt-dim">SSL_ENCRYPTED</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-txt-muted">
                    Your Name <span className="text-green-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-bg-primary text-txt-primary text-xs md:text-sm font-sans border border-border-soft rounded-lg px-4 py-3 focus:outline-none focus:border-green-accent/50 focus:ring-1 focus:ring-green-accent/20 transition-all duration-200 disabled:opacity-50"
                    placeholder="Enter name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-txt-muted">
                    Your Email <span className="text-green-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-bg-primary text-txt-primary text-xs md:text-sm font-sans border border-border-soft rounded-lg px-4 py-3 focus:outline-none focus:border-green-accent/50 focus:ring-1 focus:ring-green-accent/20 transition-all duration-200 disabled:opacity-50"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-wider text-txt-muted">
                  Message Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-bg-primary text-txt-primary text-xs md:text-sm font-sans border border-border-soft rounded-lg px-4 py-3 focus:outline-none focus:border-green-accent/50 focus:ring-1 focus:ring-green-accent/20 transition-all duration-200 disabled:opacity-50"
                  placeholder="Enter subject heading"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-txt-muted">
                  Detailed Inquiry <span className="text-green-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="bg-bg-primary text-txt-primary text-xs md:text-sm font-sans border border-border-soft rounded-lg px-4 py-3 focus:outline-none focus:border-green-accent/50 focus:ring-1 focus:ring-green-accent/20 transition-all duration-200 disabled:opacity-50 resize-none"
                  placeholder="Draft your query details here..."
                />
              </div>

              {/* Submit button with clip path */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
                className="w-full bg-green-accent text-bg-primary font-mono text-xs md:text-sm font-bold py-3.5 hover:bg-green-accent/95 transition-all duration-200 cursor-pointer shadow-lg shadow-green-accent/10 hover:shadow-green-accent/20 flex items-center justify-center space-x-2 border border-green-accent disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>TRANSMITTING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>SEND MESSAGE TERMINAL</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* SUCCESS TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-bg-card border border-green-accent/30 rounded-xl p-4 shadow-xl backdrop-blur-card flex items-center space-x-3"
          >
            <div className="flex h-3 w-3 flex-shrink-0 select-none">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-accent"></span>
            </div>
            <div className="flex-1 text-xs">
              <p className="font-mono font-bold text-green-accent">MESSAGE RECEIVED!</p>
              <p className="font-sans text-txt-muted mt-0.5">Thank you, Murugan S will get back to you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
