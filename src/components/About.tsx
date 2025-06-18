
import { Card, CardContent } from "@/components/ui/card";
import { Trending, Users, Brain, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Trending, value: "$50M+", label: "Revenue Generated" },
    { icon: Brain, value: "99.7%", label: "AI Accuracy" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ];

  const values = [
    {
      title: "AI-First Approach",
      description: "We believe artificial intelligence should enhance human capabilities, not replace them. Our AI agents work alongside your team to amplify results."
    },
    {
      title: "Results-Driven",
      description: "Every feature we build is designed to deliver measurable ROI. We're not interested in vanity metrics—only conversions that grow your business."
    },
    {
      title: "Ethical AI",
      description: "We prioritize authentic engagement and respect for prospects. Our AI maintains the human touch that builds genuine business relationships."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-leadflow-deep-navy mb-4">
              Who We Are &
              <span className="text-gradient block">What We Stand For</span>
            </h2>
            <p className="text-xl text-leadflow-slate max-w-3xl mx-auto">
              We're a team of AI researchers, sales experts, and growth hackers who got tired of seeing great businesses struggle with outdated lead generation methods.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-leadflow-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-leadflow-deep-navy mb-2">{stat.value}</div>
                  <div className="text-leadflow-slate font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-leadflow-deep-navy mb-6">Our Story</h3>
              <div className="space-y-4 text-leadflow-slate text-lg leading-relaxed">
                <p>
                  Founded in 2022 by serial entrepreneurs who had built and sold multiple B2B companies, LeadFlow AI was born from a simple frustration: traditional lead generation was broken.
                </p>
                <p>
                  Cold calling was becoming less effective. Email open rates were plummeting. And social media was turning into a noisy marketplace where genuine connections were rare.
                </p>
                <p>
                  We knew there had to be a better way—one that combined the scale of automation with the authenticity of human connection. So we built it.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-leadflow-deep-navy to-leadflow-electric-blue p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
              <p className="text-lg leading-relaxed opacity-90">
                "To democratize intelligent lead generation, making it accessible for businesses of all sizes to build meaningful relationships at scale while maintaining the human touch that drives real conversions."
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="font-semibold">— Sarah Chen, CEO & Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-3xl font-bold text-leadflow-deep-navy text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-xl font-bold text-leadflow-deep-navy mb-4">{value.title}</h4>
                  <p className="text-leadflow-slate leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
