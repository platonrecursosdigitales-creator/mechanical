import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

import heroBg1 from '../assets/generated/hero-mechanical-brokers.webp';
import heroBg2 from '../assets/generated/gallery-workshop-01.webp';
import heroBg3 from '../assets/generated/rescate-carretero.webp';
import heroBg4 from '../assets/generated/flotillas-mantenimiento.webp';

const bgImages = [heroBg1, heroBg2, heroBg3, heroBg4];

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-eyebrow", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
      )
      .fromTo(".hero-title-line", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6"
      )
      .fromTo(".hero-subtitle", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4"
      )
      .fromTo(".hero-actions", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-48 pb-24 overflow-hidden bg-mb-navy-dark">
      {/* Background Layer with strict overlay and blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background images slider */}
        {bgImages.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[3000ms] ease-in-out transform ${
              index === currentBg ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        
        {/* Blur layer and dark overlay to guarantee text readability */}
        <div className="absolute inset-0 backdrop-blur-sm bg-mb-navy-dark/75 z-10" />
        
        {/* Gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-mb-navy-dark via-mb-navy-dark/90 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20" ref={contentRef}>
        <div className="max-w-[800px]">
          <div className="hero-eyebrow flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-mb-red rounded-full" />
            <span className="text-mb-red font-ui font-bold tracking-[0.15em] text-sm uppercase">
              {siteData.hero.eyebrow}
            </span>
          </div>

          <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] text-white mb-6 uppercase tracking-tight drop-shadow-lg">
            <div className="hero-title-line">
              <span>{siteData.hero.title}</span>
            </div>
            <div className="hero-title-line text-mb-red drop-shadow-md">
              <span>{siteData.hero.titleLine2}</span>
            </div>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-mb-off-white font-medium mb-4 max-w-2xl font-body leading-relaxed">
            {siteData.hero.subtitle}
          </p>

          <p className="hero-subtitle text-mb-muted mb-10 max-w-2xl font-body text-base">
            {siteData.hero.microcopy}
          </p>

          <div className="hero-actions flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="tel:2212707082"
              className="bg-mb-red hover:bg-mb-red-dark text-white px-8 py-4 rounded-[14px] flex items-center justify-center gap-3 transition-colors font-ui text-lg tracking-wide uppercase shadow-lg shadow-mb-red/20"
            >
              <Phone size={20} /> Llamar ahora
            </a>
            <a 
              href="https://wa.me/522212707082" target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-[14px] flex items-center justify-center gap-3 transition-colors font-ui text-lg tracking-wide uppercase shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={20} /> Enviar WhatsApp
            </a>
            <a 
              href="#servicios"
              className="bg-transparent hover:bg-white/5 border-2 border-white/20 text-white px-8 py-4 rounded-[14px] flex items-center justify-center gap-3 transition-colors font-ui text-lg tracking-wide uppercase"
            >
              Ver servicios
            </a>
          </div>

          <div className="hero-actions flex items-center gap-4 text-sm font-ui tracking-wider text-mb-muted uppercase">
            <span className="inline-block px-4 py-1.5 bg-mb-red/10 border border-mb-red text-mb-red rounded-full font-bold">
              {siteData.hero.badge}
            </span>
            <span className="hidden sm:inline-block font-medium">
              {siteData.hero.bottomLine}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
