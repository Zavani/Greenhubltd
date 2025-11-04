import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-no-shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Green Hub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicii")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("despre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("proces")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <a href="tel:+447378399319">
              <Button className="rounded-3xl">Call Us</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("servicii")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("despre")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("proces")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <a href="tel:+447378399319" className="w-full">
              <Button className="rounded-3xl w-full">Call Us</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
