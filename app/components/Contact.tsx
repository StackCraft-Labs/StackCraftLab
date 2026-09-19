'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

// ─── Info items inside the hero banner ───────────────────────────────────────
const INFO = [
  {
    label: 'Meet Us In Office',
    lines: ['Remote-first · India / Global'],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Our Email Address',
    lines: ['hello@stackcraftlab.com', ''],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Contact Numbers',
    lines: ['+91 96193 85422', '+91 70450 57733', '+91 97691 03246'],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay },
});

export default function Contact() {

  const pageTracked = useRef(false);
  const infoTracked = useRef(false);
  const infoRef = useRef<HTMLElement>(null);

  //track /contact page visit
  useEffect(() => {
    if (!pageTracked.current) {
      pageTracked.current = true;
      trackEvent('page_view_contact', {
        page: '/contact'
      });
    }
  }, []);

  // track when info cards section is seen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !infoTracked.current) {
          infoTracked.current = true;
          trackEvent('section_viewed', {
            section: 'contact_info_cards',
          });
        }
      },
      { threshold: 0.4 }
    );
    if (infoRef.current) observer.observe(infoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#e8e8e8] min-h-screen font-sans">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-[120px_180px_60px] bg-[#e8e8e8]">
        <motion.div
          {...fadeUp(0)}
          className="relative rounded-[24px] overflow-hidden p-8 sm:p-12 md:p-20 [background:radial-gradient(ellipse_at_0%_0%,rgba(88,28,135,0.40)_0%,transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(30,27,75,0.35)_0%,transparent_50%),#111116]"
        >
          {/* Decorative glow blobs */}
          <div className="absolute top-[-40px] left-[-40px] w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-purple-900/20 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none" />

          {/* Form Header */}
          <div className="relative z-[2] text-center mb-10 sm:mb-[60px]">
            <motion.p
              {...fadeUp(0.05)}
              className="text-[#f97316] text-xs sm:text-[13px] font-semibold tracking-[0.12em] uppercase mb-4 sm:mb-5"
            >
              Let&apos;s talk business
            </motion.p>
            <motion.h1
              {...fadeUp(0.12)}
              className="text-white text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.03em] max-w-[800px] mx-auto font-sans"
            >
              Ready to build something <span className="text-[#f97316]">remarkable?</span>
            </motion.h1>
          </div>

          <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,1fr)_560px] gap-12 xl:gap-20 relative z-[2] max-w-[1200px] mx-auto">
            {/* Left Copy */}
            <motion.div {...fadeUp(0.2)}>
              <div className="h-full flex flex-col justify-center text-center xl:text-left items-center xl:items-start">
                <h2 className="text-white text-[1.8rem] sm:text-[2rem] font-bold mb-6">
                  Don&apos;t Google <br className="hidden sm:block" />Design Questions
                </h2>
                <p className="text-white/60 text-base sm:text-[1.1rem] leading-[1.7] mb-8 sm:mb-12">
                  Your message goes directly to our founding team. We typically reply within a few hours —
                  no bots, no runaround, just real developers who care about your project.
                </p>

                {/* Social/Trust proof mini-list */}
                <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-center xl:items-start text-left">
                  <div className="flex gap-4">
                    <div className="text-green-500 font-bold">✅</div>
                    <p className="text-white text-sm sm:text-[15px]">Response in &lt; 2 hours</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-green-500 font-bold">✅</div>
                    <p className="text-white text-sm sm:text-[15px]">Direct Founder communication</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-green-500 font-bold">✅</div>
                    <p className="text-white text-sm sm:text-[15px]">No invoice surprises. Ever.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Container */}
            <motion.div {...fadeUp(0.3)}>
              <div className="bg-white/3 backdrop-blur-[20px] rounded-[24px] border border-white/10 p-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── INFO CARDS ─── */}
      <section ref={infoRef} className="px-6 py-12 sm:px-12 md:px-16 lg:px-24 xl:p-[40px_180px_140px] bg-[#e8e8e8]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFO.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => trackEvent('contact_info_click', {
                info_type: item.label,
              })}
              className="flex items-start gap-4 bg-white border border-[#d4d4d4] rounded-[16px] p-6 sm:p-7 text-left shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] bg-[#111116] flex items-center justify-center flex-shrink-0 text-white">
                {item.icon}
              </div>
              <div>
                <p className="text-[#0a0a0a] font-bold text-sm sm:text-[15px] mb-1.5">
                  {item.label}
                </p>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-[#6b6b6b] text-xs sm:text-sm leading-[1.6]">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
