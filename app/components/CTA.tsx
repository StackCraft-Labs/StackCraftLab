'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  // track when CTA section is seen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'main_footer_cta',
          });
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] py-32 relative overflow-hidden font-sans border-t border-white/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500 opacity-5 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="space-y-6"
        >
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Stop planning. Start <span className="text-[#f97316]">shipping.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed max-w-[640px] mx-auto font-light">
            We turn your vision into a revenue-generating product in weeks, not months.
            <br className="hidden md:block" />
            <span className="text-white font-medium">Fixed team. Fixed scope. Zero surprises.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center mt-12 space-y-6"
        >
          {/* CTA Button */}
          <button
            data-cal-namespace="30min"
            data-cal-link="stackcraft-lab/30min"
            data-cal-config='{"layout":"month_view"}'
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#f97316] text-white rounded-full font-bold text-lg md:text-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-[#ea6c0a] shadow-[0_0_40px_rgba(249,115,22,0.2)] cursor-pointer"
            onClick={() => trackEvent('cta_click', {
              button: 'book_strategy_call',
              location: 'main_footer_cta'
            })}
          >
            <span className="relative flex items-center gap-3">
              Book a Free Strategy Call
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          {/* Trust Banner/Status */}
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium tracking-wide">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse outline outline-4 outline-green-500/20" />
            <span className="text-white/80">Available for new projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
