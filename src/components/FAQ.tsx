import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the Pay After Placement model?",
    a: "You pay a nominal registration fee of ₹15,000 to secure your seat. The remaining course fee is paid only after you secure a job. All details about the payment structure are explained during the free demo session.",
  },
  {
    q: "What if I don't get placed?",
    a: "We have a 95% placement success rate with 1500+ students placed. We provide dedicated placement support including mock interviews, resume building, and interview preparation until you get placed.",
  },
  {
    q: "Is there any bond or agreement?",
    a: "Complete details about the Income Share Agreement and terms are explained transparently during the demo session. We believe in full transparency with our students.",
  },
  {
    q: "What is the minimum salary guarantee?",
    a: "Yes, we have a minimum salary guarantee in place. The specific details are shared during the demo session based on the course you choose.",
  },
  {
    q: "Is there any eligibility criteria?",
    a: "Our courses are designed for working professionals and post-graduates. During the demo session, our counselors will help you identify the best course based on your background.",
  },
  {
    q: "Are classes online or offline?",
    a: "All our classes are conducted online through live interactive sessions. We also have an office in Pune for in-person consultations if needed.",
  },
  {
    q: "What is the duration of the courses?",
    a: "Our intensive training programs are designed for 90 days, covering everything from fundamentals to advanced topics with real-world projects.",
  },
  {
    q: "Who are the hiring partners?",
    a: "We have 450+ hiring partners including Tech Mahindra, Deloitte, Accenture, Capgemini, HCLTech, Coforge, Zensar, Wipro, Infosys, and many more top MNCs and startups.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faqs" ref={ref} className="section-padding bg-background">
      <div className="container-main max-w-3xl" data-reveal="down">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">FAQs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
