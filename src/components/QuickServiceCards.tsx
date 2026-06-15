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

export const QuickServiceCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative z-30 -mt-20 pb-24 px-6 lg:px-12 container mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.quickCards.map((card, index) => {
          const Icon = iconMap[card.icon];
          return (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-mb-navy-soft border border-white/10 p-8 rounded-[20px] shadow-xl hover:-translate-y-[6px] transition-transform duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-mb-navy-dark rounded-full flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:border-mb-red/50 transition-colors">
                  <Icon size={26} className="text-mb-red" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-mb-muted text-sm font-body leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
