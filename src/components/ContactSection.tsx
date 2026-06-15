import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <SectionEyebrow text={siteData.contactSection.eyebrow} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-mb-navy-dark">
              {siteData.contactSection.title}
            </h2>
            <p className="text-lg text-mb-navy/70 font-body mb-12 leading-relaxed">
              {siteData.contactSection.text}
            </p>

            <div className="space-y-8 bg-mb-off-white p-8 rounded-[20px] border border-black/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mb-red shadow-sm flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-mb-navy-dark text-xl mb-1">Ubicación</h4>
                  <p className="text-mb-navy/80 font-body">{siteData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mb-red shadow-sm flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-mb-navy-dark text-xl mb-1">Teléfonos</h4>
                  <p className="text-mb-navy/80 font-body">Celular: <a href={`tel:${siteData.contact.phoneMobile?.replace(/\s/g, '')}`} className="hover:text-mb-red transition-colors font-medium">{siteData.contact.phoneMobile}</a></p>
                  <p className="text-mb-navy/80 font-body">Oficina: <a href={`tel:${siteData.contact.phoneOffice?.replace(/\s/g, '')}`} className="hover:text-mb-red transition-colors font-medium">{siteData.contact.phoneOffice}</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mb-red shadow-sm flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-mb-navy-dark text-xl mb-1">Correo Electrónico</h4>
                  <p className="text-mb-navy/80 font-body">
                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-mb-red transition-colors font-medium">
                      {siteData.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-mb-navy-dark p-8 md:p-12 shadow-2xl rounded-[24px]">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Nombre</label>
                  <input type="text" className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Empresa</label>
                  <input type="text" className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Teléfono</label>
                  <input type="tel" className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Correo</label>
                  <input type="email" className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Tipo de servicio</label>
                <select className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors appearance-none">
                  <option value="">Selecciona un servicio...</option>
                  <option value="diagnostico">Diagnóstico electrónico</option>
                  <option value="preventivo">Mantenimiento preventivo / Flotillas</option>
                  <option value="rescate">Rescate carretero</option>
                  <option value="reparacion">Reparación mayor</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Ubicación de la unidad</label>
                <input type="text" className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-ui uppercase tracking-wider text-mb-muted font-bold mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-mb-navy-soft border border-white/10 rounded-[12px] text-white px-5 py-3.5 focus:outline-none focus:border-mb-red transition-colors resize-none"></textarea>
              </div>

              <button className="w-full bg-mb-red hover:bg-mb-red-dark text-white rounded-[14px] font-ui uppercase tracking-widest py-4 font-bold transition-colors shadow-lg shadow-mb-red/20">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
