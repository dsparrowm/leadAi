import { Brain } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#demo" },
        { name: "API Documentation", href: "#" },
        { name: "Integrations", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Webinars", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-leadflow-deep-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-leadflow-gradient rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">LeadFlow</span>
                  <span className="text-xs text-leadflow-bright-cyan font-medium">AI</span>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transform social media into your most powerful sales channel with intelligent AI agents that find, engage, and nurture prospects automatically.
              </p>
              <div className="space-y-4">
                <div className="text-sm text-white/60">
                  <span className="font-semibold text-white">Ready to get started?</span>
                </div>
                <button className="bg-leadflow-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-leadflow-bright-cyan transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
              <div className="lg:flex-1">
                <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
                <p className="text-white/70 mb-4 lg:mb-0">
                  Get the latest insights on AI-powered lead generation and growth strategies.
                </p>
              </div>
              <div className="lg:flex-shrink-0 lg:ml-8 w-full max-w-md">
                <div className="flex w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-4 py-3 rounded-l-lg bg-white text-leadflow-deep-navy placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-leadflow-electric-blue"
                  />
                  <button className="px-6 py-3 bg-leadflow-electric-blue hover:bg-leadflow-bright-cyan rounded-r-lg font-semibold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © 2024 LeadFlow AI. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-leadflow-bright-cyan transition-colors text-sm">
                  Status
                </a>
                <a href="#" className="text-white/60 hover:text-leadflow-bright-cyan transition-colors text-sm">
                  System Status
                </a>
                <a href="#" className="text-white/60 hover:text-leadflow-bright-cyan transition-colors text-sm">
                  Changelog
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xs text-white/60">
                <span className="font-semibold">SOC 2 Compliant</span>
              </div>
              <div className="text-xs text-white/60">
                <span className="font-semibold">GDPR Ready</span>
              </div>
              <div className="text-xs text-white/60">
                <span className="font-semibold">99.9% Uptime</span>
              </div>
              <div className="text-xs text-white/60">
                <span className="font-semibold">Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
