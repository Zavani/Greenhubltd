import { CheckCircle2, Users, Award, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Professional Team",
    description: "Trained and verified staff, dedicated to cleaning excellence.",
  },
  {
    icon: Award,
    title: "Proven Experience",
    description: "1+ years of experience in corporate cleaning.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We only use ecological and certified cleaning products.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Guarantee",
    description: "100% satisfaction guaranteed or we redo the service for free.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="despre" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are your trusted partner for an impeccable workspace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass rounded-3xl p-8 h-full flex flex-col items-center justify-start hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">
            Over 10+ Happy Offices
          </h3>
          <p className="text-xl text-muted-foreground mb-6">
            We pride ourselves on loyal clients who recommend us for our professionalism and service quality
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
