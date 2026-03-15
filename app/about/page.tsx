'use client';

import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";
import AboutWhyChooseUs from "../components/AboutWhyChooseUs";
import AboutTeam from "../components/AboutTeam";
import AboutTimeline from "../components/AboutTimeline";
import AboutCTA from "../components/AboutCTA";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f7f7f7] selection:bg-[#f97316]/20 selection:text-[#0a0a0a]"
    >
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutWhyChooseUs />
        <AboutTeam />
        <AboutTimeline />
        <AboutCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
