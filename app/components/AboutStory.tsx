'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function AboutStory() {

  const sectionRef = useRef(null);
  const tracked = useRef(false);

  //track when story section is read
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'about_story',
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-[#f97316] font-bold text-sm uppercase tracking-widest">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
              Moving fast is easy. <br />
              <span className="text-[#f97316]">Moving fast in the right direction</span> is where most get lost.
            </h3>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-6 text-[#6b6b6b] text-lg leading-relaxed font-normal">
              <p>
                StackCraft Labs started two months ago. But the frustration behind it has been building for years. The three of us spent years in software — as freelancers, as developers inside companies, watching the same problems repeat.
              </p>
              <p>
                Founders getting burned by slow agencies. Projects delivered late. Code that couldn&apos;t scale past the first 100 users. Developers who disappeared after launch.
              </p>
              <p>
                We built this agency because we got tired of watching that happen and knowing we could do it better. So we stopped watching and started building.
              </p>
              <p className="font-bold text-[#0a0a0a] border-l-4 border-[#f97316] pl-6 py-2">
                We don&apos;t just write code. We ship products that founders can actually bet their businesses on.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-[#f7f7f7] p-8 rounded-xl border border-[#e2e2e2] shadow-sm space-y-6">
                <h4 className="text-xl font-bold text-[#0a0a0a]">Our Values</h4>
                <ul className="space-y-6">
                  <li className="space-y-2">
                    <div className="flex items-center gap-2 text-[#f97316]">
                      <span className="font-bold">✓</span>
                      <strong className="text-[#0a0a0a]">Radical Transparency</strong>
                    </div>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      No &quot;it depends&quot; without a real answer. You get straight answers, honest timelines and real numbers — even when they&apos;re not what you want to hear.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <div className="flex items-center gap-2 text-[#f97316]">
                      <span className="font-bold">✓</span>
                      <strong className="text-[#0a0a0a]">Founder‑Led Execution</strong>
                    </div>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      No junior hand-offs. You work directly with the people who founded this agency from day one to launch day.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <div className="flex items-center gap-2 text-[#f97316]">
                      <span className="font-bold">✓</span>
                      <strong className="text-[#0a0a0a]">Shipping Fast</strong>
                    </div>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      MVP in 6–8 weeks without cutting corners. We move fast because we&apos;ve done this enough times to know exactly what matters and what doesn&apos;t.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
