import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-main section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/apex-logo.png"
                alt="Apex IT Academy"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm opacity-60 font-body leading-relaxed">
              Transforming careers through industry-ready IT training with our Pay After Placement model.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Courses", "How It Works", "Placements", "FAQs"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="block text-sm opacity-60 hover:opacity-100 transition-opacity font-body"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold mb-4">Popular Courses</h4>
            <div className="space-y-2">
              {["Data Analytics with Gen AI", "Java Full Stack", "AWS DevOps", "Data Science", "Salesforce"].map((course) => (
                <span key={course} className="block text-sm opacity-60 font-body">{course}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 opacity-60 flex-shrink-0" />
                <span className="text-sm opacity-60 font-body">Pune, Maharashtra, India</span>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=919168242128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone size={16} className="opacity-60" />
                <span className="text-sm opacity-60 hover:opacity-100 transition-opacity font-body">+91 9168242128</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail size={16} className="opacity-60" />
                <span className="text-sm opacity-60 font-body">info@apexitacademy.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-40 font-body">© {currentYear} Apex IT Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm opacity-40 hover:opacity-100 transition-opacity font-body">Privacy Policy</a>
            <a href="#" className="text-sm opacity-40 hover:opacity-100 transition-opacity font-body">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
