import { siteData } from "../data/siteData";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-mb-navy-dark pt-20 pb-8 border-t border-white/5 relative z-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <img 
              src="/src/assets/logo/logo.png" 
              alt="Mechanical Brokers" 
              className="w-auto h-auto object-contain max-w-[150px] mb-6" 
            />
            <p className="text-sm text-mb-muted font-body leading-relaxed mb-6">
              {siteData.hero.subtitle}
            </p>
            <p className="text-mb-red font-ui uppercase font-bold tracking-widest">
              {siteData.hero.badge}
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Servicios Rápidos</h4>
            <ul className="space-y-3 font-body text-sm text-mb-muted">
              <li><a href="#servicios" className="hover:text-mb-red transition-colors">Diagnóstico Electrónico</a></li>
              <li><a href="#flotillas" className="hover:text-mb-red transition-colors">Mantenimiento de Flotillas</a></li>
              <li><a href="#rescate" className="hover:text-mb-red transition-colors">Rescate Carretero 24 hrs</a></li>
              <li><a href="#servicios" className="hover:text-mb-red transition-colors">Servicio a Domicilio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4 font-body text-sm text-mb-muted">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-mb-red flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${siteData.contact.phoneMobile?.replace(/\s/g, '')}`} className="block hover:text-mb-red transition-colors">Cel: {siteData.contact.phoneMobile}</a>
                  <a href={`tel:${siteData.contact.phoneOffice?.replace(/\s/g, '')}`} className="block hover:text-mb-red transition-colors">Oficina: {siteData.contact.phoneOffice}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-mb-red flex-shrink-0 mt-0.5" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-mb-red transition-colors">{siteData.contact.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-mb-red flex-shrink-0 mt-0.5" />
                <span>{siteData.contact.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Ubicación y Cobertura</h4>
            <p className="font-body text-sm text-mb-muted leading-relaxed mb-6">
              Servicio en ruta para Tlaxcala, Puebla, Hidalgo, Veracruz, Morelos y Circuito Mexiquense.
            </p>
            <a 
              href="#cobertura" 
              className="inline-block text-sm font-ui uppercase font-bold tracking-wider text-mb-white hover:text-mb-red transition-colors border-b border-mb-red pb-1"
            >
              Ver mapa de cobertura
            </a>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-mb-muted/50 font-body">
            &copy; {new Date().getFullYear()} Mechanical Brokers. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-mb-muted/50 font-body">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
