'use client';

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

export default function PortfolioProjects() {
  return (
    <section className="w-full bg-[#f7f7f7] pt-20 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

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
                      source: 'portfolio_page',
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
