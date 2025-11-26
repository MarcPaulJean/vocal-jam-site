

export interface GalleryItem {
  id: number;
  artist: string;
  event: string;
  type: 'video' | 'photo';
  quote: string;
  imageUrl: string;
  style: string;
  videoId?: string; // Ajout de l'ID YouTube optionnel
}

export const galleryItems: GalleryItem[] = [
  // --- VIDÉOS / CRÉATIONS ---
  {
    id: 1,
    artist: "Margo A.",
    event: "Fête de la Musique",
    type: "video",
    quote: "Auteur-compositeur, j'ai chanté ma création pour la première fois sur scène. Un moment inoubliable grâce au son pro.",
    imageUrl: "https://img.youtube.com/vi/TePmOgPjmho/maxresdefault.jpg",
    style: "Compo Originale",
    videoId: "TePmOgPjmho"
  },
  {
    id: 10,
    artist: "Eric P.",
    event: "Studio Session",
    type: "video",
    quote: "Un travail de ré-arrangement musical original pour donner une toute nouvelle dimension à l'œuvre.",
    imageUrl: "https://img.youtube.com/vi/hKhwAQ3gMH8/maxresdefault.jpg",
    style: "Ré-arrangement",
    videoId: "hKhwAQ3gMH8"
  },
  {
    id: 3,
    artist: "Christophe B.",
    event: "Évènement familial",
    type: "video",
    quote: "Interpréter cette création originale de Marco (Paroles et Musique) avec un son aussi pur, c'était une émotion brute.",
    imageUrl: "https://img.youtube.com/vi/_axiAIe3rfQ/hqdefault.jpg",
    style: "Création (Marco)",
    videoId: "_axiAIe3rfQ"
  },
  {
    id: 4,
    artist: "Clémence P.",
    event: "Session Live",
    type: "video",
    quote: "Une collaboration artistique complète. J'ai interprété mes titres avec les arrangements musicaux sur mesure signés Marco.",
    imageUrl: "https://img.youtube.com/vi/LEgGo4p5ROY/maxresdefault.jpg",
    style: "Compo / Arrangements",
    videoId: "LEgGo4p5ROY"
  },
  {
    id: 5,
    artist: "Anne G. & Marc A.",
    event: "Évènement familial",
    type: "video",
    quote: "Un duo pour témoigner de notre engagement. Une création intégrale de Marco (Paroles, Musique et Arrangements).",
    imageUrl: "https://img.youtube.com/vi/cNS6c9fKqI4/maxresdefault.jpg",
    style: "Création Duo",
    videoId: "cNS6c9fKqI4"
  },

  // --- PHOTOS / SOUVENIRS (CARROUSEL) ---
  {
    id: 6,
    artist: "L'Équipe & Vous",
    event: "Backstage",
    type: "photo",
    quote: "La musique, c'est d'abord une rencontre humaine. Préparation et rires avant le show.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    style: "Souvenir",
  },
  {
    id: 7,
    artist: "Session Studio",
    event: "Enregistrement",
    type: "photo",
    quote: "Le moment où la magie opère : quand votre composition prend vie pour la première fois.",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
    style: "Studio",
  },
  {
    id: 8,
    artist: "Le Public",
    event: "Soirée Privée",
    type: "photo",
    quote: "Ce partage d'énergie indescriptible entre l'artiste et son public.",
    imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    style: "Live",
  },
  {
    id: 9,
    artist: "Duo Acoustique",
    event: "Répétition",
    type: "photo",
    quote: "Trouver la bonne harmonie, le bon accord. Un travail de précision et d'écoute.",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800",
    style: "Répétition",
  },
  // Nouveaux items pour le carrousel (Exemples)
  {
    id: 11,
    artist: "Jam Session",
    event: "Improvisation",
    type: "photo",
    quote: "Quand les musiciens se lâchent après le concert. Pure énergie.",
    imageUrl: "https://images.unsplash.com/photo-1519508544483-fa87121222f1?auto=format&fit=crop&q=80&w=800",
    style: "Jam",
  },
  {
    id: 12,
    artist: "Festival d'Été",
    event: "Plein Air",
    type: "photo",
    quote: "Jouer sous les étoiles, une ambiance unique pour les soirées d'été.",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=800",
    style: "Festival",
  },
  {
    id: 13,
    artist: "Préparation Scène",
    event: "Soundcheck",
    type: "photo",
    quote: "Les réglages finaux avant l'arrivée du public. Concentration maximale.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    style: "Technique",
  },
  {
    id: 14,
    artist: "Duo Guitare",
    event: "Café Concert",
    type: "photo",
    quote: "La proximité avec le public dans les petits lieux, c'est ce qu'on préfère.",
    imageUrl: "https://images.unsplash.com/photo-1510915361408-05a8af4a65e5?auto=format&fit=crop&q=80&w=800",
    style: "Intime",
  }
];

// --- CONFIGURATION CONTACT ---
export const contactConfig = {
  contactName: "Marco",
  email: "vocaljam12@gmail.com",
  phone: "07 87 32 59 10",
  location: "Disponible dans un rayon de 70 km autour de Millau dans l'Aveyron",
  website: "vocaljam.org",
  social: "@vocaljam_official"
};
