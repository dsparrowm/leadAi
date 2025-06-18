
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Growth at TechCorp. Led teams that generated $100M+ in pipeline through innovative lead generation strategies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&w=400&h=400",
      expertise: ["Growth Strategy", "B2B Sales", "Team Leadership"]
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "AI researcher with 10+ years at Google and Meta. Expert in machine learning, natural language processing, and scalable systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
      expertise: ["AI/ML", "System Architecture", "Product Engineering"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Computer Science from Stanford. Previously led AI initiatives at Salesforce, specializing in conversational AI and predictive analytics.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
      expertise: ["NLP", "Predictive Analytics", "Research & Development"]
    },
    {
      name: "James Park",
      role: "VP of Sales",
      bio: "20+ years in B2B sales leadership. Built and scaled sales teams at multiple SaaS companies from startup to IPO.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      expertise: ["Sales Strategy", "Team Building", "Customer Success"]
    },
    {
      name: "Lisa Thompson",
      role: "Head of Product",
      bio: "Product management veteran with experience at HubSpot and Slack. Passionate about creating intuitive experiences that drive results.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&h=400",
      expertise: ["Product Strategy", "UX Design", "Customer Research"]
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineer who scaled platforms serving millions of users. Expert in building reliable, high-performance systems.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=400&h=400",
      expertise: ["Software Architecture", "DevOps", "Performance Optimization"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-leadflow-deep-navy mb-4">
              Meet the Team Behind
              <span className="text-gradient block">LeadFlow AI</span>
            </h2>
            <p className="text-xl text-leadflow-slate max-w-3xl mx-auto">
              We're a diverse group of entrepreneurs, engineers, and AI researchers united by one goal: revolutionizing how businesses generate and convert leads.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-leadflow-deep-navy mb-1">{member.name}</h3>
                    <p className="text-leadflow-electric-blue font-semibold mb-3">{member.role}</p>
                    <p className="text-leadflow-slate text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-leadflow-electric-blue/10 text-leadflow-electric-blue text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className="bg-leadflow-gradient p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-lg mb-6 opacity-90">
                We're always looking for talented individuals who share our passion for innovation and results.
              </p>
              <button className="bg-white text-leadflow-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
