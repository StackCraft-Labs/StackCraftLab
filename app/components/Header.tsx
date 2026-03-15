'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// ─── Nav items ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ─── Spring config ────────────────────────────────────────────────────────────
const SPRING = { type: 'spring', stiffness: 340, damping: 30, mass: 0.9 } as const;

// ─── Logo mark ────────────────────────────────────────────────────────────────
function LogoMark({ dark = true, size = 32 }: { dark?: boolean; size?: number }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <Image
        src={dark ? "/blackStackCraft.png" : "/StackCraft.png"}
        alt="StackCraft Labs"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority
      />
    </div>
  );
}

// ─── Dot indicator (active link) ─────────────────────────────────────────────
function ActiveDot() {
  return (
    <motion.span
      layoutId="activeNavDot"
      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#111] block"
      transition={SPRING}
    />
  );
}

// ─── Pill active indicator ────────────────────────────────────────────────────
function PillActiveIndicator() {
  return (
    <motion.span
      layoutId="activePillBg"
      className="absolute inset-0 rounded-full bg-white/12 z-0"
      transition={SPRING}
    />
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Active link detection
  const active =
    pathname === '/' ? 'Home' :
      pathname === '/portfolio' ? 'Portfolio' :
        pathname === '/about' ? 'About' :
          pathname === '/contact' ? 'Contact' : '';

  useEffect(() => {
    let prev = false;
    const onScroll = () => {
      const next = window.scrollY > 60;
      if (next !== prev) { prev = next; setScrolled(next); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          FULL-WIDTH NAVBAR   (visible when NOT scrolled)
      ═══════════════════════════════════════════════════════════════ */}
      <motion.header
        aria-label="Primary navigation"
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-[180px] h-[72px] bg-[#e8e8e8]/82 backdrop-blur-[18px]"
        animate={{
          opacity: scrolled ? 0 : 1,
          y: scrolled ? -20 : 0,
          pointerEvents: scrolled ? 'none' : 'auto',
        } as never}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Logo */}
        <LogoMark dark size={scrolled ? 32 : 44} />

        {/* Desktop Nav links */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`relative text-[15px] font-sans tracking-[-0.01em] no-underline pb-1.5 transition-colors duration-200 ${
                active === label ? 'text-[#111] font-semibold' : 'text-[#555] font-normal'
              }`}
            >
              {label}
              {active === label && <ActiveDot />}
            </a>
          ))}

          <button
            data-cal-namespace="30min"
            data-cal-link="stackcraft-lab/30min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center justify-center px-6 py-2.5 ml-2 rounded-full bg-[#111] text-white font-semibold text-[15px] font-sans no-underline transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            Book a call
          </button>
        </nav>

        {/* Mobile Menu Toggle (Simplified for now - just a link to contact or visible links) */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            data-cal-namespace="30min"
            data-cal-link="stackcraft-lab/30min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#111] text-white font-semibold text-sm font-sans no-underline cursor-pointer"
          >
            Book a call
          </button>
        </div>
      </motion.header>

      {/* ═══════════════════════════════════════════════════════════════
          ISLAND NAVBAR   (visible AFTER scroll)
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        aria-label="Compact island navigation"
        className="fixed top-3.5 left-0 right-0 z-50 flex justify-center items-center pointer-events-none px-4"
        initial={false}
      >
        {/* ── Logo pill ────────────────────────────────────────── */}
        <motion.div
          className={`flex items-center bg-[#0e0e0e]/94 backdrop-blur-[22px] border border-white/9 rounded-full p-[7px_12px] shadow-[0_8px_32px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] ${
            scrolled ? 'pointer-events-auto mr-1' : 'pointer-events-none'
          }`}
          animate={{
            x: scrolled ? 0 : -320,
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ ...SPRING, delay: scrolled ? 0 : 0 }}
        >
          <a href="/" className="flex no-underline">
            <LogoMark dark={false} size={28} />
          </a>
        </motion.div>

        {/* ── Links pill ───────────────────────────────────────── */}
        <motion.div
          className={`flex items-center gap-0.5 bg-[#0e0e0e]/94 backdrop-blur-[22px] border border-white/9 rounded-full p-[6px_8px] shadow-[0_8px_32px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] ${
            scrolled ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          animate={{
            x: scrolled ? 0 : 320,
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ ...SPRING, delay: scrolled ? 0.04 : 0 }}
        >
          <AnimatePresence>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative inline-flex items-center justify-center px-2.5 sm:px-3.5 py-1.25 rounded-full text-xs sm:text-sm font-sans whitespace-nowrap transition-colors duration-200 no-underline z-[1] ${
                  active === label ? 'text-white font-medium' : 'text-white/48 font-normal'
                }`}
              >
                {active === label && <PillActiveIndicator />}
                <span className="relative z-[1]">{label}</span>
              </a>
            ))}
          </AnimatePresence>

          <button
            data-cal-namespace="30min"
            data-cal-link="stackcraft-lab/30min"
            data-cal-config='{"layout":"month_view"}'
            className={`hidden sm:inline-flex items-center justify-center px-4 py-1.5 ml-1 rounded-full bg-white text-[#111] font-semibold text-sm font-sans no-underline transition-transform duration-200 hover:scale-105 cursor-pointer ${
              scrolled ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            Book a call
          </button>
        </motion.div>
      </motion.div>

    </>
  );
}