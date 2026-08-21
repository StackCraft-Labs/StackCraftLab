'use client';

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { trackEvent } from '@/lib/analytics';

const PROJECTS = [
  {
    image: '/portfolio/podcast-platform.png',
    title: 'Podcast platform',
    description: 'Engineering a high-performance content engine for India\'s fastest growing podcast network. Built for scale, speed, and massive listener engagement.',
    tags: ['Web App'],
    link: 'https://www.dooriginals.com/'
  },
  {
    image: '/portfolio/github-switch.png',
    title: 'Go Ahead',
    description: 'The ultimate dev-productivity tool for seamless SSH key management. Switch between multiple GitHub accounts instantly without terminal frustration.',
    tags: ['SaaS', 'VS Code extension', 'Dev tool'],
    isComingSoon: true
  }
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  // ── Track when homepage portfolio section is seen 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'portfolio_homepage',
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Continuity Bridge - Vertical Connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#0a0a0a]/20 to-transparent z-10" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-20">

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-[#f97316] font-bold text-sm uppercase tracking-widest">Our Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0a0a] tracking-tight">
            Recent Builds. Real <span className="text-[#f97316]">Results.</span>
          </h3>
          <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto font-medium">
            Here&apos;s what we&apos;ve shipped so far.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  if (!project.isComingSoon) {
                    trackEvent('portfolio_item_click', {
                      project_name: project.title,
                      position: index + 1,
                      source: 'homepage',
                    });
                  }
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
