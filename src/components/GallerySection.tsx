import { useEffect, useRef } from "react";
import gsap from "gsap";

import img1 from '../assets/generated/gallery-workshop-01.webp';
import img2 from '../assets/generated/laboratorio-diesel.webp';
import img3 from '../assets/generated/gallery-workshop-02.webp';
import img4 from '../assets/generated/gallery-workshop-03.webp';

export const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        galleryRef.current?.children || [],
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [img1, img2, img3, img4];


  return (
    <section ref={sectionRef} className="py-16 md:py-16 md:py-24 bg-mb-off-white">
      <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-mb-navy-dark">
          Trabajo real en unidades comerciales
        </h2>
        <p className="text-xl text-mb-navy/70 font-body max-w-2xl mx-auto">
          Atención técnica para unidades diésel, flotillas, rescates y mantenimiento.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-[20px] shadow-lg group bg-mb-navy ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              } ${
                index === 3 ? "md:col-span-2 lg:col-span-1 lg:row-span-2 auto-rows-[600px]" : ""
              }`}
            >
              <div className="absolute inset-0 bg-mb-navy-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Galería de trabajo técnico ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-mb-navy-dark"><span class="text-white/30 font-heading text-xl">Mechanical Brokers</span></div>';
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
