'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, label }: { value: number, label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="text-5xl md:text-7xl font-black text-[#0a0a0a]">
        <motion.span>{rounded}</motion.span><span className="text-[#f97316]">+</span>
      </div>
      <p className="text-[#6b6b6b] font-bold uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
}

export default function PortfolioStats() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 border-y border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <Counter value={10} label="Projects Delivered" />
        <Counter value={8} label="Weeks Avg Delivery" />
        <Counter value={100} label="Client Satisfaction %" />
      </div>
    </section>
  );
}
