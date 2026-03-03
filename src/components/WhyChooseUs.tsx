import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Users, FileCheck, Headphones, Briefcase, Code2 } from "lucide-react";

const usps = [
  { icon: Monitor, title: "Live Online Classes", desc: "Real-time interactive sessions with industry experts" },
  { icon: Code2, title: "Real-World Projects", desc: "Build portfolio projects that recruiters love" },
  { icon: Users, title: "Mock Interviews", desc: "Practice with real interview scenarios & feedback" },
  { icon: FileCheck, title: "Resume Building", desc: "ATS-optimized resumes crafted by HR experts" },
  { icon: Briefcase, title: "Dedicated Placement Team", desc: "1-on-1 career guidance until you get placed" },
  { icon: Headphones, title: "Lifetime Support", desc: "Access to community & mentors even after placement" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Why Apex IT Academy</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border bg-card card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
