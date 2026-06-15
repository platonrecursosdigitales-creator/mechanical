import { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteData } from "../data/siteData";
import { SectionEyebrow } from "./SectionEyebrow";

export const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      });

      tl.to(lineRef.current, {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut"
      })
      .fromTo(
        stepsRef.current?.children || [],
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        },
        "-=1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-mb-navy relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionEyebrow text={siteData.process.eyebrow} />
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            {siteData.process.title}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto md:ml-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-[4px] bg-white/5 rounded-full" />
          <div 
            ref={lineRef}
            className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-[4px] bg-mb-red origin-top scale-y-0 rounded-full"
          />

          <div ref={stepsRef} className="space-y-10">
            {siteData.process.steps.map((step) => (
              <div key={step.id} className="relative pl-20 group">
                {/* Step Number Dot */}
                <div className="absolute left-[13px] md:left-[17px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-mb-navy-dark border-[3px] border-mb-red flex items-center justify-center text-mb-red font-ui font-bold text-xs md:text-sm group-hover:bg-mb-red group-hover:text-white transition-colors duration-300 shadow-lg">
                  {step.id}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-mb-red-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-mb-muted font-body text-lg leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
