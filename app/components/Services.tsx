'use client';

import { useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { trackEvent } from '@/lib/analytics';

// ─── Icons ───────────────────────────────────────────────────────────────────
const WebDevIcon = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#f97316" strokeWidth="1.5">
    <rect x="6" y="6" width="20" height="20" rx="1" />
    <rect x="11.5" y="11.5" width="9" height="9" transform="rotate(45 16 16)" />
  </svg>
);

const SaaSIcon = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#f97316" strokeWidth="1.5">
    <circle cx="12" cy="12" r="6" />
    <circle cx="20" cy="12" r="6" />
    <circle cx="16" cy="19" r="6" />
  </svg>
);

const CustomSoftwareIcon = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#f97316" strokeWidth="1.5">
    <circle cx="16" cy="16" r="11" />
    <line x1="16" y1="5" x2="16" y2="27" />
    <line x1="5" y1="16" x2="27" y2="16" />
    <circle cx="21" cy="21" r="3" />
  </svg>
);

const UIUXIcon = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#f97316" strokeWidth="1.5">
    <path d="M7 8 L7 24 L19 16 Z" />
    <path d="M19 8 C23.4 8 27 11.6 27 16 C27 20.4 23.4 24 19 24" />
  </svg>
);

const SERVICES = [
  {
    icon: <WebDevIcon />,
    title: 'SaaS & Web Apps',
    description: 'We build scalable web apps and SaaS products that are production-ready — not just prototypes.',
    eg: 'e.g. Subscription SaaS platforms, admin dashboards, B2B client portals, internal tools',
    offsetClass: 'translate-y-[60px]',
  },
  {
    icon: <SaaSIcon />,
    title: 'Mobile Apps',
    description: 'Cross‑platform iOS and Android apps that feel native and load fast – from design to deployment, fully handled.',
    eg: 'e.g. Booking apps · Marketplaces · Internal tools',
    offsetClass: 'translate-y-0',
  },
  {
    icon: <CustomSoftwareIcon />,
    title: 'Ai Automations',
    description: 'We replace your repetitive workflows with AI so your team stops doing manual work and costs go down.',
    eg: 'e.g. Support bots · Lead automation · Document processing',
    offsetClass: 'translate-y-[60px]',
  },
  {
    icon: <UIUXIcon />,
    title: 'Custom Software',
    description: "Can't find a tool that fits your exact business? We build it and connect everything you already use.",
    eg: 'e.g. API integrations · Custom ERPs · Billing pipelines',
    offsetClass: 'translate-y-0',
  },
];

export default function Services() {

  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  // Track when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', { section: 'services' });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#f7f7f7] flex flex-col items-center py-[160px] px-10 relative overflow-hidden [background-image:radial-gradient(circle,#c8c8c8_1px,transparent_1px)] [background-size:24px_24px] font-sans"
      ref={sectionRef}
    >
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-[72px] px-6 max-w-[720px]">
        <h2 className="text-[2.2rem] sm:text-[3.2rem] font-bold text-[#0a0a0a] tracking-tight mb-4 leading-[1.1]">
          What we Build
        </h2>
        <p className="text-[1rem] sm:text-[1.15rem] text-[#6b6b6b] leading-relaxed font-normal">
          Software that ships fast and scales fearlessly. <br />
          From <span className="text-[#0a0a0a] font-semibold">MVP to Paying Customers</span> in 6–8 Weeks
        </p>
      </div>

      {/* Card container */}
      <div className="w-full max-w-[1400px] border border-[#d4d4d4] rounded-[16px] bg-white/45 backdrop-blur-[12px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-[32px_28px_92px] box-border">
        {SERVICES.map((svc) => (
          <div
            key={svc.title}
            className={`flex-1 min-w-0 ${svc.offsetClass} lg:${svc.offsetClass} max-lg:translate-y-0`}
          >
            <ServiceCard
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              eg={svc.eg}
            />
          </div>
        ))}
      </div>

      {/* Continuity Bridge - Vertical Connector */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}