
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Eye, EyeOff, Check } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "7-day free trial, no credit card required",
    "Access to all AI agents and features",
    "24/7 automated prospecting",
    "Dedicated customer success manager"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-leadflow-deep-navy via-leadflow-electric-blue to-leadflow-bright-cyan flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-leadflow-deep-navy" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">LeadFlow</span>
              <span className="text-sm text-leadflow-bright-cyan font-medium">AI</span>
            </div>
          </div>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-leadflow-deep-navy">
              Start Your Free Trial
            </CardTitle>
            <CardDescription className="text-leadflow-slate">
              Join thousands of businesses automating their lead generation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Registration Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-leadflow-deep-navy">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-leadflow-electric-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-leadflow-deep-navy">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-leadflow-electric-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-leadflow-deep-navy">
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-leadflow-electric-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-leadflow-deep-navy">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-leadflow-electric-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-leadflow-deep-navy">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-leadflow-electric-blue pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-leadflow-slate" />
                        ) : (
                          <Eye className="h-4 w-4 text-leadflow-slate" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-leadflow-deep-navy">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-leadflow-electric-blue pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-leadflow-slate" />
                        ) : (
                          <Eye className="h-4 w-4 text-leadflow-slate" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm text-leadflow-slate">
                      I agree to the{" "}
                      <Link to="/terms" className="text-leadflow-electric-blue hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-leadflow-electric-blue hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-leadflow-gradient text-white hover:opacity-90 py-6"
                    size="lg"
                    disabled={!agreedToTerms}
                  >
                    Start Free Trial
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-leadflow-slate">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-leadflow-electric-blue hover:text-leadflow-deep-navy font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-leadflow-deep-navy mb-4">
                  What's included in your trial:
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-leadflow-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-leadflow-slate text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-leadflow-gradient rounded-lg text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">$0</div>
                    <div className="text-sm opacity-90">for 7 days</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-white/80 hover:text-white text-sm"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
