import { Sparkles, Shield, Zap, Clock } from "lucide-react";
import officeDeskImage from "@/assets/office-desk-cleaning.jpg";
import windowImage from "@/assets/window-cleaning.jpg";
import floorImage from "@/assets/floor-cleaning.jpg";
import sanitizationImage from "@/assets/sanitization.jpg";
import solarImage from "@/assets/solar.jpg";

const services = [
  {
    title: "Residential Cleaning",
    description: "Professional cleaning for homes and apartments.",
    image: officeDeskImage,
    icon: Sparkles,
  },
  {
    title: "Commercial Cleaning",
    description: "Office spaces, shops, and commercial facilities.",
    image: windowImage,
    icon: Sparkles,
  },
  {
    title: "Film Set Cleaning",
    description: "Professional cleaning for film and TV productions",
    image: floorImage,
    icon: Sparkles,
  },
{
    title: "Solar Cleaning",
    description: "Solar panels professional cleaning",
    image: solarImage,
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="servicii" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete cleaning solutions tailored to your needs!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-3xl overflow-hidden group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 p-3 bg-primary rounded-2xl">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
