
import React, { useState } from 'react';
import { generateSmartSetlist } from '../services/geminiService';
import { SongRecommendation } from '../types';
import { Icons } from '../components/Icons';

// Définition des options disponibles pour garantir la cohérence
const INSTRUMENTS = ["Chant (Solo)", "Guitare + Chant", "Piano + Chant", "Saxophone"];
const GENRES = ["Pop-Rock", "Variété Française", "Soul & Blues", "Jazz Standards", "Hard Rock 80s", "Acoustique / Folk"];
const VIBES = ["Énergique / Festif", "Intime / Émotion", "Lounge / Détente", "Dansant"];
const LEVELS = ["Débutant (chansons simples)", "Intermédiaire", "Avancé / Pro"];

// COMPOSANT EXTRAIT (Correction du bug de re-rendering)
const SelectWrapper = ({ label, value, onChange, options }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[] }) => (
  <div className="relative group">
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <div className="relative">
      <select 
        value={value} 
        onChange={onChange}
        className="w-full border border-jam-700 rounded-lg pl-4 pr-10 py-3 focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none appearance-none cursor-pointer hover:border-jam-500 transition-colors"
        style={{ 
          backgroundColor: '#1a0b2e', // Force bg-jam-950
          color: '#ffffff', // Force white text
          backgroundImage: 'none' // Remove default browser arrow
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ backgroundColor: '#1a0b2e', color: 'white' }}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 group-hover:text-white transition-colors">
        <Icons.ChevronDown className="h-5 w-5 bg-jam-950" />
      </div>
    </div>
  </div>
);

export const SetlistGenerator = () => {
  // Initialisation avec les premières valeurs des listes pour éviter les incohérences
  const [instrument, setInstrument] = useState(INSTRUMENTS[0]);
  const [genre, setGenre] = useState(GENRES[0]);
  const [vibe, setVibe] = useState(VIBES[0]);
  const [level, setLevel] = useState(LEVELS[1]);
  
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<SongRecommendation[] | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setRecommendations(null);
    try {
      const results = await generateSmartSetlist(genre, instrument, level, vibe);
      setRecommendations(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-jam-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-jam-900 rounded-full mb-4 shadow-lg border border-jam-700">
            <Icons.Energy className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Assistant Répertoire IA</h1>
          <p className="mt-2 text-gray-400">
            Laissez notre IA, propulsée par Gemini, créer la base de votre prochain concert.
          </p>
        </div>

        <div className="bg-jam-900 rounded-2xl shadow-xl border border-jam-800 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <SelectWrapper 
              label="Votre Instrument" 
              value={instrument} 
              onChange={(e) => setInstrument(e.target.value)} 
              options={INSTRUMENTS} 
            />
            <SelectWrapper 
              label="Style Musical" 
              value={genre} 
              onChange={(e) => setGenre(e.target.value)} 
              options={GENRES} 
            />
            <SelectWrapper 
              label="Ambiance" 
              value={vibe} 
              onChange={(e) => setVibe(e.target.value)} 
              options={VIBES} 
            />
            <SelectWrapper 
              label="Niveau Technique" 
              value={level} 
              onChange={(e) => setLevel(e.target.value)} 
              options={LEVELS} 
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all
              ${loading 
                ? 'bg-jam-800 cursor-not-allowed opacity-75' 
                : 'bg-gradient-to-r from-neon-blue to-jam-500 hover:scale-[1.01] hover:shadow-neon-blue/20'
              }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <Icons.Energy className="animate-spin mr-2 h-5 w-5" />
                Composition en cours...
              </span>
            ) : (
              "Générer ma Setlist Idéale"
            )}
          </button>
        </div>

        {recommendations && (
          <div className="mt-10 animate-fade-in-up">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Icons.Music className="mr-2 text-neon-pink" />
              Suggestion de Setlist (Démo)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((song, idx) => (
                <div key={idx} className="bg-jam-900/50 border border-jam-800 p-4 rounded-xl hover:bg-jam-800 transition-colors flex justify-between items-center group">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-neon-pink transition-colors">{song.title}</h4>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-jam-300 bg-jam-900 px-2 py-1 rounded border border-jam-700">
                      {song.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-neon-blue/10 border border-neon-blue/20 rounded-lg text-center">
              <p className="text-neon-blue text-sm">
                Ceci est un aperçu. Avec Vocal Jam, nous construisons ensemble un répertoire complet de 30 titres.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
