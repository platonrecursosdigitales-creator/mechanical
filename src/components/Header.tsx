import { useState, useEffect } from "react";
import { siteData } from "../data/siteData";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "../assets/logo/logo.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Flotillas", href: "#flotillas" },
    { name: "Rescate 24 hrs", href: "#rescate" },
    { name: "Cobertura", href: "#cobertura" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col items-center pointer-events-none">
      {/* Top Contact Bar - Fades out on scroll */}
      <div 
        className={`w-full bg-mb-navy-dark border-b border-white/5 transition-all duration-300 pointer-events-auto ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "py-2.5 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] lg:text-xs text-mb-off-white font-body gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 w-full md:w-auto">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin size={14} className="text-mb-red" />
              <span>{siteData.contact.locationShort}</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} className="text-mb-red" />
              <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-mb-red animate-pulse"></span>
              Rescate 24 hrs
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={14} className="text-mb-red" />
              <a href={`tel:${siteData.contact.phoneOffice.replace(/\s/g, '')}`}>Oficina {siteData.contact.phoneOffice}</a>
            </div>
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <Phone size={14} className="text-mb-red" />
              <a href={`tel:${siteData.contact.phoneMobile.replace(/\s/g, '')}`}>Cel {siteData.contact.phoneMobile}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphism Navigation Bar */}
      <div className={`w-full transition-all duration-300 pointer-events-auto px-4 lg:px-8 ${scrolled ? "pt-4" : "pt-4"}`}>
        <div className={`mx-auto max-w-7xl rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
          scrolled 
            ? "bg-mb-navy-dark/80 border-white/10 shadow-lg shadow-black/20 py-3 px-6" 
            : "bg-mb-navy/50 border-white/5 py-4 px-6"
        }`}>
          <div className="flex justify-between items-center">
            <a href="#" className="flex-shrink-0">
              <img
                src={logoImg}
                alt="Mechanical Brokers Logo"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "max-w-[120px]" : "max-w-[150px]"}`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 font-ui font-semibold tracking-wide text-[14px]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-mb-off-white hover:text-mb-red transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${siteData.contact.phoneMobile?.replace(/\s/g, '') || "2212707082"}`}
                className="bg-mb-red hover:bg-mb-red-dark text-white px-6 py-2.5 rounded-xl flex items-center gap-2 transition-colors uppercase shadow-md shadow-mb-red/20 text-sm"
              >
                <Phone size={16} />
                Llamar ahora
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white hover:text-mb-red transition-colors p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-mb-navy-dark/95 backdrop-blur-xl z-40 transition-transform duration-300 pt-32 px-6 overflow-y-auto pointer-events-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 font-ui text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-mb-red border-b border-white/10 pb-4 uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${siteData.contact.phoneMobile?.replace(/\s/g, '') || "2212707082"}`}
            className="bg-mb-red text-center hover:bg-mb-red-dark text-white px-6 py-4 rounded-xl transition-colors uppercase mt-4 flex justify-center items-center gap-3 shadow-lg shadow-mb-red/20"
          >
            <Phone size={20} /> Llamar ahora
          </a>
        </nav>
      </div>
    </header>
  );
};
