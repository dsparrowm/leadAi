import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Zap, Smile, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => (
    <section id="why-choose-us" className="py-20 bg-leadflow-gradient text-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    LeadFlow AI is trusted by thousands of businesses to deliver real results. Here’s what sets us apart from the rest.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-white/10 border-0 shadow-lg text-white">
                    <CardContent className="p-8 flex flex-col items-center">
                        <ShieldCheck className="w-10 h-10 mb-4 text-leadflow-bright-cyan" />
                        <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                        <p className="opacity-80">Your data is protected with enterprise-grade security and privacy standards.</p>
                    </CardContent>
                </Card>
                <Card className="bg-white/10 border-0 shadow-lg text-white">
                    <CardContent className="p-8 flex flex-col items-center">
                        <Zap className="w-10 h-10 mb-4 text-leadflow-electric-blue" />
                        <h3 className="text-xl font-bold mb-2">Lightning Fast AI</h3>
                        <p className="opacity-80">Our AI agents work around the clock to find and engage leads instantly.</p>
                    </CardContent>
                </Card>
                <Card className="bg-white/10 border-0 shadow-lg text-white">
                    <CardContent className="p-8 flex flex-col items-center">
                        <Smile className="w-10 h-10 mb-4 text-leadflow-emerald" />
                        <h3 className="text-xl font-bold mb-2">Human Touch</h3>
                        <p className="opacity-80">AI that feels personal—every message is tailored to build real relationships.</p>
                    </CardContent>
                </Card>
                <Card className="bg-white/10 border-0 shadow-lg text-white">
                    <CardContent className="p-8 flex flex-col items-center">
                        <ThumbsUp className="w-10 h-10 mb-4 text-leadflow-amber" />
                        <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                        <p className="opacity-80">Join 10,000+ users who have grown their pipeline and revenue with LeadFlow AI.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

export default WhyChooseUs;