import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import * as Icons from "lucide-react";

export const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 56, opacity: 0 },
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
    <section id="servicios" ref={sectionRef} className="py-24 bg-mb-navy-dark relative overflow-hidden">
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
                className="bg-mb-navy border border-white/5 p-8 group hover:bg-mb-navy-soft transition-colors duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-mb-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-12 h-12 bg-mb-navy-dark flex items-center justify-center mb-6 text-mb-red">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-mb-red-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-mb-muted text-sm leading-relaxed mb-6">
                  {service.text}
                </p>
                <a 
                  href={`https://wa.me/522212707082?text=Hola, me interesa solicitar información sobre: ${service.title}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-mb-red text-sm font-ui font-bold uppercase tracking-wider hover:text-white transition-colors"
                >
                  Solicitar información <Icons.ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
