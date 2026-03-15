'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-[#e2e2e2] last:border-b-0 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-center justify-between text-left group transition-all"
      >
        <h2 className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#f97316]' : 'text-[#0a0a0a]'}`}>
          {question}
        </h2>
        <div className={`relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500 ${isOpen ? 'bg-[#f97316] border-[#f97316] rotate-180' : 'border-[#d4d4d4]'}`}>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={isOpen ? '#fff' : '#0a0a0a'} 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-8 pr-4 sm:pr-12">
              <p className="text-[#6b6b6b] text-base sm:text-lg leading-relaxed font-normal">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
