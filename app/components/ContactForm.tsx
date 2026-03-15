'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContact } from '../actions/contact';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (state === 'error') setState('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    setErrorMessage('');

    const formData = new FormData(e.target as HTMLFormElement);
    const result = await submitContact(formData);

    if (result.error) {
      setErrorMessage(result.error);
      setState('error');
    } else if (result.success) {
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    }
  };

  if (state === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[16px] p-8 sm:p-[48px_40px] text-center border-[1.5px] border-[#e5e7eb]"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-900/8 flex items-center justify-center mx-auto mb-4 sm:mb-5">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#7c3aed" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[1.2rem] sm:text-[1.4rem] font-bold text-[#0e0e0e] mb-2">
          Message sent!
        </h3>
        <p className="text-[#6b7280] text-sm sm:text-[0.95rem] leading-[1.6]">
          We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-[16px] p-8 sm:p-[56px_48px] border-[1.5px] border-[#e5e7eb] font-sans">
      <form onSubmit={handleSubmit} noValidate>
        {/* Spam Prevention Honeypot */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* ── Row 1: Name + Email side-by-side ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-[13px] font-bold text-[#0a0a0a] ml-0.5">Full Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              required
              className="w-full px-4 py-[13px] text-sm text-[#111] bg-[#f9f9f9] border-[1.5px] border-[#e5e7eb] rounded-[10px] outline-none transition-all duration-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/12 focus:bg-white placeholder:text-[#9ca3af]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-[13px] font-bold text-[#0a0a0a] ml-0.5">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              required
              className="w-full px-4 py-[13px] text-sm text-[#111] bg-[#f9f9f9] border-[1.5px] border-[#e5e7eb] rounded-[10px] outline-none transition-all duration-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/12 focus:bg-white placeholder:text-[#9ca3af]"
            />
          </div>
        </div>

        {/* ── Row 2: Message textarea ── */}
        <div className="flex flex-col gap-2 mb-6 sm:mb-8">
          <label htmlFor="contact-message" className="text-[13px] font-bold text-[#0a0a0a] ml-0.5">How can we help?</label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project, goals, and timeline..."
            required
            rows={7}
            className="w-full px-4 py-[13px] text-sm text-[#111] bg-[#f9f9f9] border-[1.5px] border-[#e5e7eb] rounded-[10px] outline-none transition-all duration-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/12 focus:bg-white placeholder:text-[#9ca3af] resize-y min-h-[160px] leading-[1.6] font-sans"
          />
        </div>

        {/* ── Submit button & Error msg ── */}
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.button
            type="submit"
            disabled={state === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2.5 px-7 py-[13px] rounded-[10px] font-semibold text-[15px] tracking-[-0.01em] transition-colors duration-220 text-white ${
              state === 'sending' ? 'bg-[#f97316] cursor-wait' : 'bg-[#f97316] hover:bg-[#ea6c0a] cursor-pointer'
            }`}
          >
            {state === 'sending' ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send a Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </motion.button>
          
          {state === 'error' && (
            <p className="text-red-500 text-sm font-medium text-center max-w-[400px]">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
