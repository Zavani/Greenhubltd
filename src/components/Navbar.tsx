import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoImg from "@/assets/Logogh.png";

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
      <div className="container mx-auto px-1 py-0 md:py-2">
        <div className="relative flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-2">
            <img src={LogoImg} alt="Green Hub Logo" className="w-[120px] h-[120px] md:w-20 md:h-20 object-contain rounded-full" />
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
              How It Works?
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <div className="flex items-center gap-4">
              <a href="tel:08002740075" className="flex flex-col items-start leading-tight">
                <span className="text-foreground font-medium text-sm">Call us today:</span>
                <span className="text-primary font-bold text-base">0800 274 0075</span>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white font-semibold px-5 py-2 rounded-3xl hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get Your Free Quote &rsaquo;
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 text-foreground"
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
              How It Works?
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <a href="tel:08002740075" className="flex flex-col items-start leading-tight">
              <span className="text-foreground font-medium text-sm">Call us today:</span>
              <span className="text-primary font-bold text-lg">0800 274 0075</span>
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white font-semibold px-5 py-2 rounded-3xl hover:opacity-90 transition-opacity w-full"
            >
              Get Your Free Quote &rsaquo;
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
