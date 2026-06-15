import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const AnimatedImage = ({ src, alt, className = "" }: AnimatedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    if (!container || !image || !overlay) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.to(overlay, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.2,
      ease: "power4.inOut"
    }, 0)
    .fromTo(image, {
      scale: 1.06
    }, {
      scale: 1,
      duration: 1.6,
      ease: "power3.out"
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-mb-navy-dark z-10 w-full h-full"
      />
      <img 
        ref={imageRef}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};
