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
  // - We increase the container height to 450vh to allow for a long, smooth scroll.
  // - We use a large gap (60vh) between images in the same column.
  // - The Right column starts significantly lower (145vh vs 100vh).
  // - This creates the "Zipper" effect: Left 1 appears -> Right 1 appears -> Left 2 appears.
  
  const yLeft = useTransform(scrollYProgress, [0, 1], ["100vh", "-350vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["145vh", "-305vh"]);

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
        className="hidden lg:block h-[450vh] relative bg-warm-white"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* CENTRAL TEXT BLOCK (Fixed) */}
          <div className="relative z-0 text-center max-w-xl px-6">
            <h2 className="font-serif text-[3.5rem] text-charcoal mb-8 leading-[1.15]">
              Rajasthan's most authentic and immersive <br /> wildlife  experience.
            </h2>
            <p className="font-sans text-lg text-gray-600 font-light leading-loose mx-auto">
              Shaped by Jawai’s timeless granite landscapes, Jawai Wildframe reveals a world where leopards roam freely, birds fill the skies, and rural communities coexist peacefully with the wild. Each journey blends authentic encounters with a deep sense of place and culture.
            </p>
          </div>

          {/* LEFT IMAGE STACK 
              - Width reduced to 18vw (smaller)
              - Left spacing increased to 5% (space from border)
              - Gap increased to 60vh (space between images for alternating effect)
          */}
          <motion.div 
            style={{ y: yLeft }}
            className="absolute left-[5%] top-0 w-[25vw] flex flex-col gap-[60vh] z-10 pointer-events-none"
          >
            {leftImages.map((img, idx) => (
              <div 
                key={`left-${idx}`} 
                className="w-full aspect-[3/3.036] overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE STACK 
              - Width reduced to 18vw
              - Right spacing increased to 5%
              - Gap increased to 60vh
          */}
          <motion.div 
            style={{ y: yRight }}
            className="absolute right-[5%] top-0 w-[25vw] flex flex-col gap-[60vh] z-10 pointer-events-none"
          >
            {rightImages.map((img, idx) => (
              <div 
                key={`right-${idx}`} 
                className="w-full aspect-[3/3.036] overflow-hidden"
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
