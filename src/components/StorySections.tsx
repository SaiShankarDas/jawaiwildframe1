import React from 'react';
import { CardSection } from './ui/CardSection';

interface StoryData {
  title: string;
  text: React.ReactNode;
  image: string;
  imageAlt: string;
  id: string;
  label: string;
}

const stories: StoryData[] = [
  {
    title: "The Land of Leopards & Living Heritage",
    label: "Wilderness",
    // Image 1: Landscape/Nature
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Leopard in wildlife",
    text: (
      <p>
        Jawai is shaped by ancient granite hills, open valleys, lakes, and a rare harmony between humans and wildlife. Leopards rest in rocky caves above villages, wolves and hyenas move through rugged passes, sloth bears roam the forest edges, and over a hundred bird species gather near the Jawai Dam. It is one of India’s most extraordinary natural ecosystems.
      </p>
    ),
    id: "leopards"
  },
  {
    title: "Guided by Native Naturalists",
    label: "Expertise",
    // Image 2: Jeep/Safari
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Native Naturalist",
    text: (
      <p>
        Led by Balveer Singh Mewar, a true son of Jawai raised in Jeewda village, our safaris are shaped by instinct, lived experience, and deep familiarity with the land. Balveer knows every trail, leopard territory, and hidden passage — offering authentic, conservation-rooted wildlife tracking rather than scripted tours.
      </p>
    ),
    id: "naturalists"
  },
  {
    title: "Signature Jawai Safaris",
    label: "Adventure",
    // Image 3: Landscape
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Jeep Safari",
    text: (
      <>
        <p>
          From dedicated Leopard Tracking Safaris to multi-zone Premium Safaris at sunrise and sunset, every journey is crafted to reveal Jawai’s wildest moments. Birds & Crocodile Safaris take you across the calm waters of the Jawai Dam — home to flamingos, pelicans, raptors, and marsh crocodiles.
        </p>
        <p className="mt-4">
          Village & Temple Safaris and Maad Jungle Safaris offer deeper immersion into Jawai’s cultural and ecological heritage.
        </p>
      </>
    ),
    id: "safaris"
  },
  {
    title: "Stay, Dine & Camp in the Wild Heart of Jawai",
    label: "Hospitality",
    // Image 4: Camping/Night
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Camping in the wild",
    text: (
      <p>
        Enjoy peaceful evenings under starry skies, hilltop camping near the Jawai Dam, breakfast overlooking calm waters filled with birdlife, and warm Rajasthani hospitality. Every setup is safe, comfortable, and closely connected to nature — offering raw wilderness without compromising on care.
      </p>
    ),
    id: "stay"
  }
];

export const StorySections = () => {
  return (
    <>
      {stories.map((story, index) => {
        // Determine Theme based on index
        // 1 & 3 (Index 0 & 2) -> White
        // 2 & 4 (Index 1 & 3) -> Green
        const isGreen = index % 2 !== 0;

        return (
          <CardSection 
            key={index} 
            index={index} 
            id={story.id}
            noPadding={true}
            className="bg-charcoal" // Base background
          >
            <section className="relative h-full w-full flex items-center justify-center">
              <img 
                src={story.image} 
                alt={story.imageAlt}
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Removed Overlay for clearer, brighter images as per reference */}
              
              <div className="relative z-10 flex items-center justify-center px-6 w-full">
                {/* Reduced padding to p-8 md:p-14 for a tighter, more balanced look */}
                <div className={`max-w-3xl w-full rounded-2xl shadow-2xl p-8 md:p-14 ${isGreen ? 'bg-forest-green' : 'bg-white'}`}>
                  
                  {/* Label */}
                  <p className={`text-xs uppercase tracking-wide mb-4 font-bold ${isGreen ? 'text-ivory/70' : 'text-gray-500'}`}>
                    {story.label}
                  </p>

                  {/* Title */}
                  <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight ${isGreen ? 'text-ivory' : 'text-charcoal'}`}>
                    {story.title}
                  </h2>

                  {/* Description */}
                  <div className={`leading-relaxed text-base md:text-lg ${isGreen ? 'text-ivory/80' : 'text-gray-600'}`}>
                    {story.text}
                  </div>

                  {/* Button */}
                  <button className={`inline-block mt-8 border px-8 py-3 rounded-md text-sm tracking-wide uppercase font-bold transition-all duration-300 ${
                    isGreen 
                      ? 'border-ivory text-ivory hover:bg-ivory hover:text-forest-green' 
                      : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  }`}>
                    Explore
                  </button>
                </div>
              </div>
            </section>
          </CardSection>
        );
      })}
    </>
  );
};
