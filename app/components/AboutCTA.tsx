'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 md:px-[180px] relative overflow-hidden">
      {/* Decorative side accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f97316]/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f97316]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 bg-[#f97316]/10 text-[#f97316] rounded-full text-sm font-bold tracking-wider uppercase mb-2">
            Let&apos;s build something together
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Ready to bring your <span className="text-[#f97316]">vision to life?</span>
          </h2>
          
          <p className="text-[#a3a3a3] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just a dev shop. We&apos;re your partners in building software that makes an impact. 
            No complex bureaucracy, just three dedicated experts at your service.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <button 
              data-cal-namespace="30min"
              data-cal-link="stackcraft-lab/30min"
              data-cal-config='{"layout":"month_view"}'
              className="w-full sm:w-auto group relative px-10 py-5 bg-[#f97316] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-[#0a0a0a] shadow-2xl hover:shadow-orange-500/30 cursor-pointer"
            >
              <span className="relative flex items-center justify-center gap-3">
                Book a Free Discovery Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <Link 
              href="/portfolio"
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center"
            >
              See our projects
            </Link>
          </motion.div>
          
          <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-[#525252] font-semibold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full" />
              Direct access to founders
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full" />
              Full transparency
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full" />
              Scalable code
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
