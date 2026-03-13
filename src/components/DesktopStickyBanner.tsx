"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Play, HeadphonesIcon, ChevronDown } from "lucide-react";
import LeadFormDialog from "./LeadFormDialog";

const DesktopStickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past half of the viewport height (roughly half hero section)
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 hidden lg:flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.1)] bg-navy"
        >
          {/* Left section: Talk to advisor */}
          <div className="flex h-14">
            <LeadFormDialog
              trigger={
                <button className="bg-accent text-accent-foreground px-6 py-2 flex items-center gap-3 h-full hover:bg-accent/90 transition-colors">
                  <HeadphonesIcon size={20} />
                  <span className="font-bold whitespace-nowrap">Talk To Career Advisor</span>
                  <ChevronDown size={18} />
                </button>
              }
            />
          </div>

          {/* Middle section: Contacts */}
          <div className="flex-1 flex items-center justify-center gap-6 text-white text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-xl leading-none">🇮🇳</span>
              <span>Pune : +91 91682 42128</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-xl leading-none">🇮🇳</span>
              <span>Online : +91 76691 00251</span>
            </div>
          </div>

          {/* Right section: Demo Button */}
          <div className="flex h-14 pr-4">
            <LeadFormDialog
              trigger={
                <button className="bg-white/10 text-white hover:bg-white/20 px-8 h-full flex items-center gap-2 font-bold transition-colors">
                  <Play size={18} className="fill-current" />
                  Ask For Demo
                </button>
              }
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopStickyBanner;
