"use client";

import { useParams, notFound } from "next/navigation";
import { coursesData } from "@/data/courses-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormDialog from "@/components/LeadFormDialog";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Briefcase,
  BookOpen,
  Star,
  Zap,
  ChevronDown,
  ChevronRight,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";

const courseIcons: Record<string, string> = {
  "data-analytics": "📊",
  "major-incident-manager": "🚨",
  "data-science": "🤖",
  "java-full-stack": "☕",
  "aws-devops": "☁️",
  "azure-devops": "🔵",
  "power-bi": "📈",
  "business-analytics": "💼",
  sap: "🏗️",
  salesforce: "⚡",
  "python-developer": "🐍",
  "dot-net": "🪟",
  "ui-ux-design": "🎨",
  "management-information-systems": "🗄️",
  apse: "🛠️",
};

export default function CoursePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = coursesData.find((c) => c.slug === slug);
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden min-h-[80vh] flex items-center">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-main section-padding relative z-10 pt-28 sm:pt-36 pb-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/courses" className="hover:text-accent transition-colors">Courses</Link>
            <ChevronRight size={14} />
            <span className="text-primary-foreground/80">{course.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent text-sm font-semibold">
                    {course.duration} · Live Training + Real Projects
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl sm:text-6xl leading-none mt-1">
                    {courseIcons[course.slug] || "📚"}
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
                    {course.title}
                  </h1>
                </div>

                <p className="text-primary-foreground/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                  {course.description}
                </p>

                {/* Tool pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/80 px-3.5 py-1.5 rounded-lg font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <LeadFormDialog
                    trigger={
                      <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 transition-all flex items-center justify-center gap-2">
                        Enroll Now — It&apos;s Free <ArrowRight size={18} />
                      </button>
                    }
                  />
                  <a
                    href="#syllabus"
                    className="border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-foreground/10 transition-all flex items-center justify-center gap-2"
                  >
                    <BookOpen size={18} />
                    View Syllabus
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — 2 cols: Sticky enroll card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 shadow-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl">
                    {courseIcons[course.slug] || "📚"}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-base leading-tight">{course.name}</div>
                    <div className="text-muted-foreground text-sm">{course.duration} Intensive</div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {[
                    { icon: <Clock size={15} />, text: `${course.duration} Live Training` },
                    { icon: <Users size={15} />, text: "Mentor-led Batches" },
                    { icon: <Award size={15} />, text: "Industry Certificate" },
                    { icon: <Briefcase size={15} />, text: "100% Placement Support" },
                    { icon: <Zap size={15} />, text: "Pay Only After Placement" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="text-accent">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <LeadFormDialog
                  trigger={
                    <button className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-bold text-base hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mb-3">
                      Apply for Free <ArrowRight size={16} />
                    </button>
                  }
                />
                <a
                  href="https://api.whatsapp.com/send/?phone=919168242128&text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20course&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center border border-border py-3.5 rounded-xl text-sm font-semibold text-foreground hover:bg-muted transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────── */}
      <section className="py-10 bg-background border-b border-border/50">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "1500+", label: "Students Placed" },
              { value: "41 LPA", label: "Highest Package" },
              { value: "450+", label: "Hiring Partners" },
              { value: "90 Days", label: "Intensive Training" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-accent mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Why this course */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">About This Course</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Why Choose <span className="gradient-text">{course.name}?</span>
              </h2>
              <ul className="space-y-4">
                {course.whyThisCourse.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-accent" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Importance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Industry Relevance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Why <span className="gradient-text">{course.name}</span> Matters
              </h2>
              <div className="space-y-4">
                {course.importance.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent-foreground font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TOOLS & SKILLS ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-card/40 border-y border-border/50">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Curriculum Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">
              Skills &amp; <span className="gradient-text">Tools You'll Master</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...course.tools, ...course.skills]
              .filter((v, i, a) => a.indexOf(v) === i)
              .map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Star size={14} className="text-accent" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">{skill}</span>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ─── SYLLABUS / MODULES ──────────────────────────────────── */}
      <section id="syllabus" className="py-16 sm:py-24 bg-background">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: sticky overview */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <span className="text-accent font-semibold text-sm uppercase tracking-widest">Full Curriculum</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
                  Course <span className="gradient-text">Modules</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {course.modules.length} comprehensive modules crafted by industry experts to make you job-ready.
                </p>
                <div className="space-y-2">
                  {course.modules.map((mod, i) => (
                    <button
                      key={i}
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      className={`w-full text-left text-sm px-4 py-2.5 rounded-lg font-medium transition-all ${
                        openModule === i
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="opacity-60 mr-2">0{i + 1}</span>
                      {mod.title.replace(/Module \d+: /, "")}
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <LeadFormDialog
                    trigger={
                      <button className="w-full bg-accent text-accent-foreground py-3.5 rounded-xl font-bold text-sm hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                        Download Syllabus PDF <ArrowRight size={15} />
                      </button>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-2 space-y-4">
              {course.modules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.06, 0.4) }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openModule === i
                      ? "border-accent/50 shadow-lg shadow-accent/10"
                      : "border-border/60 hover:border-accent/25"
                  }`}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-base transition-all ${
                        openModule === i
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base sm:text-lg text-foreground leading-tight">
                        {module.title}
                      </div>
                      <div className="text-muted-foreground text-sm mt-0.5">
                        {module.items.length} topics
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                        openModule === i ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion body */}
                  <motion.div
                    initial={false}
                    animate={{ height: openModule === i ? "auto" : 0, opacity: openModule === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div className="border-t border-border/50 pt-4 grid sm:grid-cols-2 gap-3">
                        {module.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-accent/5 transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={11} className="text-accent" />
                            </div>
                            <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAREER ROLES ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-card/40 border-y border-border/50">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Career Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">
              Job Roles After <span className="gradient-text">Completion</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Our graduates are working at top MNCs and product companies across India and the globe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {course.jobOpportunities.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-5 bg-background rounded-2xl border border-border/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-accent" />
                </div>
                <span className="font-bold text-foreground">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 gradient-hero">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-semibold">Zero Upfront Fee</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
              Ready to Start Your{" "}
              <span className="gradient-text">{course.name}</span>{" "}
              Journey?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
              Join hundreds of students who already transformed their careers. Enroll today — pay only after you get placed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LeadFormDialog
                trigger={
                  <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 transition-all flex items-center justify-center gap-2">
                    Apply Now — It&apos;s Free <ArrowRight size={18} />
                  </button>
                }
              />
              <Link
                href="/courses"
                className="border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-foreground/10 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Browse All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
