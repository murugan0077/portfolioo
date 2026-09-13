/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Instagram, ArrowUpRight, ArrowUp, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    title: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setToast({
        show: true,
        type: 'error',
        title: 'ACCESS KEY REQUIRED',
        message: 'Please add your free Web3Forms Access Key to .env to receive messages directly to your email.',
      });
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 6000);
      return;
    }

    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const botcheck = (formElement.elements.namedItem('botcheck') as HTMLInputElement)?.checked;
      if (botcheck) {
        // Silently ignore bots
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject ? `${formData.subject} - Portfolio Contact` : `New Message from ${formData.name} - Portfolio`,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setToast({
          show: true,
          type: 'success',
          title: 'MESSAGE SENT!',
          message: "Thank you! Your message has been sent directly to Murugan's inbox.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToast({
          show: true,
          type: 'error',
          title: 'SEND FAILED',
          message: data.message || 'Could not deliver your message. Please try again or email directly.',
        });
      }
    } catch {
      setToast({
        show: true,
        type: 'error',
        title: 'NETWORK ERROR',
        message: 'Failed to send message. Please check your internet connection or email directly.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  const handleBack = () => {
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-8 bg-[#030303] relative overflow-hidden border-t border-zinc-900 flex flex-col items-center">

      {/* "<- Back" Button in the Top Left */}
      {/* <button 
        onClick={handleBack}
        className="absolute top-10 left-6 md:left-12 flex items-center gap-2 px-4 py-2 border border-white/5 bg-[#0a0a0c]/85 hover:bg-zinc-900 rounded-full text-xs font-mono tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer z-30 shadow-md"
      >
        &larr; Back
      </button> */}

      {/* Massive Scrolling Text Ticker in the Background */}
      <div className=" top-[8%] left-0 w-full pointer-events-none z-0 opacity-95 overflow-hidden flex flex-col gap-4 select-none">
        <div className="animate-marquee-left flex whitespace-nowrap text-zinc-800 text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
          <span>LET'S BUILD SOMETHING • AVAILABLE FOR OPPORTUNITY • LET'S BUILD SOMETHING • AVAILABLE FOR OPPORTUNITY •&nbsp;</span>
        </div>
        <div className="animate-marquee-right flex whitespace-nowrap text-zinc-800 text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
          <span>CLEAN CODE & INTELLIGENCE • CRAFTING SOLUTIONS • CLEAN CODE & INTELLIGENCE • CRAFTING SOLUTIONS •&nbsp;</span>
        </div>
      </div>

      {/* Content Layout Grid */}
      <div className="max-w-6xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 mt-20">

        {/* LEFT COLUMN: Premium Lanyard ID Card Badge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">

          {/* Lanyard slot connection */}
          <div className="w-12 h-3.5 bg-zinc-900 border border-zinc-800 rounded-full mb-[-8px] z-20 shadow-inner" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-[290px] bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden flex flex-col items-center select-none"
          >
            {/* Top Corner Green accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Card Header */}
            <div className="w-full flex justify-between items-center pb-4 border-b border-zinc-100">
              <span className="font-logo italic font-black text-sm tracking-tight text-zinc-800">
                MURUGAN S
              </span>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[8px] font-bold text-emerald-700 tracking-wider uppercase">ONLINE</span>
              </div>
            </div>

            {/* Profile Avatar Frame */}
            <div className="relative w-28 h-28 mx-auto mt-6 rounded-full border-2 border-emerald-500 p-1.5 shadow-md">
              <img
                src="/developer_avatar.png"
                className="w-full h-full object-cover rounded-full"
                alt="Murugan S"
              />
            </div>

            {/* Name & Title */}
            <div className="text-center mt-4">
              <h4 className="font-heading font-black text-lg text-zinc-900 tracking-tight">
                {personalInfo.name}
              </h4>
              <p className="font-mono text-[9px] font-bold text-emerald-600 tracking-widest uppercase mt-0.5">
                FULL STACK & AI DEVELOPER
              </p>
            </div>

            {/* Info Table */}
            <div className="w-full border border-zinc-200 bg-zinc-50/50 rounded-xl p-3.5 mt-6 space-y-2 text-left font-mono text-[9px] text-zinc-700">
              <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                <span className="text-zinc-400 uppercase tracking-wider">EMAIL :</span>
                <span className="font-semibold select-text text-zinc-800 truncate max-w-[150px]">
                  {personalInfo.email}
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                <span className="text-zinc-400 uppercase tracking-wider">PHONE :</span>
                <span className="font-semibold select-text text-zinc-800">
                  {personalInfo.phone}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 uppercase tracking-wider">LOC :</span>
                <span className="font-semibold text-zinc-800">
                  {personalInfo.location.split(',')[0]}, India
                </span>
              </div>
            </div>

            {/* Barcode representation */}
            <div className="flex justify-center items-end gap-[2px] h-7 mt-6 w-full opacity-80">
              <div className="w-[2px] h-full bg-black" />
              <div className="w-[1px] h-full bg-black" />
              <div className="w-[3px] h-[85%] bg-black" />
              <div className="w-[1px] h-full bg-black" />
              <div className="w-[2px] h-[85%] bg-black" />
              <div className="w-[4px] h-full bg-black" />
              <div className="w-[1px] h-full bg-black" />
              <div className="w-[3px] h-[85%] bg-black" />
              <div className="w-[2px] h-full bg-black" />
              <div className="w-[1px] h-[85%] bg-black" />
              <div className="w-[4px] h-full bg-black" />
              <div className="w-[2px] h-[85%] bg-black" />
              <div className="w-[1px] h-full bg-black" />
              <div className="w-[3px] h-full bg-black" />
              <div className="w-[2px] h-[85%] bg-black" />
              <div className="w-[1px] h-full bg-black" />
              <div className="w-[2px] h-full bg-black" />
            </div>
            <div className="text-center font-mono text-[7px] text-zinc-400 mt-1.5 tracking-[0.2em]">
              MS-8778987102-2026
            </div>

          </motion.div>
        </div>

        {/* RIGHT COLUMN: Modern Clean Contact Form */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-8 select-none">
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none uppercase">
              LET'S TALK
            </h2>
            <p className="font-sans text-sm text-zinc-400 mt-2">
              Have an Idea? Let's build something extraordinary together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Bot Protection Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Name */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="border-b border-zinc-800 bg-transparent text-white px-0 py-3 focus:border-emerald-500 focus:outline-none transition-colors w-full font-sans text-sm placeholder:text-zinc-700 disabled:opacity-50"
                placeholder="ENTER NAME"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="border-b border-zinc-800 bg-transparent text-white px-0 py-3 focus:border-emerald-500 focus:outline-none transition-colors w-full font-sans text-sm placeholder:text-zinc-700 disabled:opacity-50"
                placeholder="ENTER EMAIL ADDRESS"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="subject" className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className="border-b border-zinc-800 bg-transparent text-white px-0 py-3 focus:border-emerald-500 focus:outline-none transition-colors w-full font-sans text-sm placeholder:text-zinc-700 disabled:opacity-50"
                placeholder="ENTER TOPIC OR PROJECT TYPE"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                TELL ME ABOUT YOUR PROJECT...
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                disabled={isSubmitting}
                className="border-b border-zinc-800 bg-transparent text-white px-0 py-3 focus:border-emerald-500 focus:outline-none transition-colors w-full font-sans text-sm placeholder:text-zinc-700 disabled:opacity-50 resize-none"
                placeholder="WRITE YOUR ENQUIRY HERE..."
              />
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-6 border-t border-zinc-900 select-none">

              {/* Ready to send / Submit trigger */}
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                    READY TO SEND
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-heading font-black text-2xl sm:text-3xl text-white hover:text-emerald-400 tracking-tight transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>

                {/* Submitting Circle Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-12 h-12 rounded-full bg-white text-black hover:bg-emerald-400 hover:text-black flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50 transform hover:scale-105"
                  aria-label="Submit message"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <ArrowUpRight size={18} />
                  )}
                </button>
              </div>

              {/* Scroll back to top circle button */}
              <button
                type="button"
                onClick={handleBack}
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer transform hover:scale-105"
                title="Back to Top"
              >
                <ArrowUp size={18} />
              </button>

            </div>
          </form>
        </div>

      </div>

      {/* Infinite Horizontal Social Handles Marquee */}
      <div className="w-full overflow-hidden border-t border-b border-zinc-900/50 py-6 bg-zinc-950/20 my-16 select-none">
        <div className="animate-marquee-left flex items-center gap-12 whitespace-nowrap text-zinc-800 text-xl sm:text-2xl font-black uppercase tracking-widest">
          <span>in LINKEDIN • @ INSTAGRAM • ✉ EMAIL • ☏ PHONE • ⚡ DISCORD • github GITHUB •&nbsp;</span>
          <span>in LINKEDIN • @ INSTAGRAM • ✉ EMAIL • ☏ PHONE • ⚡ DISCORD • github GITHUB •&nbsp;</span>
          <span>in LINKEDIN • @ INSTAGRAM • ✉ EMAIL • ☏ PHONE • ⚡ DISCORD • github GITHUB •&nbsp;</span>
        </div>
      </div>

      {/* Footer Pill Container */}
      <div className="max-w-4xl w-full px-6 relative z-10 flex flex-col items-center">
        <div className="w-full bg-[#08080a]/90 border border-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl relative select-none">

          {/* Left info block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="font-logo italic font-black text-base tracking-tight text-white">
                Murugan S
              </span>
              <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[7px] font-bold text-emerald-400 tracking-wider">Active Status</span>
              </div>
            </div>
            <p className="font-sans text-[10px] text-zinc-500 font-semibold mt-1">
              © 2026 • Made with ❤️ by Murugan S
            </p>
            <p className="font-mono text-[8px] text-zinc-600 tracking-wider uppercase">
              I Love You 3000
            </p>
          </div>

          {/* Right socials & scroll actions */}
          <div className="flex flex-col items-center md:items-end gap-3.5">
            <div className="flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={13} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={13} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={13} />
              </a>
            </div>

            <button
              onClick={handleBack}
              className="text-[10px] font-mono tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors uppercase cursor-pointer"
            >
              Back to Top &uarr;
            </button>
          </div>

          {/* Centered micro-location pill at the bottom edge */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-[#0d0d11] border border-zinc-800 rounded-full px-4 py-1 text-[8px] font-mono text-zinc-500 tracking-wider shadow-md">
            Srivilliputtur, Tamil Nadu, India
          </div>

        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-50 max-w-sm bg-zinc-900 border rounded-xl p-4 shadow-2xl backdrop-blur-md flex items-center space-x-3 select-none ${
              toast.type === 'success' ? 'border-emerald-500/30' : 'border-rose-500/30'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                toast.type === 'success'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-rose-500/10 text-rose-400'
              }`}
            >
              {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            </div>
            <div className="flex-1 text-xs">
              <p className="font-mono font-bold text-white uppercase tracking-wider">{toast.title}</p>
              <p className="font-sans text-zinc-400 mt-0.5">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
