import { Phone, ClipboardCheck, Calendar, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact",
    description: "Contact us by phone or online form for a free evaluation.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description: "We visit the location and make a detailed assessment of your needs.",
  },
  {
    icon: Calendar,
    title: "Scheduling",
    description: "We establish together a flexible schedule that fits your office.",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Our professional team does the job impeccably, guaranteed.",
  },
];

const Process = () => {
  return (
    <section id="proces" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process to a perfectly clean office
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}

                <div className="relative glass rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
