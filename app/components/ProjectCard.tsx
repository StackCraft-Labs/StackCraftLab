'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  isComingSoon?: boolean;
}

export default function ProjectCard({ image, title, description, tags, link, isComingSoon }: ProjectCardProps) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -10 }}
      className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e2e2e2] group relative"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isComingSoon ? 'bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center' : 'bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100'}`}>
          {isComingSoon && (
            <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-4 py-2 bg-[#f97316] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
                Launching Soon
              </span>
              <p className="text-white text-sm font-medium">Final stage of development.</p>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-[#f7f7f7] text-[#0a0a0a] text-xs font-bold rounded-full border border-[#e2e2e2] group-hover:bg-[#f97316]/10 group-hover:text-[#f97316] group-hover:border-[#f97316]/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-[#0a0a0a] group-hover:text-[#f97316] transition-colors">{title}</h3>
        <p className="text-[#6b6b6b] leading-relaxed text-sm font-normal">
          {description}
        </p>
        
        <div className="pt-4">
          <div className={`text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 ${isComingSoon ? 'text-[#6b6b6b]' : 'text-[#0a0a0a]'}`}>
            {isComingSoon ? 'Work In Progress' : (link ? 'Visit Website' : 'View Project')}
            {!isComingSoon && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#f97316]">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (link && !isComingSoon) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
