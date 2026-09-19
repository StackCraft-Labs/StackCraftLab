'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

const milestones = [
  {
    date: 'Jan 2026',
    title: 'The Foundation',
    description: 'Akash, Omkar, and Harsh officially launch StackCraft Labs with a shared mission: to build software that actually matters.',
  },
  {
    date: 'February 2026',
    title: 'Our First Client',
    description: 'Partnered with DoOriginals Podcast Network to engineer a high-performance content platform that scales with their skyrocketing listenership.',
  },
  {
    date: 'March 2026',
    title: 'Proprietary SaaS Suite',
    description: 'Architecting high-conversion internal products across E-commerce, AI, and developer tooling—proving our tech stack in the real world.',
  }
];

export default function AboutTimeline() {
  const containerRef = useRef(null);
  const sectionTracked = useRef(false);
  const scrollTracked = useRef(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  //track when timeline is viewed
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionTracked.current) {
          sectionTracked.current = true;
          trackEvent('section_viewed', {
            section: 'about_roadmap',
          });
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // track when user scrolls through full timeline 
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v >= 0.9 && !scrollTracked.current) {
        scrollTracked.current = true;
        trackEvent('timeline_completed', {
          section: 'about_roadmap',
        });
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="w-full bg-white py-24 sm:py-32 px-6 md:px-12 relative overflow-hidden font-sans">
      <div className="max-w-[1000px] mx-auto space-y-24 sm:space-y-36 relative">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-[#0a0a0a] font-bold text-sm uppercase tracking-widest">Our Roadmap</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-[#0a0a0a]">Tracing our momentum.</h3>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-[33px] md:right-[calc(50%-1px)] md:left-auto w-[2px] h-full bg-[#e2e2e2] top-0 bottom-0" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[33px] md:right-[calc(50%-1px)] md:left-auto w-[2px] h-full bg-[#f97316] top-0 z-10"
          />

          <div className="space-y-24 py-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center`}
              >
                {/* Milestone Node */}
                <div className="absolute left-8 md:left-[calc(50%-8px)] w-4 h-4 rounded-full bg-white border-2 border-[#f97316] z-20" />

                {/* Content Block */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                  <div className="space-y-6">
                    <span className="text-[#f97316] font-bold font-mono text-sm">{milestone.date}</span>
                    <h4 className="text-2xl font-bold text-[#0a0a0a]">{milestone.title}</h4>
                    <p className="text-[#6b6b6b] leading-relaxed max-w-[400px] md:mx-auto lg:mx-0 text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
