'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface WhyChooseUsCardProps {
  number: number;
  heading: string;
  description: string;
  onInView: () => void;
}

function WhyChooseUsCard({ number, heading, description, onInView }: WhyChooseUsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to detect when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when card is centered in the viewport
        if (entry.isIntersecting) {
          onInView();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-30% 0px -30% 0px'
      }
    );

    const element = cardRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onInView]);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-700/50 rounded-2xl p-8 sm:p-12 min-h-[280px] sm:min-h-[320px] flex flex-col justify-center hover:border-orange-500/50 transition-all duration-300 mb-16 sm:mb-[100px]"
    >
      <div>
        <p className="text-orange-500 font-bold text-base sm:text-lg mb-2 sm:mb-4">0{number}</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">{heading}</h3>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const cardsData = [
    {
      number: 1,
      heading: 'Ship Fast, Scale Smart',
      shortHeading: 'Ship Fast, Scale Smart',
      description: 'We leverage proven technologies and streamlined processes to deliver your MVP quickly without compromising on quality. Our agile methodology ensures rapid iterations and continuous improvements.',
      fullDescription: 'We customize our technology offerings to meet your specific business needs, ensuring optimal performance and scalability. Our team works closely with you to understand your requirements and deliver solutions that drive real business value.',
    },
    {
      number: 2,
      heading: '100% Focus on Your Project',
      shortHeading: '100% Focus on Your Project',
      description: 'Your success is our mission. We dedicate our full attention and resources to ensure every aspect of your project receives the care and expertise it deserves.',
      fullDescription: 'We don\'t just build software, we build partnerships. Our team commits to understanding your vision, aligning with your goals, and supporting you throughout the entire development journey and beyond.',
    },
    {
      number: 3,
      heading: 'Partnership Not Just Development',
      shortHeading: 'Partnership Not Just Development',
      description: 'We believe in long-term relationships. Beyond development, we provide strategic guidance, technical support, and continuous optimization to ensure sustained success.',
      fullDescription: 'We stay with you every step of the way. From initial strategy to post-launch support, we\'re invested in your success and committed to helping your business thrive in the digital landscape.',
    },
  ];

  const handleCardInView = useCallback((index: number) => {
    setActiveCard(index);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 relative font-sans">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-900 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-900 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-20 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Discover what sets us apart and why leading companies trust us with their most critical projects.
          </p>
        </div>

        {/* Sticky Scroll Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Sticky Content */}
          <div className="lg:sticky lg:top-40 h-fit flex flex-col mb-8 lg:mb-0">
            <div className="transition-all duration-500">
              <p className="text-orange-500 font-bold text-base sm:text-lg mb-2 sm:mb-4">
                0{activeCard + 1}
              </p>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-500">
                {cardsData[activeCard].shortHeading}
              </h3>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mt-4 sm:mt-8"></div>
            </div>
          </div>

          {/* Right - Scrolling Cards */}
          <div className="space-y-0 pb-10">
            {cardsData.map((card, index) => (
              <div key={card.number} onClick={() => handleCardInView(index)} className="scroll-smooth cursor-pointer">
                <WhyChooseUsCard
                  number={card.number}
                  heading={card.heading}
                  description={card.description}
                  onInView={() => handleCardInView(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
