"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

// Using the same course list from LeadFormDialog
const courses = [
  "Data Analytics with Gen AI",
  "Data Science",
  "Java Full Stack",
  "AWS DevOps",
  "Azure DevOps",
  "Power BI",
  "Major Incident Manager",
  "Business Analytics",
  "APSE",
  "SAP",
  "Salesforce",
  "Python Developer",
  "DOT NET",
  "Management Information Systems",
  "UI UX Design",
];

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    // Show popup after 3 seconds on every visit
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I'm interested in ${formData.course}. Email: ${formData.email}. I would like to book a free demo session!`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919168242128&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-2 border-accent/20">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center p-1.5 rounded-full bg-accent/20">
              <Sparkles size={14} className="text-accent" />
            </span>
            <span className="text-accent text-sm font-bold uppercase tracking-widest">
              Limited Time Welcome Offer
            </span>
          </div>
          <DialogTitle className="text-2xl font-extrabold text-foreground leading-tight">
            Launch Your IT Career Today!
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Welcome to Apex IT Academy! Book a completely free demo session and get exclusive counseling from our expert career advisors. Let's find the right course for you.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <input
            required
            placeholder="Your Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-border/60 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-border/60 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-border/60 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <select
            required
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-border/60 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            <option value="" disabled hidden>
              Select Course of Interest
            </option>
            {courses.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-extrabold text-base hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(25,200,100,0.2)] hover:shadow-[0_0_30px_rgba(25,200,100,0.3)] mt-2"
          >
            Claim Free Demo Session
          </button>
          <p className="text-xs text-center text-muted-foreground pt-2">
            No strings attached. Take your first step toward a 41 LPA career today!
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
