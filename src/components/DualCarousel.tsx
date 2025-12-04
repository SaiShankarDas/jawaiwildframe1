import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../data/assets';

const leftImages = [
  { src: ASSETS.experiences.leopardSafari, alt: "Leopard Sighting" },
  { src: ASSETS.experiences.villageWalk, alt: "Village Life" },
  { src: ASSETS.experiences.hillSunrise, alt: "Granite Hills" },
];

const rightImages = [
  { src: ASSETS.experiences.luxuryStay, alt: "Luxury Tents" },
  { src: ASSETS.experiences.bushDinner, alt: "Dining in the Wild" },
  { src: ASSETS.experiences.birdWatching, alt: "Migratory Birds" },
];

export const DualCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // ANIMATION LOGIC:
  // Start values > 100vh ensure they are initially off-screen (below)
  // End values < -100vh ensure they scroll fully up and out
  // The 'Right' set starts later (140vh vs 100vh) to create the staggered "Left first" effect
  const yLeft = useTransform(scrollYProgress, [0, 1], ["100vh", "-150vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["160vh", "-150vh"]);

  return (
    <>
      {/* =========================================
          MOBILE / TABLET VIEW (Standard Layout)
          ========================================= */}
      <div className="lg:hidden bg-warm-white py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-charcoal mb-6 leading-tight">
            Rajasthan's most unique <br /> safari experience.
          </h2>
          <p className="font-sans text-gray-600 font-light leading-relaxed">
            Framed by granite hills and the ancient Aravalli mountain range, Jawai Wildframe is defined by the magical intermingling of wildlife and rural village life.
          </p>
        </div>
        <div className="space-y-12">
          {[...leftImages, ...rightImages].map((img, idx) => (
            <div key={idx} className="w-full">
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover aspect-[4/5]" />
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Scroll-Locked Animation)
          ========================================= */}
      <section 
        ref={targetRef} 
        className="hidden lg:block h-[300vh] relative bg-warm-white"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* CENTRAL TEXT BLOCK (Fixed) */}
          <div className="relative z-0 text-center max-w-2xl px-6">
            <h2 className="font-serif text-[3.5rem] text-charcoal mb-8 leading-[1.15]">
              Rajasthan's most unique <br /> safari experience.
            </h2>
            <p className="font-sans text-lg text-gray-600 font-light leading-loose max-w-xl mx-auto">
              Framed by granite hills and the ancient Aravalli mountain range, Jawai Wildframe is defined by the magical intermingling of wildlife and rural village life that has coexisted peacefully for centuries. Encounters with wildlife are punctuated by engagements with local communities and a deep immersion into the local culture.
            </p>
          </div>

          {/* LEFT IMAGE STACK */}
          <motion.div 
            style={{ y: yLeft }}
            className="absolute left-0 top-0 w-[28vw] flex flex-col gap-[20vh] z-10 pointer-events-none"
          >
            {leftImages.map((img, idx) => (
              <div 
                key={`left-${idx}`} 
                className="w-full aspect-[4/5] overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE STACK */}
          <motion.div 
            style={{ y: yRight }}
            className="absolute right-0 top-0 w-[28vw] flex flex-col gap-[20vh] z-10 pointer-events-none"
          >
            {rightImages.map((img, idx) => (
              <div 
                key={`right-${idx}`} 
                className="w-full aspect-[4/5] overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};
