'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';
import Image from 'next/image';

const team = [
  {
    name: 'Akash Narkar',
    role: 'Lead Developer & Co‑founder',
    bio: 'Tech visionary focused on scalable cloud architecture and complex full-stack systems that don’t break under pressure.',
    image: '/akash.png',
  },
  {
    name: 'Omkar Potphode',
    role: 'Lead Developer & Co‑founder',
    bio: 'Front-end expert obsessed with pixel-perfect UI and high-performance animations. If it looks wrong on any screen, he fixes it.',
    image: '/omkar.png',
  },
  {
    name: 'Harsh Pandere',
    role: 'Product Strategist & Co‑founder',
    bio: 'Strategic thinker focused on product-market fit and making sure what we build actually solves the right problem.',
    image: '/Harsh.png', // Reusing placeholder for 3rd founder
  }
];

const containerVariants = {
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function AboutTeam() {

  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  //track section view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'about_team',
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f7f7f7] py-24 px-6 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto text-center space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-[#f97316] font-bold text-sm uppercase tracking-widest">The Team</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-[#0a0a0a]">The three people who will actually build your product.</h3>
        </div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => trackEvent('team_member_hover', {
                member_name: member.name,
                member_role: member.role,
              })}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d4d4d4] group"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle color overlay that fades on hover */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-[#0a0a0a]">{member.name}</h4>
                  <p className="text-[#f97316] font-semibold text-sm">{member.role}</p>
                </div>

                <p className="text-[#6b6b6b] leading-relaxed max-w-[320px]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
