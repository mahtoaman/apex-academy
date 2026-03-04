import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Sparkles } from "lucide-react";

const partners = [
  "Tech Mahindra", "Deloitte", "Accenture", "Capgemini",
  "HCLTech", "Coforge", "Zensar", "Wipro", "Infosys",
];

// Create lists of half the required size (18 elements), then we render them twice
const halfItems = [...partners, ...partners];
// A slightly different order for the second row so they don't look perfectly aligned
const partnersReverse = [...partners.slice(4), ...partners.slice(0, 4), ...partners, ...partners, ...partners];
const halfReverse = [...partnersReverse.slice(0, 18)];

const TrustBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
      {/* Top and Bottom subtle borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-main mx-auto px-4 mb-16 relative z-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">Elite Placements</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight pb-2"
          >
            Trusted By <span className="gradient-text">Industry Leaders</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground max-w-2xl text-lg md:text-xl font-medium"
          >
            Our alumni engineer the future at these top multinational companies.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container - Slightly tilted for dynamic effect */}
      <div className="relative flex flex-col gap-6 transform -rotate-1 lg:-rotate-2 scale-[1.05] overflow-hidden py-10">
        
        {/* Shadow overlays for smooth fade at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moving Right -> Left */}
        <div className="marquee flex w-fit hover:[animation-play-state:paused] items-center">
          {[0, 1].map((copyIdx) => (
            <div key={`row1-copy-${copyIdx}`} className="flex flex-shrink-0 gap-6 pr-6 items-center">
              {halfItems.map((name, i) => (
                <div
                  key={`row1-${copyIdx}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 py-5 rounded-2xl border border-border/50 bg-background shadow-sm transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-accent/5 hover:border-accent/40 hover:shadow-accent/20 cursor-default group"
                >
                  <Building2 className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  <span className="text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300 tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Moving Left -> Right */}
        <div className="marquee-reverse flex w-fit hover:[animation-play-state:paused] ml-[-50%] items-center">
          {[0, 1].map((copyIdx) => (
            <div key={`row2-copy-${copyIdx}`} className="flex flex-shrink-0 gap-6 pr-6 items-center">
              {halfReverse.map((name, i) => (
                <div
                  key={`row2-${copyIdx}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 py-5 rounded-2xl border border-border/50 bg-background shadow-sm transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-accent/5 hover:border-accent/40 hover:shadow-accent/20 cursor-default group"
                >
                  <Building2 className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  <span className="text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300 tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
