'use client';

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AboutValues() {

  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  //track section view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent('section_viewed', {
            section: 'about_values',
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to communication.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.'
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and honest relationships with our clients.'
    },
    {
      title: 'Impact',
      description: 'We measure success by the tangible results and growth we deliver for our clients.'
    },
    {
      title: 'Collaboration',
      description: 'We work as partners with our clients, not just vendors. Your success is our success.'
    },
    {
      title: 'Learning',
      description: 'We are committed to continuous learning and staying at the forefront of technology.'
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and define who we are as a company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
