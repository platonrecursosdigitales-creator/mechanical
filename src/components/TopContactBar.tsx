import { Phone, Mail, MapPin } from "lucide-react";
import { siteData } from "../data/siteData";

export const TopContactBar = () => {
  return (
    <div className="bg-mb-navy-dark border-b border-white/5 py-2 hidden md:block z-50 relative">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-xs text-mb-muted font-body">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <MapPin size={14} className="text-mb-red" />
            <span>{siteData.contact.locationShort}</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} className="text-mb-red" />
            <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-mb-red">•</span> Rescate 24 hrs
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-mb-red" />
            <a href={`tel:${siteData.contact.phoneOffice.replace(/\s/g, '')}`}>Oficina {siteData.contact.phoneOffice}</a>
          </div>
          <div className="flex items-center gap-2 text-white font-medium">
            <Phone size={14} className="text-mb-red" />
            <a href={`tel:${siteData.contact.phoneMobile.replace(/\s/g, '')}`}>Cel {siteData.contact.phoneMobile}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
