

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
    imageUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop",
    style: "Compo Originale",
    videoId: "TePmOgPjmho" // Margo A.
  },
  {
    id: 2,
    artist: "Groupe Triomio",
    event: "Terrasse de Café",
    type: "video",
    quote: "Une ambiance incroyable en terrasse. L'ingénierie son Vocal Jam a sublimé notre set acoustique.",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
    style: "Acoustique",
    videoId: "wUdAw8wwgMw" // Triomio
  },
  {
    id: 3,
    artist: "Christophe B.",
    event: "Évènement familial",
    type: "video",
    quote: "Interpréter cette création originale de Marco (Paroles et Musique) avec un son aussi pur, c'était une émotion brute.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    style: "Création (Marco)",
    videoId: "_axiAIe3rfQ" // Christophe B.
  },
  {
    id: 4,
    artist: "Julie T.",
    event: "Soirée d'Entreprise",
    type: "video",
    quote: "Le prompteur synchronisé m'a sauvé la vie sur le dernier couplet ! Une expérience VIP pour nos collaborateurs.",
    imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
    style: "Variété",
    videoId: "ItuR5N7jKzk" // Zaz Live (Démo)
  },
  {
    id: 5,
    artist: "Claire & Paul",
    event: "Vin d'honneur Mariage",
    type: "photo",
    quote: "Chanter notre chanson d'ouverture en live avec un vrai accompagnement, c'était le moment fort du mariage.",
    imageUrl: "https://images.unsplash.com/photo-1525994886773-080587e161c2?q=80&w=800&auto=format&fit=crop",
    style: "Duo Romantique"
  },
  {
    id: 6,
    artist: "Lucas D.",
    event: "Camping des Flots Bleus",
    type: "video",
    quote: "Le public était en feu ! L'ingé son a su gérer l'espace ouvert parfaitement. À refaire l'été prochain.",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop",
    style: "Rock 80s",
    videoId: "Nco_kh8xJDs" // Alice in Chains Unplugged (Démo)
  },
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