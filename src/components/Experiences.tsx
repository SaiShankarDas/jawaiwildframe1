import React, { useRef } from 'react';
import { FadeIn } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const experiences = [
{
    title: "Jawai Leopard Safari",
    desc: "An exclusive wildlife experience through Jawai’s sculpted granite hills, guided by native trackers who understand each territory.\nEnjoy refined opportunities to encounter leopards moving gracefully across pristine wilderness landscapes.",
    price: "₹3,500/-",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Prime Safari",
    desc: "A beautifully balanced safari designed for guests seeking curated wildlife encounters and scenic photography across varied wilderness zones.\nExperience golden-hour lighting, serene landscapes, and immersive sightings throughout Jawai’s most active viewing areas.",
    price: "₹4,500/-",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Premium Safari",
    desc: "Our most elevated safari blends extended tracking, multi-zone access, and dramatic viewpoints for exceptional wildlife experiences.\nEnjoy sunrise or sunset moments while exploring remote terrains known for consistent animal movement and breathtaking scenery.",
    price: "₹5,500/-",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Birds & Crocodile Safari",
    desc: "A serene nature experience along the tranquil Jawai Dam, offering sightings of flamingos, pelicans, storks, and crocodiles.\nExplore calm waters, broad skies, and lush wetlands that create beautifully peaceful wildlife moments for guests.",
    price: "₹3,000/-",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80"
  },
  {
    title: "Village & Temple Safari",
    desc: "A meaningful cultural immersion through Rabari villages and ancient temples shaped by centuries of heritage and coexistence.\nDiscover serene landscapes, traditional lifestyles, and spiritual narratives carried forward by Jawai’s warm communities.",
    price: "₹4,000/-",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Jungle Maad Safari",
    desc: "An evocative exploration into the wild Maad forests featuring remote trails, dramatic terrain, and elusive predators.\nIdeal for luxury adventurers seeking authentic wilderness experiences across Jawai’s rugged, untouched, and atmospheric landscapes.",
    price: "₹6,000/-",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wildlife Photography Safari",
    desc: "A curated photography experience with flexible tracking, optimal lighting, and extended access to active wildlife zones.\nCapture elegant wildlife moments against striking granite backdrops and naturally illuminated vistas throughout Jawai.",
    price: "₹5,000/-",
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80"
  }
];

export const Experiences = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-warm-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading + Intro */}
        <FadeIn className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light tracking-wide mb-6">EXPERIENCES</h2>
          <p className="font-sans text-gray-600 font-light leading-relaxed text-lg md:text-xl">
            At Jawai Wildframe, every experience is an invitation into the untamed beauty of the Jawai wilderness. From dedicated leopard tracking to serene mornings at the dam, each moment immerses you in the granite hills, ancient culture, and vibrant wildlife that define this extraordinary region.
          </p>
        </FadeIn>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide px-6 md:px-12"
        style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[30vw] snap-center flex flex-col h-full group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-md relative">
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-[22rem] object-cover rounded-md hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif mt-6 text-charcoal group-hover:text-desert transition-colors duration-300">
              {exp.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mt-3 font-light flex-grow text-sm md:text-base">
              {exp.desc}
            </p>

            {/* Divider */}
            <div className="bg-desert h-[1px] w-full my-4 opacity-50"></div>

            {/* Price */}
            <p className="text-forest-green font-semibold tracking-wide">
              {exp.price}
            </p>
          </motion.div>
        ))}
        
        {/* Spacer for end of scroll */}
        <div className="w-6 flex-shrink-0" />
      </div>

      {/* Navigation Buttons (Desktop) - Moved Below & Centered */}
      <div className="hidden md:flex justify-center gap-4 mt-4">
        <button 
          onClick={scrollLeft} 
          className="p-3 rounded-full border border-charcoal/20 hover:bg-charcoal hover:text-white transition-all duration-300"
          aria-label="Scroll Left"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={scrollRight} 
          className="p-3 rounded-full border border-charcoal/20 hover:bg-charcoal hover:text-white transition-all duration-300"
          aria-label="Scroll Right"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
