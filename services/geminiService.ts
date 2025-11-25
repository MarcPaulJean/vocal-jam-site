// import { GoogleGenerativeAI } from "@google/generative-ai";
import { SongRecommendation } from "../types";

export const generateSmartSetlist = async (
  genre: string,
  instrument: string,
  experienceLevel: string,
  vibe: string
): Promise<SongRecommendation[]> => {
  // MODE SIMULATION (POUR DÉPLOIEMENT VERCEL)
  // On simule une attente pour faire "comme si" l'IA réfléchissait
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(`Generating setlist for: ${genre}, ${instrument}, ${vibe}`);

  // Retourne des données statiques de haute qualité pour la démo
  // Cela garantit que le site ne plante pas, même sans clé API ou librairie
  return [
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", vibe: "Epic", difficulty: "Difficile" },
    { title: "Wonderwall", artist: "Oasis", genre: "Pop Rock", vibe: "Cool", difficulty: "Facile" },
    { title: "Imagine", artist: "John Lennon", genre: "Pop", vibe: "Intime", difficulty: "Facile" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock", vibe: "Chill", difficulty: "Moyen" },
    { title: "Shape of You", artist: "Ed Sheeran", genre: "Pop", vibe: "Dansant", difficulty: "Moyen" },
    { title: "Hallelujah", artist: "Leonard Cohen", genre: "Folk", vibe: "Émotion", difficulty: "Facile" }
  ];

  /* 
  --- CODE ORIGINAL (À RÉACTIVER UNE FOIS LE SITE EN LIGNE) ---
  
  // @ts-ignore
  const apiKey = import.meta.env?.VITE_API_KEY || process.env.API_KEY || process.env.VITE_API_KEY;

  if (!apiKey) {
    return [
       { title: "Mode Démo (Clé manquante)", artist: "Vocal Jam", genre: "System", vibe: "Info", difficulty: "Facile" }
    ];
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  // ... appel API ...
  */
};