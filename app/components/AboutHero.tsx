'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function AboutHero() {

  // track /about page visit
  useEffect(() => {
    trackEvent('page_view_about', { page: '/about' });
  }, []);

  return (
    <section className="relative w-full bg-[#e8e8e8] pt-24 sm:pt-[108px] pb-16 sm:pb-24 overflow-hidden px-6 sm:px-12 md:px-[180px] font-sans">
      <div className="w-full mx-auto text-center max-w-[900px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center space-y-10"
        >
          {/* Content */}
          <div className="flex flex-col space-y-8 items-center">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#0a0a0a] leading-[1.1] tracking-tight"
            >
              Meet the team behind your <span className="text-[#f97316]">next big idea.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-[#6b6b6b] max-w-[800px] leading-relaxed font-medium"
            >
              We&apos;re three developers who build, ship and stand behind every line of code. No handoffs. No excuses. No disappearing after launch.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6 pt-4"
            >
              <button
                data-cal-namespace="30min"
                data-cal-link="stackcraft-lab/30min"
                data-cal-config='{"layout":"month_view"}'
                className="w-full sm:w-auto px-10 py-5 bg-[#f97316] text-white rounded-full font-semibold hover:bg-[#0a0a0a] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group cursor-pointer"
                onClick={() => trackEvent('cta_click', {
                  button: 'book_strategy_call',
                  location: 'about_hero'
                })}
              >
                Book a Free Strategy Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <Link
                href="/portfolio"
                className="text-[#0a0a0a] font-semibold hover:text-[#f97316] transition-all duration-300 flex items-center gap-2 group text-lg"
                onClick={() => {
                  trackEvent('cta_click', {
                    button: 'view_work',
                    location: 'about_hero'
                  })
                }}
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />
      {/* Continuity Bridge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-[#0a0a0a]/20 to-transparent" />
    </section>
  );
}
