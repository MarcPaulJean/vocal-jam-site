
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-jam-900 pt-16 pb-32">
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

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </div>

      {/* Value Proposition Grid */}
      <div className="bg-jam-950 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div 
              onClick={() => onNavigate(PageView.EXPERIENCE)}
              className="bg-jam-900/50 p-8 rounded-2xl border border-jam-700/50 hover:border-neon-pink/50 transition-all duration-300 group cursor-pointer hover:bg-jam-900 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-jam-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-pink/20 transition-colors">
                <Icons.Music className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">Préparation Pro</h3>
              <p className="text-gray-400 leading-relaxed">
                Choisissez votre voie : <strong className="text-neon-pink">Parcours Interprète</strong> (Reprises & Covers) ou <strong className="text-neon-blue">Parcours Créateur</strong> (Compositions Originales).
              </p>
            </div>

            <div 
              onClick={() => onNavigate(PageView.EXPERIENCE)}
              className="bg-jam-900/50 p-8 rounded-2xl border border-jam-700/50 hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer hover:bg-jam-900 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-jam-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <Icons.Tech className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">Live Tech</h3>
              <p className="text-gray-400 leading-relaxed">
                Backtracks HD, prompteur synchronisé (paroles & accords), retours wedge et façade FOH.
              </p>
            </div>

            <div 
              onClick={() => onNavigate(PageView.EXPERIENCE)}
              className="bg-jam-900/50 p-8 rounded-2xl border border-jam-700/50 hover:border-jam-400/50 transition-all duration-300 group cursor-pointer hover:bg-jam-900 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-jam-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-jam-400/20 transition-colors">
                <Icons.Community className="w-8 h-8 text-jam-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-jam-400 transition-colors">Accompagnement</h3>
              <p className="text-gray-400 leading-relaxed">
                Jamais seul : Duo musical, guitare rythmique et harmonies vocales pour vous soutenir.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
