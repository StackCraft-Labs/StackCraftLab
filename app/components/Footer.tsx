'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Github, Instagram, Twitter } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const SOCIAL_LINKS = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/stackcraftlabs/', 
    icon: <Instagram size={18} />
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Stackcraft39551',
    icon: <Twitter size={18} />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/StackCraft-Labs',
    icon: <Github size={18} />
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111116] text-white border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f97316]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 lg:py-20 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/StackCraft.png"
                alt="StackCraft Labs"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                StackCraft
              </span>
              <span className="bg-white/10 text-white/70 text-[10px] uppercase font-black px-1.5 py-0.5 rounded-md border border-white/5 tracking-wider">
                Labs
              </span>
            </div>
          </Link>
          <p className="text-[#6b6b6b] text-sm font-medium">
            © {currentYear} StackCraft Labs. All rights reserved.
          </p>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 pt-2 md:pt-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-[#9ca3af] hover:text-white font-medium text-sm transition-colors duration-300 pb-1 group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f97316] group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
          ))}
        </nav>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4 pt-2 md:pt-4">
          {SOCIAL_LINKS.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#9ca3af] bg-white/5 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
