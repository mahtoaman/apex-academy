"use client";

import { useParams, notFound } from "next/navigation";
import { coursesData } from "@/data/courses-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Briefcase, BookOpen, PenTool as Tool, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LeadFormDialog from "@/components/LeadFormDialog";

export default function CoursePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-card py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="container-main relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                {course.duration} Intensive Program
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <LeadFormDialog
                  trigger={
                    <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                      Enroll Today
                    </button>
                  }
                />
                <a 
                  href="#syllabus"
                  className="bg-background border px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted transition-all"
                >
                  View Syllabus
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 bg-background">
          <div className="container-main">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border bg-card/50"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Why This Course?</h3>
                <ul className="space-y-3">
                  {course.whyThisCourse.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground italic">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border bg-card/50"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                  <Tool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tools.map((tool, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-3">
                  {course.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground italic">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border bg-card/50"
              >
                <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Career Roles</h3>
                <div className="grid grid-cols-1 gap-3">
                  {course.jobOpportunities.map((role, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-purple-500" />
                      <span className="font-semibold">{role}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section id="syllabus" className="py-20 bg-card/30">
          <div className="container-main">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Course Modules & Syllabus</h2>
              <p className="text-muted-foreground">Comprehensive curriculum designed by industry experts</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {course.modules.map((module, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-background rounded-2xl border p-6 md:p-8 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {module.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-muted-foreground">
                            <BookOpen className="w-4 h-4 text-accent/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="py-20 bg-background">
          <div className="container-main">
             <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10 max-w-3xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Importance of {course.name}</h2>
                  <div className="space-y-6">
                    {course.importance.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <GraduationCap className="w-6 h-6 shrink-0 text-white/60" />
                        <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
