import { MessageCircle } from "lucide-react";
import LeadFormDialog from "./LeadFormDialog";

const WhatsAppButton = () => {
  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href="https://api.whatsapp.com/send/?phone=919168242128&text=Hi%2C%20I%20want%20to%20know%20more%20about%20Apex%20IT%20Academy&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-accent-foreground" size={28} />
      </a>

      {/* Sticky mobile CTA */}
      <div className="sticky-cta-mobile">
        <LeadFormDialog
          trigger={
            <button className="w-full bg-accent text-accent-foreground py-3 rounded-xl font-bold text-sm">
              Apply Now — Pay After Placement
            </button>
          }
        />
      </div>
    </>
  );
};

export default WhatsAppButton;
