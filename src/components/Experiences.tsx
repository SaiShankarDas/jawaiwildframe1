import React from 'react';
import { FadeIn } from './ui/Section';
import { ASSETS } from '../data/assets';

const experiences = [
  { title: "Leopard Safari", image: ASSETS.experiences.leopardSafari },
  { title: "Luxury Tented Stay", image: ASSETS.experiences.luxuryStay },
  { title: "Jawai Village Walk", image: ASSETS.experiences.villageWalk },
  { title: "Hill Sunrise", image: ASSETS.experiences.hillSunrise },
  { title: "Bush Dinner", image: ASSETS.experiences.bushDinner },
  { title: "Birdwatching", image: ASSETS.experiences.birdWatching }
];

export const Experiences = () => {
  return (
    // Changed justify-center to justify-start
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-start">
      {/* Added mt-4 to give just a tiny bit of breathing room from the very top edge if needed, or keep 0 */}
      <div className="text-left mb-12">
        <span className="text-desert uppercase tracking-widest text-sm font-bold">Curated Moments</span>
        <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-4">Signature Experiences</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1} className="group relative h-[200px] lg:h-[250px] overflow-hidden rounded-lg cursor-pointer">
            <img 
              src={exp.image} 
              alt={exp.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-serif text-xl md:text-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {exp.title}
              </h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
