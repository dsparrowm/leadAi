import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LiveAIChat from "@/components/LiveAIChat";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <LiveAIChat />
      <About />
      <PricingSection />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
