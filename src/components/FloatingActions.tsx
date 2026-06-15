import { siteData } from "../data/siteData";
import { MessageCircle, Phone } from "lucide-react";

export const FloatingActions = () => {
  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4">
        <a 
          href={`tel:${siteData.contact.phoneMobile.replace(/\s/g, '')}`}
          className="w-14 h-14 bg-mb-red hover:bg-mb-red-dark text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Llamar ahora"
        >
          <Phone size={24} />
        </a>
        <a 
          href="https://wa.me/522212707082" target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Enviar WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-black/10 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:${siteData.contact.phoneMobile.replace(/\s/g, '')}`}
          className="flex-1 bg-mb-red text-white py-4 flex justify-center items-center gap-2 font-ui uppercase font-bold tracking-wider text-sm active:bg-mb-red-dark transition-colors"
        >
          <Phone size={18} /> Llamar
        </a>
        <a 
          href="https://wa.me/522212707082" target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-4 flex justify-center items-center gap-2 font-ui uppercase font-bold tracking-wider text-sm active:bg-[#128C7E] transition-colors"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
};
