'use client';

import FAQItem from './FAQItem';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to build my project?',
      answer: "Most web apps and SaaS products take 6–12 weeks depending on complexity. We'll give you a clear timeline in our first call — broken down by phase, not just one vague deadline. No \"it depends\" without a real answer."
    },
    {
      question: 'How much does it cost?',
      answer: "We don't do fixed pricing on a website because every project is different — but we give you a detailed quote within 24 hours of your first call. No hidden charges added later."
    },
    {
      question: 'What if I only have an idea and no design or documents?',
      answer: "Perfect starting point. Most of our clients come to us with just an idea. We handle everything — strategy, design, development and launch. You don't need a Figma file or a technical document to get started."
    },
    {
      question: 'Will I own the code after the project is done?',
      answer: "100% yes. Once the project is delivered and payment is complete, you own everything — the code, the design files, the database, all of it. We don't hold anything hostage."
    },
    {
      question: 'How do I track progress during the build?',
      answer: "We work in weekly sprints with a live demo every Friday. You'll always know what was built that week, what's coming next, and whether we're on track. No 3-month silence and then a surprise delivery."
    },
    {
      question: 'What tech stack do you build with?',
      answer: "We primarily build with Next.js, React, React Native, Node.js and Supabase. We pick the stack based on what's best for your product's scale and budget — not what's trendy. Everything we build is maintainable, documented and easy to hand off if you ever need to."
    },
    {
      question: 'What happens after the project launches?',
      answer: "Every project includes 30 days of post-launch support — bug fixes, small adjustments and deployment issues covered at no extra cost. After that we offer monthly maintenance packages if you need ongoing support."
    },
    {
      question: 'We got burned by a freelancer/agency before. Why should we trust you?',
      answer: "Fair question and we hear it often. Here's what's different — you see a clickable prototype before we write a single line of code, you get weekly demos so there are zero surprises, you own all the code from day one, and we put everything in a contract. If we can't deliver what we promised, you don't pay for what wasn't built. We'd rather lose a project than lose your trust."
    }
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-24 sm:py-[160px] px-6 sm:px-10 relative overflow-hidden font-sans">
      <div className="max-w-[1000px] mx-auto">
        {/* Heading Block */}
        <div className="mb-12 sm:mb-[80px]">
          <h2 className="text-3xl sm:text-[3.5rem] font-bold text-[#0a0a0a] tracking-tight mb-4 sm:mb-6 leading-[1.1]">
            Common <span className="text-[#f97316]">Questions</span>
          </h2>
          <p className="text-base sm:text-[1.25rem] text-[#6b6b6b] max-w-[600px] leading-relaxed">
            Everything you need to know about our process, pricing, and how we help you ship fast.
          </p>
        </div>

        {/* FAQ List */}
        <div className="border-t border-[#e2e2e2]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
