"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LeadFormDialog from "./LeadFormDialog";

const popularCourses = [
  { emoji: "📊", name: "Data Analytics with Gen AI", slug: "data-analytics" },
  { emoji: "🚨", name: "Major Incident Manager", slug: "major-incident-manager" },
  { emoji: "☕", name: "Java Full Stack", slug: "java-full-stack" },
  { emoji: "☁️", name: "AWS DevOps", slug: "aws-devops" },
  { emoji: "📈", name: "Power BI", slug: "power-bi" },
  { emoji: "🤖", name: "Data Science", slug: "data-science" },
  { emoji: "⚡", name: "Salesforce", slug: "salesforce" },
  { emoji: "🐍", name: "Python Developer", slug: "python-developer" },
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/apex-it-logo.avif"
            alt="Apex IT Academy"
            className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-0" : "brightness-100"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Home */}
          {navLinks.slice(0, 1).map((link) => {
            const { isNextLink, href } = getLinkProps(link);
            return isNextLink ? (
              <Link key={link.href} href={href} className={linkClass()}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={href} className={linkClass()}>
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
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 bg-card hover:bg-accent/5 hover:text-accent transition-colors group"
                      >
                        <span className="text-xl leading-none shrink-0">
                          {course.emoji}
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-accent leading-tight">
                          {course.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <Link
                    href="/courses"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 bg-accent/5 border-t border-border/50 hover:bg-accent/10 transition-colors group"
                  >
                    <span className="text-sm font-bold text-foreground">
                      View All 15 Courses
                    </span>
                    <ArrowRight
                      size={15}
                      className="text-accent group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining nav links */}
          {navLinks.slice(1).map((link) => {
            const { isNextLink, href } = getLinkProps(link);
            return isNextLink ? (
              <Link key={link.href} href={href} className={linkClass()}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={href} className={linkClass()}>
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
                return isNextLink ? (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium py-2.5 text-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium py-2.5 text-foreground"
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
                            <span>{course.emoji}</span>
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
                return isNextLink ? (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium py-2.5 text-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium py-2.5 text-foreground"
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
    </motion.nav>
  );
};

export default Navbar;
