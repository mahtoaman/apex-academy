import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import LeadFormDialog from "./LeadFormDialog";

const Hero = () => {
  return (
    <section id="home" className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-main section-padding relative z-10 pt-28 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Pay After Placement</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 text-balance">
              Get Trained Today.{" "}
              <span className="gradient-text">Pay Only After</span>{" "}
              You Get Placed.
            </h1>

            <p className="text-primary-foreground/70 text-base sm:text-xl mb-8 max-w-xl font-body leading-relaxed">
              100% job-focused IT training with guaranteed career support. Join 1500+ professionals who transformed their careers with Apex IT Academy.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-10">
              <LeadFormDialog
                trigger={
                  <button className="bg-accent w-full sm:w-auto text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2">
                    Apply Now — It's Free
                    <ArrowRight size={18} />
                  </button>
                }
              />
              <a
                href="https://api.whatsapp.com/send/?phone=919168242128&text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20session&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/30 w-full sm:w-auto text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-foreground/10 transition-all flex items-center justify-center gap-2"
              >
                <Play size={18} className="fill-current" />
                Book Free Demo
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              {[
                { value: "1500+", label: "Students Placed" },
                { value: "41 LPA", label: "Highest Package" },
                { value: "450+", label: "Hiring Partners" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent">{stat.value}</div>
                  <div className="text-primary-foreground/60 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              <img
                src={heroImage.src}
                alt="Apex IT Academy students collaborating on tech projects"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-card-foreground">Placement Guaranteed</div>
                    <div className="text-xs text-muted-foreground">or full refund</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling marquee bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent/10 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee flex gap-8 whitespace-nowrap">
          {Array(3).fill(null).map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8">
              {["PAY AFTER PLACEMENT", "ONLINE CLASSES", "NO UPFRONT FEE", "PLACEMENT GUARANTEED", "90 DAYS TRAINING"].map((text) => (
                <span key={`${setIdx}-${text}`} className="text-primary-foreground/60 text-sm font-semibold tracking-widest flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
