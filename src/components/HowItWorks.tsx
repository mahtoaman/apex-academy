import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, GraduationCap, Target, Banknote } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Enroll for Free",
    description: "Register with just ₹15K and get started immediately. No hidden fees.",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "Get 90-Day Training",
    description: "Industry-ready curriculum taught by IIT alumni & tech experts. Live classes.",
  },
  {
    icon: Target,
    step: "03",
    title: "Crack Interviews",
    description: "Mock interviews, resume building, and dedicated placement support until you're hired.",
  },
  {
    icon: Banknote,
    step: "04",
    title: "Pay After Placement",
    description: "Start paying only after you land your dream job. Zero financial risk.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-background">
      <div className="container-main" data-reveal="right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Your Journey to a <span className="gradient-text">Dream Career</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            A simple 4-step process that takes you from zero to hired in 90 days
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <div className="card-wire-mask">
                <div 
                  className="wire-gradient-top"
                  style={{ animationDelay: `${i * 1.25}s` }}
                />
                <div 
                  className="wire-gradient-bot"
                  style={{ animationDelay: `${i * 1.25}s` }}
                />
              </div>

              <div className="bg-card rounded-2xl p-6 border card-hover h-full relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="text-accent" size={28} />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Step {step.step}</span>
                <h3 className="text-xl font-bold text-card-foreground mt-2 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <>
                  {/* Desktop Horizontal Line */}
                  <div className="hidden lg:block absolute top-1/2 left-full w-6 h-px bg-border -translate-y-1/2 overflow-hidden z-20">
                    <div 
                      className="link-wire"
                      style={{ animationDelay: `${i * 1.25 + 1.0}s` }}
                    />
                  </div>
                  {/* Mobile Vertical Line */}
                  <div className="block sm:hidden absolute left-1/2 top-full w-px h-6 bg-border -translate-x-1/2 overflow-hidden z-20">
                    <div 
                      className="link-wire-vertical"
                      style={{ animationDelay: `${i * 1.25 + 1.0}s` }}
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
