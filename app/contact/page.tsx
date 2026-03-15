import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact — StackCraft Lab",
  description: "Get in touch with the StackCraft Lab team. We reply within hours, no bots.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] font-sans">
      <Header />
      {/* pt-[72px] offsets the fixed navbar height */}
      <div className="pt-[72px]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
