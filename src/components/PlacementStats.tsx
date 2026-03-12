import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1500+", label: "Students Successfully Placed" },
  { value: "₹41 LPA", label: "Highest Package Achieved" },
  { value: "₹7.2 LPA", label: "Average Salary Package" },
  { value: "450+", label: "Hiring Partner Companies" },
  { value: "95%", label: "Placement Success Rate" },
  { value: "15+", label: "Industry-Ready Courses" },
];

const companies = [
  "Tech Mahindra", "Deloitte", "Accenture", "Capgemini", 
  "HCLTech", "Coforge", "Zensar", "Wipro", "Infosys"
];

const PlacementStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="placements" ref={ref} className="stats-dark section-padding">
      <div className="container-main" data-reveal="up">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Placement Record</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
            Numbers That <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-body">
            Our placement track record is the proof that our training works
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-accent/10 bg-accent/5"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-2">{stat.value}</div>
              <div className="text-sm opacity-70 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Company logos as text */}
        <div>
          <p className="text-center text-sm font-semibold opacity-50 uppercase tracking-widest mb-6">
            Our Students Work At
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company) => (
              <span
                key={company}
                className="px-5 py-2.5 rounded-lg border border-accent/10 bg-accent/5 text-sm font-semibold opacity-80"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
