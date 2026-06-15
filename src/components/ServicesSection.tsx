import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import * as Icons from "lucide-react";

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-16 md:py-24 bg-mb-navy-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionEyebrow text={siteData.services.eyebrow} />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            {siteData.services.title}
          </h2>
          <p className="text-xl text-mb-muted font-body">
            {siteData.services.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.items.map((service) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')] || Icons.Wrench;
            
            return (
              <div 
                key={service.id}
                className="bg-mb-navy rounded-[20px] p-8 group hover:bg-mb-navy-soft hover:shadow-2xl hover:shadow-mb-red/5 transition-all duration-300 relative border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-mb-navy-dark flex items-center justify-center mb-6 text-mb-red shadow-inner border border-white/5 group-hover:bg-mb-red group-hover:text-white transition-colors">
                  <IconComponent size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 leading-tight group-hover:text-mb-red-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-mb-muted text-sm leading-relaxed mb-8">
                  {service.text}
                </p>
                <a 
                  href={`https://wa.me/522212707082?text=Hola, me interesa solicitar información sobre: ${service.title}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-mb-red text-white text-sm font-ui font-bold uppercase tracking-wider px-5 py-2.5 rounded-[10px] transition-colors mt-auto absolute bottom-8"
                >
                  Solicitar información <Icons.ArrowRight size={16} />
                </a>
                <div className="h-8"></div> {/* Spacer for absolute button */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
