'use client';

import Header from "../components/Header";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioProjects from "../components/PortfolioProjects";
import PortfolioCTA from "../components/PortfolioCTA";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f7f7f7] selection:bg-[#f97316]/20 selection:text-[#0a0a0a]"
    >
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioProjects />
        <PortfolioCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
