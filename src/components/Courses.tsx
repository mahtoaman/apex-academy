import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import LeadFormDialog from "./LeadFormDialog";

const itCourses = [
  { name: "Major Incident Manager", skills: ["ITIL", "ServiceNow", "Communication", "SLA"], featured: true, hot: true },
  { name: "Data Analytics with Gen AI", skills: ["Python", "SQL", "Power BI", "Gen AI"], hot: true },
  { name: "Data Science", skills: ["Python", "ML", "Deep Learning", "Statistics"] },
  { name: "Java Full Stack", skills: ["Java", "Spring Boot", "React", "MySQL"] },
  { name: "AWS DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"], hot: true },
  { name: "Azure DevOps", skills: ["Azure", "Terraform", "Jenkins", "Git"] },
  { name: "Power BI", skills: ["DAX", "Data Modeling", "Dashboards", "SQL"] },
  { name: "Business Analytics", skills: ["Excel", "SQL", "Tableau", "Statistics"] },
  { name: "SAP", skills: ["SAP FICO", "SAP MM", "SAP SD", "ABAP"] },
  { name: "Salesforce", skills: ["Admin", "Development", "Lightning", "Apex"] },
  { name: "Python Developer", skills: ["Python", "Django", "REST APIs", "PostgreSQL"] },
  { name: "DOT NET", skills: [".NET Core", "C#", "Azure", "SQL Server"] },
  { name: "UI UX Design", skills: ["Figma", "Prototyping", "User Research", "Design Systems"] },
  { name: "Management Information Systems", skills: ["ERP", "BI Tools", "Database", "Analytics"] },
  { name: "APSE", skills: ["App Support", "ITIL", "Monitoring", "Troubleshooting"] },
];

const certCourses = [
  "AWS DevOps Certification",
  "Azure DevOps Certification",
  "Data Analytics Certification",
  "Data Science Certification",
  "SAP Certification",
  "Salesforce Certification",
  "Power BI Certification",
];

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? itCourses : itCourses.slice(0, 6);

  return (
    <section id="courses" ref={ref} className="section-padding bg-card">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Programs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Industry-Ready <span className="gradient-text">IT Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            90-day intensive training with live projects, mock interviews, and guaranteed placement support
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayed.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className={`bg-background rounded-2xl p-6 border card-hover group relative overflow-hidden transition-all duration-300 ${
                course.featured 
                  ? 'border-accent border-2 ring-4 ring-accent/20 shadow-[0_0_30px_rgba(25,200,100,0.4)] relative z-10 scale-[1.02]' 
                  : ''
              }`}
            >
              {(course.hot || course.featured) && (
                <div className="absolute top-4 right-4">
                  <Badge className={`border-0 text-xs font-bold ${
                    course.featured 
                      ? 'bg-accent text-accent-foreground shadow-lg' 
                      : 'bg-gold text-gold-foreground'
                  }`}>
                    {course.featured ? '⭐ Most Popular' : '🔥 Trending'}
                  </Badge>
                </div>
              )}
              <h3 className="text-lg font-bold text-foreground mb-3 pr-20">{course.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.map((skill) => (
                  <span key={skill} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-body">90 Days • Live + Projects</span>
                <LeadFormDialog
                  trigger={
                    <button className="text-accent font-semibold text-sm hover:underline">
                      Enroll →
                    </button>
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && itCourses.length > 6 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAll(true)}
              className="text-accent font-semibold hover:underline"
            >
              View All {itCourses.length} Courses →
            </button>
          </div>
        )}

        {/* Certification Courses */}
        <div className="bg-background rounded-2xl border p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">🎓 Certification Courses</h3>
          <div className="flex flex-wrap gap-3">
            {certCourses.map((cert) => (
              <span key={cert} className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
