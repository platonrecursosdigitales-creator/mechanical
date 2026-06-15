import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Building2 } from "lucide-react";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";

export const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 50, // Slower duration as requested
        repeat: -1,
      });

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const duplicatedClients = [...siteData.clients.list, ...siteData.clients.list];

  return (
    <section ref={sectionRef} className="py-24 bg-mb-navy border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-3xl">
          <SectionEyebrow text={siteData.clients.eyebrow} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
            {siteData.clients.title}
          </h2>
          <p className="text-mb-muted font-body mb-4">
            {siteData.clients.text}
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-8 py-8 bg-mb-navy-dark shadow-inner border-y border-white/10">
        <div ref={marqueeRef} className="flex gap-12 md:gap-20 items-center px-8">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-mb-navy/60 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
            >
              <div className="bg-mb-red/10 p-2 rounded-lg group-hover:bg-mb-red/20 transition-colors">
                <Building2 size={24} className="text-mb-red" />
              </div>
              <span className="font-ui font-bold text-lg md:text-xl tracking-wider text-white/90 uppercase drop-shadow-md">
                {client}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-mb-navy-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-mb-navy-dark to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-xs text-mb-muted/60 font-ui tracking-wider uppercase text-center">
          * {siteData.clients.note}
        </p>
      </div>
    </section>
  );
};
