'use client';

import { motion, useAnimate } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

// ─────────────────────────────────────────────────────────────────────────────
// FlipLink — staggered letter wave on hover (Framer-style)
// ─────────────────────────────────────────────────────────────────────────────
const STAGGER = 0.03;   // seconds between each letter
const DURATION = 0.28;   // transition duration per letter
const EASE = [0.4, 0, 0.2, 1] as const;

const topVariants = { idle: { y: '0%' }, hovered: { y: '-100%' } };
const bottomVariants = { idle: { y: '100%' }, hovered: { y: '0%' } };

function FlipLink({ children }: { children: string }) {
  const chars = children.split('');

  return (
    <motion.span
      initial="idle"
      whileHover="hovered"
      className="inline-flex overflow-hidden relative h-[1.2em] leading-[1.2] align-bottom cursor-pointer"
    >
      {/* ── TOP ROW — slides UP out on hover ── */}
      <span aria-hidden className="inline-flex">
        {chars.map((ch, i) => (
          <motion.span
            key={`t-${i}`}
            variants={topVariants}
            transition={{ duration: DURATION, ease: EASE, delay: i * STAGGER }}
            className="inline-block whitespace-pre"
          >
            {ch}
          </motion.span>
        ))}
      </span>

      {/* ── BOTTOM ROW — slides UP into view on hover ── */}
      <span
        aria-hidden
        className="inline-flex absolute left-0 bottom-0"
      >
        {chars.map((ch, i) => (
          <motion.span
            key={`b-${i}`}
            variants={bottomVariants}
            transition={{ duration: DURATION, ease: EASE, delay: i * STAGGER }}
            className="inline-block whitespace-pre"
          >
            {ch}
          </motion.span>
        ))}
      </span>

      {/* Screen-reader only text */}
      <span className="absolute opacity-0 pointer-events-none">
        {children}
      </span>
    </motion.span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DraggableShape
// ─────────────────────────────────────────────────────────────────────────────
interface ShapeProps {
  src: string;
  alt: string;
  size: number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  floatDuration?: number;
  floatDelay?: number;
}

function DraggableShape({
  src, alt, size, top, right, bottom, left,
  floatDuration = 4, floatDelay = 0,
}: ShapeProps) {
  const [scope, animate] = useAnimate();

  async function handleDragEnd() {
    await animate(
      scope.current,
      { x: 0, y: 0 },
      { type: 'spring', stiffness: 320, damping: 24, mass: 0.9 },
    );
  }

  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      style={{ top, right, bottom, left, width: size, height: size }}
      animate={{ y: [0, -18, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
        repeatType: 'loop',
      }}
    >
      <motion.div
        ref={scope}
        drag
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        whileDrag={{
          scale: 1.1,
          filter: 'drop-shadow(0 28px 52px rgba(0,0,0,0.8))',
          cursor: 'grabbing',
        }}
        className="w-full h-full cursor-grab pointer-events-auto [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.6))] touch-none select-none will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="w-full h-full object-contain block"
        />
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="w-full bg-[#e8e8e8] box-border pt-[108px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-[180px] pb-0 font-sans">
      {/* ── Hero card ── */}
      <div
        className="relative w-full rounded-[20px] overflow-visible min-h-[510px] [background:radial-gradient(ellipse_at_0%_0%,rgba(88,28,135,0.55)_0%,transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(30,27,75,0.4)_0%,transparent_50%),#111116]"
      >
        {/* Purple glow blobs */}
        <div className="absolute pointer-events-none top-[-40px] left-[-40px] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-purple-900/28 rounded-full blur-[60px] sm:blur-[90px] z-[1]" />
        <div className="absolute pointer-events-none bottom-[-60px] right-[50px] sm:right-[200px] w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] bg-indigo-950/22 rounded-full blur-[50px] sm:blur-[80px] z-[1]" />

        {/* Two-column layout */}
        <div className="relative z-20 flex flex-col md:flex-row items-stretch w-full min-h-[510px]">
          {/* LEFT — Content */}
          <div className="flex flex-col justify-center w-full lg:w-[52%] p-8 sm:p-12 md:p-[80px_60px] lg:p-[80px_0_80px_60px] flex-shrink-0">
            <h1 className="text-white font-bold leading-[1.07] tracking-tighter mb-5 text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem]">
              Ship Fast. Scale Fearlessly
            </h1>

            <p className="text-[#9ca3af] text-sm sm:text-base leading-[1.7] mb-10 max-w-[440px]">
              We turn ideas into revenue generating software in{' '}
              <strong className="text-white font-semibold">6–8 weeks</strong>.
              {' '}Built for startups and growing businesses that can&apos;t afford to move slow.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 pt-4">
              {/* Primary CTA — staggered FlipLink + orange arrow */}
              <motion.button
                data-cal-namespace="30min"
                data-cal-link="stackcraft-lab/30min"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-stretch rounded-[10px] overflow-hidden border border-white/13 shadow-[0_4px_24px_rgba(0,0,0,0.55)] w-full sm:w-auto cursor-pointer"
                whileHover="hovered"
                initial="idle"
                onClick={() => trackEvent('cta_click', {
                  button: 'book_call',
                  location: 'hero_primary',
                })}
              >
                <div
                  className="flex flex-1 items-center justify-center sm:justify-start text-white text-[15px] font-medium tracking-[-0.01em] border-r border-white/10 no-underline p-[14px_22px] bg-[#232323]"
                >
                  <FlipLink>Book a Free Strategy Call</FlipLink>
                </div>
                {/* Orange arrow square */}
                <div
                  className="flex items-center justify-center w-[50px] flex-shrink-0 bg-[#f97316] transition-colors duration-220 hover:bg-[#ea6c0a]"
                  role="button"
                  aria-label="Book a call"
                >
                  <svg width="17" height="17" fill="none" stroke="white" strokeWidth={2.4} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.button>

              <a
                href="/portfolio"
                className="flex items-center justify-center sm:justify-start gap-2 text-[#9ca3af] hover:text-white transition-colors duration-300 font-medium text-base no-underline"
                onClick={() => trackEvent('cta_click', {
                  button: 'view_work',
                  location: 'hero_secondary',
                })}
              >
                View Our Work
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT spacer (hidden on smaller screens) */}
          <div className="hidden lg:block w-[48%] flex-shrink-0" />
        </div>

        {/* ── 3D Shapes ── */}
        <div className="hidden lg:block">
          <DraggableShape
            src="/shape5.avif" alt="3D coil shape" size={185}
            top="10px" right="120px"
            floatDuration={4.4} floatDelay={0}
          />

          <DraggableShape
            src="/shape4.avif" alt="3D orb shape" size={198}
            top="260px" right="-50px"
            floatDuration={5.2} floatDelay={0.9}
          />

          <DraggableShape
            src="/shape3.avif" alt="3D star shape" size={295}
            bottom="-115px" right="160px"
            floatDuration={3.9} floatDelay={1.6}
          />
        </div>
      </div>
    </section>
  );
}