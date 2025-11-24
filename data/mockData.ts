

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
    artist: "Sophie M.",
    event: "Fête de la Musique",
    type: "video",
    quote: "Je n'avais jamais chanté devant 200 personnes. Les lumières et le son m'ont donné une confiance incroyable !",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop",
    style: "Pop Rock",
    videoId: "XfhzC5c_q4M" // Adele Live (Fiable pour démo)
  },
  {
    id: 2,
    artist: "Marc & Les Voisins",
    event: "Anniversaire Privé (Jardin)",
    type: "photo",
    quote: "Le son était digne d'un concert pro, même au fond du jardin. Vocal Jam a transformé mes 40 ans.",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
    style: "Acoustique"
  },
  {
    id: 3,
    artist: "Julie T.",
    event: "Soirée d'Entreprise",
    type: "video",
    quote: "Le prompteur synchronisé m'a sauvé la vie sur le dernier couplet ! Une expérience VIP pour nos collaborateurs.",
    imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
    style: "Variété",
    videoId: "ItuR5N7jKzk" // Zaz Live (Fiable pour démo)
  },
  {
    id: 4,
    artist: "Christophe B.",
    event: "Évènement familial",
    type: "video",
    quote: "Interpréter cette création originale de Marco (Paroles et Musique) avec un son aussi pur, c'était une émotion brute.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    style: "Création Originale (Marco)",
    videoId: "_axiAIe3rfQ" // VIDEO UTILISATEUR (Christophe B.)
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
    videoId: "Nco_kh8xJDs" // Alice in Chains Unplugged (Fiable pour démo)
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
