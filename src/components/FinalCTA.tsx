import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import LeadFormDialog from "./LeadFormDialog";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 text-balance">
            Ready to Upgrade Your Career?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10 font-body">
            Join 1500+ professionals who transformed their careers. Start your 90-day journey today — pay only after you get placed.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormDialog
                trigger={
                  <button className="bg-accent text-accent-foreground px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2">
                    Apply Now — It's Free
                    <ArrowRight size={20} className="w-5 h-5 sm:w-[20px] sm:h-[20px]" />
                  </button>
                }
              />
              <a
                href="https://api.whatsapp.com/send/?phone=919168242128&text=Hi%2C%20I%20want%20to%20know%20more%20about%20Apex%20IT%20Academy&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/30 text-primary-foreground px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg hover:bg-primary-foreground/10 transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
