import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Green Hub 
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional office cleaning services. Your trusted partner for an impeccable workspace.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicii" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#despre" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#proces" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-foreground">+44 7378 399319</div>
                  <div className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@cleanpro.com" className="text-foreground hover:text-primary transition-colors">
                  info@greenhubltd.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-foreground">
                  30 Penrhyn Gardens, Penrhyn Road, Kingston Upon Thames<br />
                  KT1 2EG, UNITED KINGDOM
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe for exclusive offers and cleaning tips.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-3xl"
              />
              <Button className="rounded-3xl w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
          <p>© 2025 Green Hub Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
