'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function PortfolioHero() {

  useEffect(() => {
    trackEvent('page_view_portfolio', {
      page: '/portfolio'
    });
  }, []);

  return (
    <section className="relative w-full bg-[#e8e8e8] pt-32 sm:pt-[180px] pb-16 sm:pb-20 overflow-hidden px-6 sm:px-12 md:px-[180px] font-sans">
      <div className="w-full mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#0a0a0a] tracking-tight mb-4 sm:mb-8">
            Our <span className="text-[#f97316]">Work</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          One project in. Here&apos;s exactly what we built, how we built it, and what the client got. Quality over quantity — every time.
        </motion.p>
      </div>

      {/* Decorative Floating Dots/Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#0a0a0a] rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#f97316] rounded-full" />
      </div>
      {/* Continuity Bridge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-[#0a0a0a]/20 to-transparent" />
    </section>
  );
}
