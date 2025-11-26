import { GoogleGenAI, Type } from "@google/genai";
import { SongRecommendation } from "../types";

// --- MODE SIMULATION INTELLIGENTE (FALLBACK) ---
const MOCK_DATABASES: Record<string, SongRecommendation[]> = {
  "Pop-Rock": [
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", vibe: "Epic", difficulty: "Difficile" },
    { title: "Wonderwall", artist: "Oasis", genre: "Pop Rock", vibe: "Cool", difficulty: "Facile" },
    { title: "Don't Stop Believin'", artist: "Journey", genre: "Rock", vibe: "Énergique", difficulty: "Moyen" },
    { title: "Angels", artist: "Robbie Williams", genre: "Pop", vibe: "Émotion", difficulty: "Facile" },
    { title: "Uprising", artist: "Muse", genre: "Rock", vibe: "Puissant", difficulty: "Difficile" }
  ],
  "Variété Française": [
    { title: "Je te donne", artist: "Jean-Jacques Goldman", genre: "Variété", vibe: "Fédérateur", difficulty: "Moyen" },
    { title: "L'Envie", artist: "Johnny Hallyday", genre: "Rock", vibe: "Puissant", difficulty: "Difficile" },
    { title: "La Grenade", artist: "Clara Luciani", genre: "Pop", vibe: "Rythmé", difficulty: "Facile" },
    { title: "Sous le vent", artist: "Garou & Céline Dion", genre: "Duo", vibe: "Romantique", difficulty: "Moyen" },
    { title: "Mistral Gagnant", artist: "Renaud", genre: "Ballade", vibe: "Mélancolique", difficulty: "Facile" }
  ],
  "Soul & Blues": [
    { title: "Feeling Good", artist: "Nina Simone", genre: "Soul", vibe: "Puissant", difficulty: "Moyen" },
    { title: "Respect", artist: "Aretha Franklin", genre: "Soul", vibe: "Énergique", difficulty: "Moyen" },
    { title: "Ain't No Sunshine", artist: "Bill Withers", genre: "Blues", vibe: "Intime", difficulty: "Facile" },
    { title: "Superstition", artist: "Stevie Wonder", genre: "Funk/Soul", vibe: "Groovy", difficulty: "Difficile" },
    { title: "Back to Black", artist: "Amy Winehouse", genre: "Soul", vibe: "Sombre", difficulty: "Moyen" }
  ],
  "Jazz Standards": [
    { title: "Fly Me to the Moon", artist: "Frank Sinatra", genre: "Jazz", vibe: "Swing", difficulty: "Moyen" },
    { title: "Summertime", artist: "Ella Fitzgerald", genre: "Jazz", vibe: "Lent", difficulty: "Facile" },
    { title: "Autumn Leaves", artist: "Standard", genre: "Jazz", vibe: "Mélancolique", difficulty: "Moyen" },
    { title: "Take Five", artist: "Dave Brubeck", genre: "Jazz", vibe: "Complexe", difficulty: "Difficile" },
    { title: "What a Wonderful World", artist: "Louis Armstrong", genre: "Jazz", vibe: "Douceur", difficulty: "Facile" }
  ],
  "Hard Rock 80s": [
    { title: "Highway to Hell", artist: "AC/DC", genre: "Hard Rock", vibe: "Électrique", difficulty: "Moyen" },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Hard Rock", vibe: "Épique", difficulty: "Difficile" },
    { title: "Jump", artist: "Van Halen", genre: "Hard Rock", vibe: "Festif", difficulty: "Moyen" },
    { title: "Still Loving You", artist: "Scorpions", genre: "Ballade Rock", vibe: "Émotion", difficulty: "Moyen" },
    { title: "Livin' on a Prayer", artist: "Bon Jovi", genre: "Rock", vibe: "Hymne", difficulty: "Difficile" }
  ],
  "Acoustique / Folk": [
    { title: "Hallelujah", artist: "Jeff Buckley", genre: "Folk", vibe: "Sacré", difficulty: "Moyen" },
    { title: "Fast Car", artist: "Tracy Chapman", genre: "Folk", vibe: "Nostalgique", difficulty: "Facile" },
    { title: "Hotel California (Unplugged)", artist: "Eagles", genre: "Rock Acoustique", vibe: "Chill", difficulty: "Difficile" },
    { title: "Redemption Song", artist: "Bob Marley", genre: "Reggae/Folk", vibe: "Engagé", difficulty: "Facile" },
    { title: "Perfect", artist: "Ed Sheeran", genre: "Pop Folk", vibe: "Romantique", difficulty: "Facile" }
  ]
};

export const generateSmartSetlist = async (
  genre: string,
  instrument: string,
  experienceLevel: string,
  vibe: string
): Promise<SongRecommendation[]> => {
  
  await new Promise(resolve => setTimeout(resolve, 1500));

  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.log("⚠️ Aucune clé API trouvée. Utilisation du mode Simulation Intelligente.");
    const mockList = MOCK_DATABASES[genre] || MOCK_DATABASES["Pop-Rock"];
    const shuffled = [...mockList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Agis comme un directeur musical professionnel pour un événement 'Vocal Jam'.
      Contexte : Genre ${genre}, Instrument ${instrument}, Niveau ${experienceLevel}, Ambiance ${vibe}.
      Génère une liste de 5 chansons recommandées.
      Pour la difficulté, choisis parmi : 'Facile', 'Moyen', 'Difficile'.
    `;

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
              difficulty: { type: Type.STRING }
            },
            required: ["title", "artist", "genre", "vibe", "difficulty"],
          },
        },
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Réponse vide de Gemini");
    }
    
    return JSON.parse(text) as SongRecommendation[];

  } catch (error) {
    console.error("Erreur Gemini (Fallback activé):", error);
    return MOCK_DATABASES[genre] || MOCK_DATABASES["Pop-Rock"];
  }
};
