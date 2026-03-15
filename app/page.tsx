import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] selection:bg-[#f97316]/20 selection:text-[#0a0a0a]">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <Portfolio />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
