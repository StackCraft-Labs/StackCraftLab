'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioCTA() {
  return (
    <section className="w-full bg-white py-32 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0a0a0a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
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
          <p className="mt-6 text-sm text-[#6b6b6b] font-medium tracking-wide">ZERO COMMITMENT · 24H RESPONSE TIME</p>
        </motion.div>
      </div>
    </section>
  );
}
