'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  eg: string;
}

export default function ServiceCard({ icon, title, description, eg }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Mobile / Tablet Static Card (Directly showing description and examples) */}
      <div className="xl:hidden relative w-full rounded-[12px] border border-[#e0e0e0] bg-white p-8 flex flex-col gap-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-sans mb-4">
        <div className="absolute left-0 top-0 w-[4px] h-full bg-[#f97316] z-[3] rounded-l-[3px]" />
        
        <div className="flex items-center text-[#f97316]">
          {icon}
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-[1.25rem] font-bold text-[#0a0a0a] tracking-tight leading-tight mb-3 font-sans m-0">
            {title}
          </h3>
          <p className="text-[0.95rem] text-[#4a4a4a] leading-relaxed mb-3 font-sans m-0">
            {description}
          </p>
          <p className="text-[0.85rem] text-[#f97316] font-medium italic opacity-80 font-sans m-0">
            {eg}
          </p>
        </div>
      </div>

      {/* Desktop Animated Card */}
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="hidden xl:block relative w-full h-[340px] rounded-[12px] border border-[#e0e0e0] bg-white cursor-pointer overflow-hidden transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group font-sans"
      >
        {/* Orange left border — grows on hover */}
        <motion.div
          initial={{ height: '0%' }}
          animate={{ height: hovered ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-0 top-0 w-[4px] bg-[#f97316] z-[3] rounded-l-[3px]"
        />

        {/* Icon and Arrow Zone */}
        <div className="absolute top-8 left-8 flex items-center gap-4 z-[2]">
          <motion.div
            animate={{ 
              scale: hovered ? 1.15 : 1,
              rotate: hovered ? 8 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="origin-center flex items-center"
          >
            {icon}
          </motion.div>

          {/* Arrow — slides in and scales up */}
          <div className="flex items-center overflow-hidden">
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, x: -25, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -25, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <svg width="34" height="34" fill="none" stroke="#f97316" strokeWidth="3.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Text content block */}
        <motion.div
          className="absolute left-8 right-8 bottom-8 flex flex-col"
          animate={{ y: hovered ? -20 : 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Title — always visible */}
          <motion.h3
            className="text-[1.25rem] font-bold text-[#0a0a0a] tracking-tight m-0 leading-tight font-sans"
            layout
          >
            {title}
          </motion.h3>

          {/* Expandable Content */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3, delay: 0.15 }
                }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  {/* Description */}
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-[0.95rem] text-[#4a4a4a] leading-relaxed mb-3 font-sans"
                  >
                    {description}
                  </motion.p>

                  {/* Examples */}
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-[0.85rem] text-[#f97316] font-medium italic opacity-80 font-sans"
                  >
                    {eg}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}