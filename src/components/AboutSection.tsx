import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import diagImg from "../assets/generated/diagnostic-electronico.webp";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-mb-off-white text-mb-navy-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div ref={textRef} className="max-w-2xl">
            <SectionEyebrow text={siteData.about.eyebrow} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-mb-navy-dark">
              {siteData.about.title}
            </h2>
            <div className="space-y-6 text-mb-navy/80 font-body text-lg leading-relaxed">
              {siteData.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 p-8 bg-white rounded-[20px] shadow-lg border-l-4 border-mb-red relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mb-red/5 rounded-full -mr-16 -mt-16" />
              <p className="font-heading font-bold text-xl italic text-mb-navy-dark relative z-10">
                "{siteData.about.highlight}"
              </p>
            </div>
            <p className="mt-8 font-ui font-bold text-xl uppercase tracking-widest text-mb-red">
              {siteData.about.closing}
            </p>
          </div>
          
          <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-mb-navy group">
            {/* Using the generated diagnostic image but protecting it visually */}
            <div className="absolute inset-0 bg-mb-navy-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={diagImg}
              alt="Mecánico especializado en diagnóstico electrónico"
              className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                // Fallback in case image is missing
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement?.classList.add('bg-mb-navy-dark', 'flex', 'items-center', 'justify-center');
                if (target.parentElement) {
                   target.parentElement.innerHTML = '<span class="text-white font-heading text-2xl opacity-30">Diagnóstico Electrónico</span>';
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
