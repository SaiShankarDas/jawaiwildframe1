export type Category = 
  | "All"
  | "Leopards"
  | "Village Life"
  | "Temples"
  | "Birds"
  | "Wildlife"
  | "Camping"
  | "Landscape"
  | "Farming"
  | "Vehicles";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  width?: string; // Optional for masonry layouts if needed later
  height?: string;
}

export const CATEGORIES: Category[] = [
  "All",
  "Leopards",
  "Village Life",
  "Temples",
  "Birds",
  "Wildlife",
  "Camping",
  "Landscape",
  "Farming",
  "Vehicles"
];

// Placeholder data structure expecting images in /public/assets/gallery/...
// You will need to add actual images to these folders in your public directory.
export const GALLERY_IMAGES: GalleryImage[] = [
  // Leopards
  { id: 'l1', category: 'Leopards', alt: 'Leopard on Granite', src: '/assets/gallery/leopards/1.jpg' },
  { id: 'l2', category: 'Leopards', alt: 'Leopard Cub', src: '/assets/gallery/leopards/2.jpg' },
  { id: 'l3', category: 'Leopards', alt: 'Leopard Resting', src: '/assets/gallery/leopards/3.jpg' },
  { id: 'l4', category: 'Leopards', alt: 'Leopard Hunt', src: '/assets/gallery/leopards/4.jpg' },

  // Village Life
  { id: 'v1', category: 'Village Life', alt: 'Rabari Shepherd', src: '/assets/gallery/village/1.jpg' },
  { id: 'v2', category: 'Village Life', alt: 'Village Morning', src: '/assets/gallery/village/2.jpg' },
  { id: 'v3', category: 'Village Life', alt: 'Traditional Attire', src: '/assets/gallery/village/3.jpg' },

  // Temples
  { id: 't1', category: 'Temples', alt: 'Hilltop Temple', src: '/assets/gallery/temples/1.jpg' },
  { id: 't2', category: 'Temples', alt: 'Temple Rituals', src: '/assets/gallery/temples/2.jpg' },

  // Birds
  { id: 'b1', category: 'Birds', alt: 'Flamingos at Dam', src: '/assets/gallery/birds/1.jpg' },
  { id: 'b2', category: 'Birds', alt: 'Kingfisher', src: '/assets/gallery/birds/2.jpg' },
  { id: 'b3', category: 'Birds', alt: 'Migratory Flock', src: '/assets/gallery/birds/3.jpg' },

  // Wildlife (General)
  { id: 'w1', category: 'Wildlife', alt: 'Crocodile', src: '/assets/gallery/wildlife/1.jpg' },
  { id: 'w2', category: 'Wildlife', alt: 'Blue Bull', src: '/assets/gallery/wildlife/2.jpg' },
  { id: 'w3', category: 'Wildlife', alt: 'Hyena', src: '/assets/gallery/wildlife/3.jpg' },

  // Camping
  { id: 'c1', category: 'Camping', alt: 'Luxury Tent Exterior', src: '/assets/gallery/camping/1.jpg' },
  { id: 'c2', category: 'Camping', alt: 'Campfire Night', src: '/assets/gallery/camping/2.jpg' },
  { id: 'c3', category: 'Camping', alt: 'Morning Coffee', src: '/assets/gallery/camping/3.jpg' },

  // Landscape
  { id: 'ls1', category: 'Landscape', alt: 'Granite Hills Sunset', src: '/assets/gallery/landscape/1.jpg' },
  { id: 'ls2', category: 'Landscape', alt: 'Jawai Dam View', src: '/assets/gallery/landscape/2.jpg' },
  { id: 'ls3', category: 'Landscape', alt: 'Monsoon Greenery', src: '/assets/gallery/landscape/3.jpg' },

  // Farming
  { id: 'f1', category: 'Farming', alt: 'Mustard Fields', src: '/assets/gallery/farming/1.jpg' },
  { id: 'f2', category: 'Farming', alt: 'Local Farmers', src: '/assets/gallery/farming/2.jpg' },

  // Vehicles
  { id: 'vh1', category: 'Vehicles', alt: 'Safari Jeep Front', src: '/assets/gallery/vehicles/1.jpg' },
  { id: 'vh2', category: 'Vehicles', alt: 'Off-roading', src: '/assets/gallery/vehicles/2.jpg' },
];
