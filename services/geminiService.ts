import { GoogleGenAI, Type } from "@google/genai";
import { SongRecommendation } from "../types";

const apiKey = process.env.API_KEY || '';
// Fallback if env not set for demo purposes, but in prod strictly follow env usage.
// Assuming the environment provides the key.

let ai: GoogleGenAI | null = null;

try {
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey: apiKey });
    } else {
        console.warn("API_KEY is missing. AI features will not work.");
    }
} catch (e) {
    console.error("Failed to initialize GoogleGenAI", e);
}

export const generateSmartSetlist = async (
  genre: string,
  instrument: string,
  experienceLevel: string,
  vibe: string
): Promise<SongRecommendation[]> => {
  if (!ai) {
    // Return mock data if API key is missing or initialization failed
    return [
      { title: "API KEY MISSING", artist: "System", genre: "Error", vibe: "Check Config", difficulty: "Moyen" }
    ];
  }

  const prompt = `
    Génère une liste de 6 chansons suggérées pour un musicien solo qui veut se produire sur scène avec Vocal Jam.
    Profil: Instrument: ${instrument}, Genre: ${genre}, Niveau: ${experienceLevel}, Ambiance souhaitée: ${vibe}.
    Les chansons doivent être des classiques ou populaires adaptés à la scène.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              artist: { type: Type.STRING },
              genre: { type: Type.STRING },
              vibe: { type: Type.STRING },
              difficulty: { type: Type.STRING, enum: ["Facile", "Moyen", "Difficile"] }
            },
            required: ["title", "artist", "genre", "vibe", "difficulty"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as SongRecommendation[];
    }
    return [];
  } catch (error) {
    console.error("Error generating setlist:", error);
    return [];
  }
};