import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WildernessSafaris } from './components/WildernessSafaris';
import { DualCarousel } from './components/DualCarousel';
import { StorySections } from './components/StorySections';
import { Experiences } from './components/Experiences';
import { PhotographySafari } from './components/PhotographySafari';
import { GuestInformation } from './components/GuestInformation';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Gallery } from './components/Gallery';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-charcoal bg-charcoal selection:bg-desert selection:text-white">
      <Navbar />
      
      {/* Normal Scroll Sections */}
      <div className="relative z-0 bg-charcoal">
        <Hero />
      </div>

      <div id="about" className="relative z-0 bg-warm-white min-h-screen flex items-center py-20">
        <About />
      </div>

      {/* Wilderness Safaris Section */}
      <div id="safari" className="relative z-0 w-full">
        <WildernessSafaris />
      </div>

      {/* Dual Carousel Section */}
      <div className="relative z-0 w-full">
        <DualCarousel />
      </div>

      {/* Alternating Storytelling Sections (Replaces Stacking Cards) */}
      <div id="stories" className="relative z-0 w-full">
        <StorySections />
      </div>

      {/* New Experiences Section */}
      <div id="experiences" className="relative z-0 w-full">
        <Experiences />
      </div>

      {/* Photography Safari Section */}
      <div className="relative z-0 w-full">
        <PhotographySafari />
      </div>

      {/* Guest Information Section */}
      <div className="relative z-0 w-full bg-warm-white">
        <GuestInformation />
      </div>

      {/* Final Normal Scroll Section */}
      <div className="relative z-50 bg-warm-white shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
        {/* Dining Section Removed */}

        <div id="reviews" className="bg-white py-20">
          <Reviews />
        </div>

        {/* Visual Journey / Gallery Section */}
        <div id="gallery" className="h-screen w-full">
          <Gallery />
        </div>

        <div id="contact" className="bg-sandstone/20 py-20">
          <Contact />
        </div>

        <div className="bg-charcoal text-white">
          <Footer />
        </div>
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
