"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormDialog from "@/components/LeadFormDialog";
import Link from "next/link";
import { coursesData } from "@/data/courses-data";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Clock,
  Users,
  Trophy,
  BookOpen,
  Flame,
  Star,
  ChevronRight,
} from "lucide-react";

const categories = [
  { label: "All Courses", value: "all" },
  { label: "Data & Analytics", value: "data" },
  { label: "DevOps & Cloud", value: "cloud" },
  { label: "Development", value: "dev" },
  { label: "Enterprise", value: "enterprise" },
];

const categoryMap: Record<string, string[]> = {
  data: ["data-analytics", "data-science", "power-bi", "business-analytics", "management-information-systems"],
  cloud: ["aws-devops", "azure-devops"],
  dev: ["java-full-stack", "python-developer", "dot-net", "ui-ux-design"],
  enterprise: ["major-incident-manager", "sap", "salesforce", "apse"],
};

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

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = coursesData.filter((c) => {
    return (
      activeCategory === "all" ||
      (categoryMap[activeCategory] || []).includes(c.slug)
    );
  });

  const featuredCourse = coursesData.find((c) => c.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative gradient-hero min-h-[90vh] flex items-center overflow-hidden">
        {/* Blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-16 left-10 w-80 h-80 bg-accent/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container-main section-padding relative z-10 pt-28 sm:pt-36">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-medium">
                  15 Industry-Ready Programs
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 text-balance">
                Find the{" "}
                <span className="gradient-text">Right Course</span>{" "}
                for Your IT Career
              </h1>

              <p className="text-primary-foreground/70 text-base sm:text-xl mb-10 max-w-xl font-body leading-relaxed">
                From Data Analytics to Cloud DevOps — choose from 15 expert-led
                courses, pay only after you land your dream job.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-10">
                {[
                  { icon: <Users size={16} />, value: "1500+", label: "Students Placed" },
                  { icon: <Trophy size={16} />, value: "41 LPA", label: "Highest Package" },
                  { icon: <BookOpen size={16} />, value: "15", label: "Live Courses" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col items-center lg:items-start"
                  >
                    <span className="text-2xl sm:text-3xl font-extrabold text-accent">
                      {s.value}
                    </span>
                    <span className="text-primary-foreground/60 text-xs font-medium">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>


            </motion.div>

            {/* Right – hero image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
                <img
                  src="/courses-hero.png"
                  alt="Students learning IT skills at Apex IT Academy"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating badge */}
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
                      <div className="font-bold text-sm text-card-foreground">
                        Pay After Placement
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Zero upfront fee
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Top badge */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -top-5 -right-4 bg-card rounded-xl shadow-xl px-4 py-2.5 border flex items-center gap-2"
                >
                  <Flame size={16} className="text-orange-500" />
                  <span className="text-sm font-bold text-card-foreground">
                    15 Live Courses
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-accent/10 backdrop-blur-sm py-3 overflow-hidden">
          <div className="marquee flex gap-8 whitespace-nowrap">
            {Array(3)
              .fill(null)
              .map((_, setIdx) => (
                <div key={setIdx} className="flex gap-8">
                  {[
                    "DATA ANALYTICS",
                    "AWS DEVOPS",
                    "JAVA FULL STACK",
                    "POWER BI",
                    "SAP",
                    "SALESFORCE",
                    "PYTHON",
                    "UI UX DESIGN",
                  ].map((text) => (
                    <span
                      key={`${setIdx}-${text}`}
                      className="text-primary-foreground/60 text-sm font-semibold tracking-widest flex items-center gap-4"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {text}
                    </span>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSE ────────────────────────────────────── */}
      {featuredCourse && (
        <section className="py-16 bg-card/50 border-b">
          <div className="container-main px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Star size={18} className="text-accent fill-accent" />
              <span className="text-sm font-bold text-accent uppercase tracking-widest">
                Most Popular
              </span>
            </div>
            <Link href={`/courses/${featuredCourse.slug}`}>
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="group relative bg-background rounded-3xl border-2 border-accent/30 overflow-hidden shadow-[0_0_40px_rgba(25,200,100,0.15)] hover:shadow-[0_0_60px_rgba(25,200,100,0.25)] transition-all duration-500 p-8 md:p-12"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent" />
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs font-bold uppercase tracking-wider">
                      ⭐ Featured Program
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {featuredCourse.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {featuredCourse.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredCourse.tools.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold text-sm group-hover:bg-accent/90 transition-colors">
                        Explore Course <ArrowRight size={16} />
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                        <Clock size={14} />
                        {featuredCourse.duration} Intensive Program
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {featuredCourse.jobOpportunities.map((job, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-card rounded-xl border"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <ChevronRight size={14} className="text-accent" />
                        </div>
                        <span className="font-semibold text-foreground">
                          {job}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* ── ALL COURSES GRID ────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                Our Programs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-2">
                All{" "}
                <span className="gradient-text">IT Courses</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                {filtered.length} programs available
              </p>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.value
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                      : "bg-card border text-muted-foreground hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg">No courses found for this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <Link key={course.slug} href={`/courses/${course.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: Math.min(i * 0.04, 0.3), duration: 0.5 }}
                    className={`h-full group bg-background rounded-2xl border p-6 card-hover relative overflow-hidden flex flex-col transition-all duration-300 ${
                      course.featured
                        ? "border-accent/50 shadow-[0_0_24px_rgba(25,200,100,0.15)]"
                        : "hover:border-accent/30"
                    }`}
                  >
                    {/* Top-right badge */}
                    {(course.hot || course.featured) && (
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`border-0 text-xs font-bold ${
                            course.featured
                              ? "bg-accent text-accent-foreground"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {course.featured ? "⭐ Most Popular" : "🔥 Trending"}
                        </Badge>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                      {courseIcons[course.slug] || "📚"}
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 pr-20 group-hover:text-accent transition-colors">
                      {course.name}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                      {course.description}
                    </p>

                    {/* Tool pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Clock size={12} />
                        {course.duration} • Live + Projects
                      </span>
                      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
      <section className="py-20 gradient-hero">
        <div className="container-main px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">
                Pay After Placement
              </span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-foreground mb-6">
              Not sure which course{" "}
              <span className="gradient-text">to pick?</span>
            </h2>
            <p className="text-primary-foreground/70 text-base mb-10 font-body">
              Book a free 1-on-1 counselling session and our career advisors
              will help you choose the best path based on your background and
              goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LeadFormDialog
                trigger={
                  <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all flex items-center justify-center gap-2">
                    Book Free Counselling <ArrowRight size={18} />
                  </button>
                }
              />
              <a
                href="https://api.whatsapp.com/send/?phone=919168242128&text=Hi%2C%20I%20want%20a%20free%20course%20counselling%20session&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-foreground/10 transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
