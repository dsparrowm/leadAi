import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate(`/${href}`);
      } else {
        const el = document.getElementById(href.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = href;
        }
      }
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Affiliates", href: "/affiliates" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-leadflow-gradient rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-leadflow-deep-navy">LeadFlow</span>
              <span className="text-xs text-leadflow-electric-blue font-medium">AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-leadflow-slate hover:text-leadflow-electric-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={location.pathname === "/" ? item.href : `/${item.href}`}
                  className="text-leadflow-slate hover:text-leadflow-electric-blue transition-colors font-medium"
                  onClick={handleNavClick(item.href)}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="text-leadflow-electric-blue border-leadflow-electric-blue hover:bg-leadflow-electric-blue hover:text-white"
              asChild
            >
              <Link to="/login">Sign In</Link>
            </Button>
            <Button
              className="bg-leadflow-gradient text-white hover:opacity-90"
              asChild
            >
              <Link to="/dashboard">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-leadflow-slate" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-leadflow-slate hover:text-leadflow-electric-blue transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={location.pathname === "/" ? item.href : `/${item.href}`}
                    className="text-leadflow-slate hover:text-leadflow-electric-blue transition-colors font-medium"
                    onClick={handleNavClick(item.href)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="text-leadflow-electric-blue border-leadflow-electric-blue"
                  asChild
                >
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button
                  className="bg-leadflow-gradient text-white"
                  asChild
                >
                  <Link to="/register">Start Free Trial</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
