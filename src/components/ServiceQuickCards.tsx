import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Laptop, Truck, Users, MapPin } from "lucide-react";
import { siteData } from "../data/siteData";

const iconMap: Record<string, any> = {
  laptop: Laptop,
  truck: Truck,
  users: Users,
  "map-pin": MapPin,
};

export const ServiceQuickCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 52,
          opacity: 0,
          scale: 0.96,
          rotateX: 4,
          x: (i) => (i === 0 ? -26 : i === cardsRef.current.length - 1 ? 26 : 0),
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          x: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative z-30 -mt-12 md:-mt-24 pb-16 px-6 lg:px-12 container mx-auto perspective-1000"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.quickCards.map((card, index) => {
          const Icon = iconMap[card.icon];
          return (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-mb-navy-soft border border-white/10 p-8 rounded-sm group hover:-translate-y-[6px] hover:scale-[1.015] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 transform-style-3d cursor-pointer"
            >
              <div className="w-12 h-12 bg-mb-navy-dark rounded flex items-center justify-center mb-6 group-hover:bg-mb-red transition-colors duration-300">
                <Icon size={24} className="text-mb-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="text-mb-muted text-sm font-body leading-relaxed">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
