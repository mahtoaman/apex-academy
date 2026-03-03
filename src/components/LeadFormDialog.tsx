import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface LeadFormDialogProps {
  trigger: ReactNode;
}

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

const LeadFormDialog = ({ trigger }: LeadFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I'm interested in ${formData.course}. My qualification: ${formData.qualification}. Email: ${formData.email}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919168242128&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Book a Free Demo Session</DialogTitle>
          <p className="text-sm text-muted-foreground">Fill in your details and we'll get back to you within 24 hours.</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <input
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            required
            placeholder="Qualification (e.g. B.Tech, MCA)"
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <select
            required
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            Book Free Demo →
          </button>
          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to our Terms & Privacy Policy
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
