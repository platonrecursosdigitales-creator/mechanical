import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import { Terminal, Check } from "lucide-react";

export const DiagnosticsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        listRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={sectionRef} className="py-24 bg-mb-navy-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionEyebrow text={siteData.diagnostics.eyebrow} />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                {siteData.diagnostics.title}
              </h2>
              <p className="text-lg text-mb-muted font-body mb-10 leading-relaxed">
                {siteData.diagnostics.text}
              </p>
              
              <div className="bg-mb-navy p-8 text-white rounded-[20px] shadow-2xl relative overflow-hidden border border-white/10 group">
                <Terminal size={36} className="text-mb-red mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-ui uppercase tracking-widest text-sm mb-3 text-mb-muted">Análisis Preciso</p>
                <p className="font-heading font-bold text-2xl leading-tight">Detección y solución técnica avanzada.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteData.diagnostics.items.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-mb-navy-soft p-6 rounded-[16px] border border-white/5 hover:border-mb-red/50 transition-colors flex items-start gap-4"
                >
                  <div className="bg-mb-navy-dark p-2 rounded-full shadow-sm text-mb-red mt-1 flex-shrink-0">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-body text-white font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
