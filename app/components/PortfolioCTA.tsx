'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function PortfolioCTA() {

  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  // track when CTA section is seen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'portfolio_cta',
          });
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-32 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0a0a0a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#0a0a0a] leading-tight tracking-tight px-4">
            Ready to build your <span className="text-[#f97316]">next project?</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We love working with everyone, from start‑ups and challenger brands to global leaders.
            Let&apos;s start a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <button
            data-cal-namespace="30min"
            data-cal-link="stackcraft-lab/30min"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => trackEvent('cta_click', {
              button: 'book_call',
              location: 'portfolio_cta',
            })}
            className="group relative px-12 py-6 bg-[#0a0a0a] text-white rounded-full font-black text-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-[#f97316] shadow-2xl hover:shadow-orange-500/30 cursor-pointer"
          >
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white/10"
            />

            <span className="relative flex items-center gap-4">
              Book a Free Strategy Call
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-3 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-400 font-medium tracking-wide">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse outline outline-4 outline-green-500/20" />
            <span className="text-black/80">Available for new projects</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
