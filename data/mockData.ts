

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
  {
    id: 1,
    artist: "Margo A.",
    event: "Fête de la Musique",
    type: "video",
    quote: "Auteur-compositeur, j'ai chanté ma création pour la première fois sur scène. Un moment inoubliable grâce au son pro.",
    imageUrl: "https://img.youtube.com/vi/TePmOgPjmho/maxresdefault.jpg",
    style: "Compo Originale",
    videoId: "TePmOgPjmho" // Margo A.
  },
  {
    id: 2,
    artist: "Groupe Triomio",
    event: "Terrasse de Café",
    type: "video",
    quote: "Une ambiance incroyable en terrasse. L'ingénierie son Vocal Jam a sublimé notre set acoustique.",
    imageUrl: "https://img.youtube.com/vi/wUdAw8wwgMw/maxresdefault.jpg",
    style: "Acoustique",
    videoId: "wUdAw8wwgMw" // Triomio
  },
  {
    id: 3,
    artist: "Christophe B.",
    event: "Évènement familial",
    type: "video",
    quote: "Interpréter cette création originale de Marco (Paroles et Musique) avec un son aussi pur, c'était une émotion brute.",
    imageUrl: "https://img.youtube.com/vi/_axiAIe3rfQ/hqdefault.jpg",
    style: "Création (Marco)",
    videoId: "_axiAIe3rfQ" // Christophe B.
  },
  {
    id: 4,
    artist: "Clémence P.",
    event: "Session Live",
    type: "video",
    quote: "Une collaboration artistique complète. J'ai interprété mes titres avec les arrangements musicaux sur mesure signés Marco.",
    imageUrl: "https://img.youtube.com/vi/LEgGo4p5ROY/maxresdefault.jpg",
    style: "Compo / Arrangements",
    videoId: "LEgGo4p5ROY" // Clémence P.
  },
  {
    id: 5,
    artist: "Anne G. & Marc A.",
    event: "Évènement familial",
    type: "video",
    quote: "Un duo pour témoigner de notre engagement. Une création intégrale de Marco (Paroles, Musique et Arrangements).",
    imageUrl: "https://img.youtube.com/vi/cNS6c9fKqI4/maxresdefault.jpg",
    style: "Création Duo",
    videoId: "cNS6c9fKqI4" // Anne G. & Marc A.
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