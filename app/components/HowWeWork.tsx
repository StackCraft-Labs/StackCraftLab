'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const STEPS = [
  {
    title: 'Discovery & Strategy',
    description: 'We map out your vision, define core features and create a clear product roadmap. No Fluff, just what moves the needle',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" strokeOpacity="1" />
        <path d="M21 21L16.65 16.65" />
        <path d="M11 8V11L13 13" />
      </svg>
    ),
  },
  {
    title: 'Design & Prototype',
    description: "UI / UX design, user flows and clickable prototype you see exactly what we're building before we write a single line of code",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 1.5" />
        <path d="M7 11c.7-1.3 2.1-2 3.5-2" />
      </svg>
    ),
  },
  {
    title: 'Development & testing',
    description: 'We build in weekly sprints with demos every friday. You track progress in real-time, not after 3 months of silence',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M12 4.5l-2 15" />
      </svg>
    ),
  },
  {
    title: 'Launch & support',
    description: "Deployment, testing , and 30 days of post-launch support included. We don't disappear after you go live",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Mobile & Tablet Version (Static Stack) */}
      <section className="lg:hidden w-full bg-[#0a0a0a] font-sans py-24 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0 text-center pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff05_1px,_transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How <span className="text-[#f97316]">We Work</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-4xl mx-auto font-light leading-relaxed">
              A clear 4-step process from first call to launch. <br className="hidden sm:block" />
              <span className="text-white font-medium">Fixed scope, fixed price, fixed timeline</span> delivered in 6-8 weeks
            </p>
          </div>

          <div className="flex flex-col gap-6 relative">
            {/* Outline connection line on desktop/mobile left side */}
            <div className="absolute left-[33px] sm:left-[35px] top-0 bottom-0 w-[1px] bg-white/10 z-0 hidden sm:block" />

            {STEPS.map((step, index) => (
              <div key={index} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col group relative overflow-hidden backdrop-blur-sm z-10 shadow-lg">
                <div className="absolute left-0 top-0 w-[4px] h-full bg-[#f97316]" />
                
                <div className="mb-6 text-white/90 transition-colors duration-500">
                  <div className="p-1 inline-block text-[#f97316]">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-baseline gap-3">
                  <span className="text-[#f97316] text-lg font-mono font-bold opacity-80">{index + 1}.</span>
                  <span className="tracking-tight">{step.title}</span>
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px] font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Version (Animated Scroll) */}
      <section ref={containerRef} className="hidden lg:block relative h-[400vh] bg-[#0a0a0a] font-sans">
        {/* Continuity Bridge - Vertical Connector */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#f7f7f7] to-transparent z-10" />
  
        {/* Sticky Content Wrapper */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
  
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 z-0 text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[700px] bg-purple-600/5 blur-[180px] pointer-events-none rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff05_1px,_transparent_1px)] bg-[size:48px_48px]" />
          </div>
  
          <div className="relative z-10 w-full px-24 max-w-[1600px] mx-auto pt-24">
            {/* Header */}
            <div className="text-center mb-16 space-y-6">
              <motion.h2
                className="text-7xl font-bold text-white tracking-tight"
              >
                How <span className="text-[#f97316]">We Work</span>
              </motion.h2>
              <p className="text-gray-400 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                A clear 4-step process from first call to launch. <br />
                <span className="text-white font-medium">Fixed scope, fixed price, fixed timeline</span> delivered in 6-8 weeks
              </p>
            </div>
  
            {/* Cards Grid */}
            <div className="grid grid-cols-4 w-full border border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden">
              {STEPS.map((step, index) => {
                const start = index * 0.25;
                
                const opacity = useTransform(smoothProgress, [start, start + 0.15], [0, 1]);
                const y = useTransform(smoothProgress, [start, start + 0.2], [50, 0]);
                const borderScale = useTransform(smoothProgress, [start + 0.05, start + 0.25], [0, 1]);
  
                return (
                  <motion.div
                    key={index}
                    style={{ opacity, y }}
                    className="relative p-12 min-h-[420px] flex flex-col group border-r border-white/5 last:border-r-0"
                  >
                    {index > 0 && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-white/5 z-0" />
                    )}
  
                    <motion.div
                      style={{ scaleY: borderScale }}
                      className="absolute left-0 top-0 w-[3px] h-full bg-[#f97316] origin-top z-20"
                    />
  
                    <div className="flex flex-col h-full relative z-30">
                      <div className="mb-10 text-white/90 group-hover:text-[#f97316] transition-colors duration-500">
                        <div className="p-1 border-white/10 inline-block transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          {step.icon}
                        </div>
                      </div>
  
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-baseline gap-3 text-left">
                        <span className="text-[#f97316] text-xl font-mono opacity-80">{index + 1}.</span>
                        <span className="tracking-tight">{step.title}</span>
                      </h3>
  
                      <p className="text-gray-400 leading-relaxed text-[11pt] font-normal group-hover:text-gray-200 transition-colors duration-500 text-left">
                        {step.description}
                      </p>
                    </div>
  
                    <motion.div
                      style={{ opacity }}
                      className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
  
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 w-full justify-center">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap">Scroll to Step</span>
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden flex-shrink-0">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-[#f97316] origin-left"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

