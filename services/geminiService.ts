
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SongRecommendation } from "../types";

// Hack pour éviter l'erreur TypeScript "Cannot find name 'process'" dans Vite
declare const process: any;

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
  
  // Délai artificiel pour l'UX
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Tentative de récupération de la clé API (Compatible Vite et Vercel)
  let apiKey = "";
  try {
    // @ts-ignore
    apiKey = import.meta.env.VITE_API_KEY || (typeof process !== 'undefined' ? process.env.API_KEY : "");
  } catch (e) {
    console.log("Erreur lecture env var", e);
  }

  if (!apiKey) {
    console.log("⚠️ Aucune clé API trouvée. Utilisation du mode Simulation Intelligente.");
    const mockList = MOCK_DATABASES[genre] || MOCK_DATABASES["Pop-Rock"];
    // Mélange simple
    const shuffled = [...mockList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }

  try {
    // Utilisation de l'ancien SDK (@google/generative-ai) qui est stable dans le package.json
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      Agis comme un directeur musical professionnel.
      Génère une liste de 5 chansons au format JSON strict (un tableau d'objets) pour :
      Genre: ${genre}, Instrument: ${instrument}, Niveau: ${experienceLevel}, Ambiance: ${vibe}.
      Chaque objet doit avoir les propriétés: title, artist, genre, vibe, difficulty.
      Ne mets pas de markdown (pas de \`\`\`json). Juste le JSON brut.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(text) as SongRecommendation[];

  } catch (error) {
    console.error("Erreur Gemini (Fallback activé):", error);
    const mockList = MOCK_DATABASES[genre] || MOCK_DATABASES["Pop-Rock"];
    return [...mockList].sort(() => 0.5 - Math.random()).slice(0, 5);
  }
};
