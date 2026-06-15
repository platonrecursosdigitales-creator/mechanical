import { useEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import { TopContactBar } from "./components/TopContactBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuickServiceCards } from "./components/QuickServiceCards";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { FleetSection } from "./components/FleetSection";
import { RescueSection } from "./components/RescueSection";
import { CoverageSection } from "./components/CoverageSection";
import { ClientsSection } from "./components/ClientsSection";
import { DiagnosticsSection } from "./components/DiagnosticsSection";
import { GallerySection } from "./components/GallerySection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

import gsap from "gsap";

function App() {
  useLenis();

  useEffect(() => {
    // Scroll progress bar
    gsap.to(".scroll-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      }
    });
  }, []);

  return (
    <div className="bg-mb-navy-dark min-h-screen">
      {/* Global Scroll Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 w-full h-[2px] bg-mb-red origin-left scale-x-0 z-[60]" />
      
      <Header />
      
      <main>
        <Hero />
        <QuickServiceCards />
        <AboutSection />
        <ServicesSection />
        <FleetSection />
        <RescueSection />
        <CoverageSection />
        <ClientsSection />
        <DiagnosticsSection />
        <GallerySection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
