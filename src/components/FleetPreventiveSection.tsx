import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";
import { AnimatedImage } from "./AnimatedImage";
import { CheckCircle2 } from "lucide-react";
import flotillasImg from "../assets/generated/flotillas-mantenimiento.webp";

export const FleetPreventiveSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      tl.fromTo(
        contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      )
      .fromTo(
        listRef.current?.children || [],
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="flotillas" ref={sectionRef} className="py-16 md:py-24 bg-white text-mb-navy-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative w-full">
            <div className="absolute top-10 -left-10 w-full h-full bg-mb-red/10 -z-10" />
            <AnimatedImage 
              src={flotillasImg}
              alt="Mantenimiento de flotillas"
              className="w-full aspect-[4/3] object-cover shadow-xl"
            />
          </div>
          
          <div ref={contentRef}>
            <SectionEyebrow text={siteData.fleet.eyebrow} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-mb-navy-dark">
              {siteData.fleet.title}
            </h2>
            <p className="text-lg text-mb-navy/80 font-body mb-4">
              {siteData.fleet.intro}
            </p>
            <p className="text-lg text-mb-navy/80 font-body mb-8">
              {siteData.fleet.intro2}
            </p>
            
            <ul ref={listRef} className="space-y-4 mb-10">
              {siteData.fleet.checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-mb-red flex-shrink-0 mt-1" />
                  <span className="font-body text-mb-navy">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/522212707082?text=Hola, me interesa información sobre mantenimiento de flotillas."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex bg-mb-navy hover:bg-mb-navy-dark text-white px-8 py-4 items-center justify-center transition-colors font-ui text-lg tracking-wide uppercase"
            >
              Solicitar revisión de flotilla
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
