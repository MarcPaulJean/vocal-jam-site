import { GoogleGenerativeAI } from "@google/generative-ai";
import { SongRecommendation } from "../types";

export const generateSmartSetlist = async (
  genre: string,
  instrument: string,
  experienceLevel: string,
  vibe: string
): Promise<SongRecommendation[]> => {
  // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
  // Sur Vercel, on utilise import.meta.env pour Vite, mais on garde process.env pour la compatibilité locale si besoin
  // @ts-ignore
  const apiKey = import.meta.env?.VITE_API_KEY || process.env.API_KEY || process.env.VITE_API_KEY;

  if (!apiKey) {
    // Return mock data if API key is missing
    return [
      { title: "Mode Démo (Pas de clé API)", artist: "Configurez Vercel", genre: "N/A", vibe: "System", difficulty: "Moyen" },
      { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", vibe: "Epic", difficulty: "Difficile" },
      { title: "Wonderwall", artist: "Oasis", genre: "Pop Rock", vibe: "Cool", difficulty: "Facile" }
    ];
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json"
    }
  });

  const prompt = `
    Génère une liste JSON de 6 chansons suggérées pour un musicien solo qui veut se produire sur scène avec Vocal Jam.
    Profil: Instrument: ${instrument}, Genre: ${genre}, Niveau: ${experienceLevel}, Ambiance souhaitée: ${vibe}.
    
    Le format JSON doit être strictement un tableau d'objets avec les propriétés suivantes:
    title (string), artist (string), genre (string), vibe (string), difficulty (string: 'Facile', 'Moyen', 'Difficile').
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    if (text) {
      // Nettoyage basique au cas où le modèle renvoie du markdown ```json ... ```
      const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleanedText) as SongRecommendation[];
    }
    return [];
  } catch (error) {
    console.error("Error generating setlist:", error);
    // Fallback data en cas d'erreur
    return [
      { title: "Erreur IA", artist: "Réessayez plus tard", genre: "N/A", vibe: "N/A", difficulty: "Moyen" }
    ];
  }
};