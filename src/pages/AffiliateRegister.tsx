import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const AffiliateRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        socialMedia: "",
        audienceSize: "",
        marketingExperience: "",
        promotionStrategy: "",
        agreeToTerms: false,
        agreeToMarketing: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreeToTerms) {
            alert("Please accept the terms and conditions to proceed.");
            return;
        }

        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const isFormValid = () => {
        return (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phone &&
            formData.audienceSize &&
            formData.marketingExperience &&
            formData.promotionStrategy &&
            formData.agreeToTerms
        );
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-white to-leadflow-bright-cyan/10 flex flex-col">
                <Header />
                <main className="flex-1 px-4 max-w-2xl mx-auto mt-24 w-full flex items-center justify-center">
                    <Card className="w-full">
                        <CardContent className="p-8 text-center">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h1 className="text-2xl font-bold text-leadflow-deep-navy mb-4">
                                Application Submitted Successfully!
                            </h1>
                            <p className="text-leadflow-slate mb-6">
                                Thank you for applying to the LeadFlow AI Affiliate Program. We'll review your
                                application and get back to you within 2-3 business days.
                            </p>
                            <div className="space-y-3">
                                <Button 
                                    onClick={() => navigate("/affiliate-dashboard")} 
                                    className="w-full bg-leadflow-electric-blue hover:bg-leadflow-deep-navy"
                                >
                                    Go to Dashboard
                                </Button>
                                <Button 
                                    onClick={() => navigate("/affiliates")} 
                                    variant="outline"
                                    className="w-full"
                                >
                                    Back to Affiliates
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-leadflow-bright-cyan/10 flex flex-col">
            <Header />
            <main className="flex-1 px-4 max-w-3xl mx-auto mt-24 w-full">
                <div className="text-center mb-8">
                    <span className="inline-block bg-leadflow-electric-blue/10 text-leadflow-electric-blue px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Join Our Program
                    </span>
                    <h1 className="text-4xl font-extrabold text-leadflow-deep-navy mb-4 tracking-tight">
                        Become a LeadFlow AI Affiliate
                    </h1>
                    <p className="text-lg text-leadflow-slate max-w-2xl mx-auto">
                        Start earning up to 30% recurring commission by promoting the leading AI-driven 
                        lead generation platform. Fill out the application below to get started.
                    </p>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl text-leadflow-deep-navy">
                            Affiliate Application
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-leadflow-deep-navy">
                                    Personal Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name *</Label>
                                        <Input
                                            id="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name *</Label>
                                        <Input
                                            id="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    disabled={!isFormValid() || isSubmitting}
                                    className="w-full bg-leadflow-electric-blue hover:bg-leadflow-deep-navy text-lg py-3"
                                >
                                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default AffiliateRegister;
