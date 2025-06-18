
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Brain, User, CheckMark } from "lucide-react";

const LiveAIChat = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatSequence = [
    {
      type: "prospect",
      message: "Hey, I've been struggling with lead generation for my B2B SaaS. Traditional methods aren't working anymore.",
      timestamp: "2:34 PM"
    },
    {
      type: "ai",
      message: "I completely understand your frustration, Sarah. Many B2B companies are finding traditional lead gen methods less effective. What specific challenges are you facing with your current approach?",
      timestamp: "2:35 PM"
    },
    {
      type: "prospect", 
      message: "We're spending tons on ads but the leads aren't qualified. Plus, our sales team is overwhelmed with manual prospecting.",
      timestamp: "2:36 PM"
    },
    {
      type: "ai",
      message: "That's exactly what LeadFlow AI solves. Our platform identifies high-intent prospects who are already discussing problems your solution addresses. Would you like to see how we helped TechCorp increase qualified leads by 300% while reducing their cost per acquisition by 60%?",
      timestamp: "2:37 PM"
    },
    {
      type: "prospect",
      message: "That sounds impressive! I'd love to learn more about how it works.",
      timestamp: "2:38 PM"
    },
    {
      type: "ai",
      message: "Perfect! I'll send you a personalized demo link. Our AI agents can start identifying prospects for your specific industry within 24 hours. What's the best email to send this to?",
      timestamp: "2:39 PM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < chatSequence.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, 1500);
      } else {
        // Reset the demo
        setTimeout(() => {
          setCurrentStep(0);
        }, 3000);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentStep, chatSequence.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-leadflow-deep-navy mb-4">
              Watch Our AI Agent
              <span className="text-gradient block">Convert in Real-Time</span>
            </h2>
            <p className="text-xl text-leadflow-slate max-w-3xl mx-auto">
              See how our intelligent AI agents identify prospects, engage with personalized conversations, and guide them toward conversion—automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chat Interface */}
            <div className="order-2 lg:order-1">
              <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-leadflow-gradient text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    LeadFlow AI Agent
                    <span className="ml-auto text-xs bg-leadflow-emerald px-2 py-1 rounded-full">Live</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 h-96 overflow-y-auto bg-gray-50">
                  <div className="space-y-4 p-4">
                    {chatSequence.slice(0, currentStep).map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'} animate-fade-in`}
                      >
                        <div className={`max-w-xs lg:max-w-sm ${message.type === 'ai' ? 'order-2' : 'order-1'}`}>
                          <div className={`px-4 py-2 rounded-lg ${
                            message.type === 'ai' 
                              ? 'bg-white border border-gray-200 text-leadflow-deep-navy' 
                              : 'bg-leadflow-electric-blue text-white'
                          }`}>
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${
                              message.type === 'ai' ? 'text-gray-500' : 'text-white/70'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'ai' ? 'order-1 mr-2 bg-leadflow-gradient' : 'order-2 ml-2 bg-leadflow-slate'
                        }`}>
                          {message.type === 'ai' ? (
                            <Brain className="w-4 h-4 text-white" />
                          ) : (
                            <User className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && currentStep < chatSequence.length && (
                      <div className="flex justify-start animate-fade-in">
                        <div className="w-8 h-8 rounded-full bg-leadflow-gradient flex items-center justify-center mr-2">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-leadflow-electric-blue rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-leadflow-electric-blue rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-leadflow-electric-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats and Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-leadflow-deep-navy to-leadflow-electric-blue p-6 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Real Conversation Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Response Rate</span>
                      <span className="text-leadflow-bright-cyan font-bold">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Qualification Score</span>
                      <span className="text-leadflow-emerald font-bold">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Next Action</span>
                      <span className="text-leadflow-amber font-bold">Demo Scheduled</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-leadflow-deep-navy">What You Just Witnessed:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-leadflow-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckMark className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-leadflow-slate">AI identified a qualified prospect discussing lead generation challenges</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-leadflow-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckMark className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-leadflow-slate">Personalized response addressing specific pain points</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-leadflow-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckMark className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-leadflow-slate">Provided relevant social proof and case study</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-leadflow-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckMark className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-leadflow-slate">Successfully guided prospect toward demo request</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAIChat;
