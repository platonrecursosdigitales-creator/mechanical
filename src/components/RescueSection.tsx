import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { Phone, AlertTriangle } from "lucide-react";
import rescueBg from "../assets/generated/rescate-carretero.webp";

export const RescueSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section 
      id="rescate" 
      ref={sectionRef} 
      className="relative py-32 flex items-center justify-center bg-mb-navy-dark overflow-hidden"
    >
      {/* Background layer with strict opacity */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url(${rescueBg})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mb-navy-dark via-mb-navy-dark/95 to-mb-navy-dark/80" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={contentRef} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-mb-red animate-pulse" size={24} />
            <span className="text-mb-red font-ui uppercase tracking-widest text-sm font-bold">
              {siteData.rescue.eyebrow}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            {siteData.rescue.title}
          </h2>
          
          <p className="text-xl text-mb-off-white font-body mb-4 leading-relaxed">
            {siteData.rescue.text1}
          </p>
          
          <div className="bg-mb-red/10 border-l-4 border-mb-red p-6 mb-10 rounded-r-[12px]">
            <p className="text-lg text-white font-body font-medium">
              {siteData.rescue.text2}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a 
              href="https://wa.me/522212707082?text=Solicito rescate carretero urgente."
              target="_blank" rel="noopener noreferrer"
              className="bg-mb-red hover:bg-mb-red-dark text-white px-8 py-4 rounded-[14px] flex items-center justify-center gap-3 transition-colors font-ui text-lg tracking-wide uppercase shadow-xl shadow-mb-red/20"
            >
              <AlertTriangle size={20} /> Solicitar rescate
            </a>
            <a 
              href={`tel:${siteData.contact.phoneMobile?.replace(/\s/g, '') || "2212707082"}`}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-[14px] flex items-center justify-center gap-3 transition-colors font-ui text-lg tracking-wide uppercase backdrop-blur-sm"
            >
              <Phone size={20} /> Llamar ahora
            </a>
          </div>
          
          <p className="text-sm text-mb-muted font-ui tracking-wider uppercase opacity-80">
            * {siteData.rescue.microcopy}
          </p>
        </div>
      </div>
    </section>
  );
};
