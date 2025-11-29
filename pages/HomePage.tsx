
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-jam-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-jam-900 pt-16 pb-12 lg:pb-16">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-semibold mb-8 animate-pulse-slow">
            <Icons.Star className="w-4 h-4 mr-2" />
            Vivez le frisson de la scène
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-jam-100 to-jam-400 mb-6 tracking-tight">
            Vous n'êtes plus seul <br />
            <span className="text-neon-pink">sous les projecteurs</span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Vocal Jam transforme votre rêve en réalité. Chantez ou jouez en solo, accompagné par des pros, avec un son de qualité studio et une technologie de pointe.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-3xl">
            <button 
              onClick={() => onNavigate(PageView.EXPERIENCE)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(255,0,128,0.4)] hover:scale-105 transition-transform"
            >
              Découvrir l'expérience
            </button>
            <button 
              onClick={() => onNavigate(PageView.SETLIST_AI)}
              className="px-8 py-4 rounded-full border border-jam-500 text-jam-100 font-semibold text-lg hover:bg-jam-800 transition-colors flex items-center justify-center gap-2"
            >
              <Icons.Energy className="w-5 h-5 text-neon-blue" />
              Créer ma Setlist IA
            </button>
            <button 
              onClick={() => onNavigate(PageView.GALLERY)}
              className="px-8 py-4 rounded-full bg-jam-800 text-white font-semibold text-lg hover:bg-jam-700 transition-colors flex items-center justify-center gap-2 border border-jam-700"
            >
              <Icons.Community className="w-5 h-5 text-jam-400" />
              Témoignages
            </button>
          </div>
        </div>
      </div>

      {/* Image Illustration Section - Remplacement des 3 blocs */}
      <div className="relative z-10 mt-8 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-jam-700 group cursor-pointer" onClick={() => onNavigate(PageView.EXPERIENCE)}>
          <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-transparent to-transparent z-10 opacity-40"></div>
          
          {/* Image de concert immersive - Version v=2 pour forcer le cache */}
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600&v=2" 
            alt="Concert Live Joie et Lumière" 
            className="w-full h-[400px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white italic drop-shadow-lg">
              "Fermez les yeux. Le public est là. La musique démarre. C'est à vous."
            </p>
            <div className="mt-4 inline-flex items-center text-neon-pink font-semibold animate-bounce">
              En savoir plus <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
