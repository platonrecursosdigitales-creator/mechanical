import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import { MapPin } from "lucide-react";

export const CoverageSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        listRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cobertura" ref={sectionRef} className="py-16 md:py-24 bg-mb-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="flex justify-center mb-4">
            <SectionEyebrow text={siteData.coverage.eyebrow} />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-mb-navy-dark">
            {siteData.coverage.title}
          </h2>
          <p className="text-lg text-mb-navy/80 font-body">
            {siteData.coverage.text}
          </p>
        </div>

        <div 
          ref={listRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {siteData.coverage.zones.map((zone, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-5 shadow-md rounded-[16px] border border-black/5 hover:border-mb-red/30 transition-colors">
              <MapPin size={20} className="text-mb-red flex-shrink-0 mt-0.5" />
              <span className="font-body text-mb-navy font-medium text-sm leading-relaxed">{zone}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block px-8 py-4 bg-mb-navy-dark text-white font-ui uppercase tracking-wide text-sm font-bold shadow-lg rounded-[14px]">
            {siteData.coverage.closing}
          </p>
        </div>
      </div>
    </section>
  );
};
