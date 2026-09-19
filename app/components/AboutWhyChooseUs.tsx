'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

const reasons = [
  {
    title: 'Tech Stack Mastery',
    description: 'We build with Next.js, Supabase, and Tailwind – so your app ships fast and scales without headaches. No outdated tech, ever.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: 'Founder‑Led Execution',
    description: 'Your project is never handed off to a junior. You work directly with the leads who founded the agency. High-stakes communication.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </svg>
    )
  },
  {
    title: 'Fast Delivery',
    description: 'From idea to MVP in 6–8 weeks, with weekly demos every Friday. We move as fast as your market does.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    title: 'No‑Surprise Pricing',
    description: 'Fixed‑price quotes, transparent milestones, and zero hidden fees. You know exactly what you’re paying for before we start.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    )
  },
  {
    title: 'Post‑Launch Support',
    description: '30 days included, zero extra cost for bug fixes and deployment issues. We don’t disappear after you go live.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: 'Radical Transparency',
    description: "You own the code from day one. No invoice surprises. Ever. You track progress in real-time, and you're always in control of your roadmap.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

interface AdvantageCardProps {
  reason: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

function AdvantageCard({ reason }: AdvantageCardProps) {
  const hoverTracked = useRef(false);
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      onHoverStart={() => {
        if (!hoverTracked.current) {
          hoverTracked.current = true;
          trackEvent('advantage_card_hover', {
            card_title: reason.title,
          })
        }
      }}
      className="bg-[#f7f7f7] p-10 rounded-xl border border-[#d2d2d2] flex flex-col items-start space-y-6 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] text-white flex items-center justify-center group-hover:bg-[#f97316] transition-colors">
        {reason.icon}
      </div>
      <div className="space-y-3">
        <h4 className="text-xl font-bold text-[#0a0a0a]">{reason.title}</h4>
        <p className="text-[#6b6b6b] leading-relaxed text-base font-normal">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutWhyChooseUs() {

  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  //track section view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'about_advantage',
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-6 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-20">
        {/* Header */}
        <div className="max-w-[800px] space-y-4">
          <h2 className="text-[#0a0a0a] font-bold text-sm uppercase tracking-widest text-left">The Advantage</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-[#0a0a0a]">Why founders choose <span className="text-[#f97316]">StackCraft Labs</span> over freelancers.</h3>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <AdvantageCard key={reason.title} reason={reason} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
