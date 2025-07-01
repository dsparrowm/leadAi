
import { Button } from "@/components/ui/button";
import { ArrowDown, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-leadflow-deep-navy via-leadflow-electric-blue to-leadflow-bright-cyan overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2 text-leadflow-emerald" />
            <span className="text-sm font-medium">AI Agents That Actually Convert</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            From Social to Sale,
            <span className="block bg-gradient-to-r from-leadflow-bright-cyan to-white bg-clip-text text-transparent">
              Automatically
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
            Transform social media into your most powerful sales channel with intelligent AI agents that find, engage, and nurture prospects until they're ready to buy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-white text-leadflow-deep-navy hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-leadflow-deep-navy px-8 py-4 text-lg font-semibold">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-leadflow-bright-cyan">300%</div>
              <div className="text-white/80">Increase in Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-leadflow-bright-cyan">60%</div>
              <div className="text-white/80">Reduction in Cost per Acquisition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-leadflow-bright-cyan">24/7</div>
              <div className="text-white/80">Automated Prospecting</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
