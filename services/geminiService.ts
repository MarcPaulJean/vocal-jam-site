import { GoogleGenerativeAI } from "@google/generative-ai";
import { SongRecommendation } from "../types";

const apiKey = process.env.API_KEY || '';

let genAI: GoogleGenerativeAI | null = null;

try {
    if (apiKey) {
        genAI = new GoogleGenerativeAI(apiKey);
    } else {
        console.warn("API_KEY is missing. AI features will not work.");
    }
} catch (e) {
    console.error("Failed to initialize GoogleGenerativeAI", e);
}

export const generateSmartSetlist = async (
  genre: string,
  instrument: string,
  experienceLevel: string,
  vibe: string
): Promise<SongRecommendation[]> => {
  if (!genAI) {
    // Return mock data if API key is missing or initialization failed
    return [
      { title: "API KEY MISSING", artist: "Check Config", genre: "Error", vibe: "System", difficulty: "Moyen" }
    ];
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Génère une liste de 6 chansons suggérées pour un musicien solo qui veut se produire sur scène avec Vocal Jam.
    Profil: Instrument: ${instrument}, Genre: ${genre}, Niveau: ${experienceLevel}, Ambiance souhaitée: ${vibe}.
    
    IMPORTANT: Réponds UNIQUEMENT avec un tableau JSON brut, sans Markdown (pas de \`\`\`json).
    Structure attendue pour chaque item :
    {
      "title": "Titre",
      "artist": "Artiste",
      "genre": "Genre",
      "vibe": "Ambiance",
      "difficulty": "Facile" | "Moyen" | "Difficile"
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Nettoyage du markdown si l'IA en ajoute
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();

    return JSON.parse(text) as SongRecommendation[];
  } catch (error) {
    console.error("Error generating setlist:", error);
    // Fallback data en cas d'erreur de parsing ou d'API
    return [
      { title: "Service Indisponible", artist: "Réessayez plus tard", genre: "N/A", vibe: "N/A", difficulty: "Moyen" }
    ];
  }
};