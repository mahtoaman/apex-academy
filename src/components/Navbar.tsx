"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LeadFormDialog from "./LeadFormDialog";

import { 
  BarChart3, 
  Siren, 
  Coffee, 
  Cloud, 
  TrendingUp, 
  Bot, 
  Zap, 
  Code 
} from "lucide-react";

const popularCourses = [
  { icon: <BarChart3 className="text-blue-500" />, name: "Data Analytics with Gen AI", slug: "data-analytics" },
  { icon: <Siren className="text-red-500" />, name: "Major Incident Manager", slug: "major-incident-manager" },
  { icon: <Coffee className="text-amber-700" />, name: "Java Full Stack", slug: "java-full-stack" },
  { icon: <Cloud className="text-sky-400" />, name: "AWS DevOps", slug: "aws-devops" },
  { icon: <TrendingUp className="text-green-500" />, name: "Power BI", slug: "power-bi" },
  { icon: <Bot className="text-slate-500" />, name: "Data Science", slug: "data-science" },
  { icon: <Zap className="text-yellow-500" />, name: "Salesforce", slug: "salesforce" },
  { icon: <Code className="text-green-600" />, name: "Python Developer", slug: "python-developer" },
];

const navLinks = [
  { label: "Home", href: "/", section: "home" },
  { label: "How It Works", href: "/#how-it-works", section: "how-it-works" },
  { label: "Placements", href: "/#placements", section: "placements" },
  { label: "Testimonials", href: "/#testimonials", section: "testimonials" },
  { label: "FAQs", href: "/#faqs", section: "faqs" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.location.pathname === "/") {
        const sections = navLinks.map((l) => l.section);
        let current = "home";
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 200) {
            current = section;
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const getLinkProps = (link: (typeof navLinks)[0]) => {
    if (isHome) return { isNextLink: false, href: `#${link.section}` };
    return { isNextLink: true, href: link.href };
  };

  const linkClass = (isActive = false) =>
    `text-sm font-medium transition-colors hover:text-accent ${
      scrolled ? "text-foreground" : "text-primary-foreground/90"
    } ${isActive ? "text-accent font-semibold" : ""}`;

  const isCoursesActive =
    pathname === "/courses" || pathname.startsWith("/courses/");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300"
    >
      {/* Top Marquee Header */}
      <div className="w-full h-7 sm:h-8 bg-accent text-accent-foreground flex items-center overflow-hidden z-50">
        <div className="flex items-center marquee gap-8 w-max px-4">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="flex gap-8 items-center shrink-0 font-light">
              <span className="text-xs sm:text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                Admissions Open for 2024 Batch
              </span>
              <span className="text-xs sm:text-sm shrink-0">✨ 100% Placement Guarantee</span>
              <span className="text-xs sm:text-sm shrink-0">💼 Pay ONLY After You Get Placed</span>
              <span className="text-xs sm:text-sm text-yellow-300 shrink-0">🔥 Up To 41 LPA Highest Package</span>
            </div>
          ))}
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg border-b"
            : "bg-transparent"
        }`}
      >
      <div className="container-main flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/apex-logo.png"
            alt="Apex IT Academy"
            className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-0" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Home */}
          {navLinks.slice(0, 1).map((link) => {
            const { isNextLink, href } = getLinkProps(link);
            const isActive = isHome ? activeSection === link.section : pathname === link.href;
            return isNextLink ? (
              <Link key={link.href} href={href} className={linkClass(isActive)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={href} className={linkClass(isActive)}>
                {link.label}
              </a>
            );
          })}

          {/* Courses mega-dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              href="/courses"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              } ${isCoursesActive ? "text-accent font-semibold" : ""}`}
            >
              Courses
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-card rounded-2xl border shadow-2xl overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
                >
                  {/* Header */}
                  <div className="px-5 pt-4 pb-3 border-b border-border/50">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">
                      Popular Courses
                    </p>
                  </div>

                  {/* Course grid */}
                  <div className="grid grid-cols-2 gap-px bg-border/30 p-0">
                    {popularCourses.map((course) => (
                      <button
                        key={course.slug}
                        onClick={(e) => {
                          e.preventDefault();
                          setDropdownOpen(false);
                          router.push(`/courses/${course.slug}`);
                        }}
                        className="flex items-center gap-3 px-4 py-3.5 bg-card hover:bg-accent/5 hover:text-accent transition-colors group w-full text-left"
                      >
                        <span className="text-xl leading-none shrink-0 border border-border/50 p-1.5 rounded-md bg-background shadow-sm group-hover:bg-accent/10 transition-colors">
                          {course.icon}
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-accent leading-tight">
                          {course.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdownOpen(false);
                      router.push('/courses');
                    }}
                    className="flex items-center justify-between px-5 py-3.5 bg-accent/5 border-t border-border/50 hover:bg-accent/10 transition-colors group w-full text-left"
                  >
                    <span className="text-sm font-bold text-foreground">
                      View All 15 Courses
                    </span>
                    <ArrowRight
                      size={15}
                      className="text-accent group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining nav links */}
          {navLinks.slice(1).map((link) => {
            const { isNextLink, href } = getLinkProps(link);
            const isActive = isHome ? activeSection === link.section : pathname === link.href;
            return isNextLink ? (
              <Link key={link.href} href={href} className={linkClass(isActive)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={href} className={linkClass(isActive)}>
                {link.label}
              </a>
            );
          })}

          <LeadFormDialog
            trigger={
              <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">
                Enroll Now
              </button>
            }
          />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Home */}
              {navLinks.slice(0, 1).map((link) => {
                const { isNextLink, href } = getLinkProps(link);
                const isActive = isHome ? activeSection === link.section : pathname === link.href;
                return isNextLink ? (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-medium py-2.5 ${isActive ? "text-accent" : "text-foreground"}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-medium py-2.5 ${isActive ? "text-accent" : "text-foreground"}`}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile Courses expandable */}
              <div>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className={`w-full flex items-center justify-between py-2.5 font-medium ${
                    isCoursesActive ? "text-accent" : "text-foreground"
                  }`}
                >
                  Courses
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pb-2 space-y-1 border-l-2 border-accent/30 ml-1">
                        {popularCourses.map((course) => (
                          <Link
                            key={course.slug}
                            href={`/courses/${course.slug}`}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors"
                          >
                            <span className="border border-border/50 p-1 rounded-md bg-background">{course.icon}</span>
                            <span>{course.name}</span>
                          </Link>
                        ))}
                        <Link
                          href="/courses"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileCoursesOpen(false);
                          }}
                          className="flex items-center gap-2 py-2 px-2 rounded-lg text-sm font-bold text-accent hover:bg-accent/5 transition-colors"
                        >
                          View All 15 Courses <ArrowRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other links */}
              {navLinks.slice(1).map((link) => {
                const { isNextLink, href } = getLinkProps(link);
                const isActive = isHome ? activeSection === link.section : pathname === link.href;
                return isNextLink ? (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-medium py-2.5 ${isActive ? "text-accent" : "text-foreground"}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-medium py-2.5 ${isActive ? "text-accent" : "text-foreground"}`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-2">
                <LeadFormDialog
                  trigger={
                    <button className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm">
                      Enroll Now
                    </button>
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
