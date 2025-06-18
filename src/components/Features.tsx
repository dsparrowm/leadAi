import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Search, Users, TrendingUp, Calendar, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Prospecting",
      description: "Advanced machine learning algorithms identify high-intent prospects across all major social platforms automatically.",
      color: "text-leadflow-purple"
    },
    {
      icon: Search,
      title: "Smart Lead Discovery",
      description: "Find prospects who are actively discussing pain points your solution solves, ensuring higher conversion rates.",
      color: "text-leadflow-electric-blue"
    },
    {
      icon: Users,
      title: "Automated Engagement",
      description: "AI agents engage prospects with personalized messages that feel human, building authentic relationships at scale.",
      color: "text-leadflow-emerald"
    },
    {
      icon: TrendingUp,
      title: "Conversion Tracking",
      description: "Real-time analytics show exactly which prospects are moving through your funnel and ready to buy.",
      color: "text-leadflow-amber"
    },
    {
      icon: Calendar,
      title: "Meeting Automation",
      description: "Seamlessly book qualified prospects directly into your calendar when they're ready to take the next step.",
      color: "text-leadflow-bright-cyan"
    },
    {
      icon: Star,
      title: "Multi-Platform Integration",
      description: "Connect LinkedIn, Twitter, Facebook, and Instagram for comprehensive social media lead generation.",
      color: "text-leadflow-deep-navy"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-leadflow-deep-navy mb-4">
            Intelligent Features That
            <span className="text-gradient block">Drive Results</span>
          </h2>
          <p className="text-xl text-leadflow-slate max-w-3xl mx-auto">
            Our AI agents work 24/7 to transform your social media presence into a lead generation powerhouse, handling every step from discovery to conversion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-leadflow-deep-navy">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-leadflow-slate text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-leadflow-gradient p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to See It in Action?</h3>
            <p className="text-lg mb-6 opacity-90">
              Watch our AI agents identify and engage prospects in real-time
            </p>
            <button className="bg-white text-leadflow-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
