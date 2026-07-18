
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

// Images d'illustration (Unsplash) - URLs mises à jour pour forcer le rafraîchissement
const IMG_INTERPRETE = "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800"; // Chanteuse émotion micro
const IMG_TERRASSE = "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1200"; // Terrasse (inchangé)

interface ExperiencePageProps {
  onNavigate?: (page: PageView) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-jam-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HERO SECTION : L'ÉMOTION --- */}
        <div className="text-center mb-20 relative">
          {/* Décoration d'arrière-plan */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-neon-pink/10 to-neon-blue/10 blur-3xl rounded-full -z-10"></div>
          
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-8">
            L'Expérience <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Vocal Jam</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="font-semibold text-xl text-white">
              "De votre première répétition à l’instant où les projecteurs s’allument, nous gérons toute la technique, le son et la logistique. <span className="text-neon-pink">Vous ne gérez que l’émotion.</span>"
            </p>
            <p>
              Fermez les yeux un instant. Imaginez une salle qui vous attend. Le retour bien net dans vos oreilles. Une guitare prête à vous suivre. Et cette sensation unique de <em>"ça y est… je suis sur scène."</em>
            </p>
            <p className="text-jam-400 font-medium">
              Bienvenue dans l’expérience Vocal Jam.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          
          {/* --- 1. LA PRÉPARATION (SPLIT AVEC IMAGES) --- */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jam-900 border border-jam-700 mb-4 shadow-[0_0_15px_rgba(118,75,162,0.3)]">
                <Icons.Music className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">1. La Préparation</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Un parcours pensé pour vous faire monter en niveau comme un artiste accompagné.
              </p>
            </div>

            <div className="max-w-xl mx-auto">

              {/* Parcours A : Interprète */}
              <div className="group bg-jam-900 rounded-3xl overflow-hidden border border-jam-800 hover:border-neon-pink/50 transition-all duration-300 shadow-xl flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img src={IMG_INTERPRETE} alt="Chanteuse sur scène" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jam-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-neon-pink/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Sur Scène</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-neon-pink">A.</span> Parcours Interprète
                  </h4>
                  <p className="text-gray-300 mb-6 font-medium">
                    Vous rêvez d’interpréter les grands titres que vous aimez, avec un rendu pro et un vrai soutien musical ?
                  </p>
                  <p className="text-sm text-gray-400 mb-4">Avec ce parcours, vous allez :</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Découvrir une sélection de 30+ titres adaptés à votre voix.",
                      "Accéder à une bibliothèque de Backtracks Pro (son studio, pas karaoké).",
                      "Bénéficier d’un coaching scénique pour gagner en confiance.",
                      "Répéter en conditions live, porté par l'accompagnement."
                    ].map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <Icons.Star className="w-4 h-4 text-neon-pink mt-0.5 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-jam-800 text-center mt-auto">
                    <p className="text-white italic font-medium">"Vous n’êtes plus seul face à la musique."</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- OÙ JOUER (STORYTELLING) --- */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Image de fond sombre */}
            <div className="absolute inset-0">
              <img src={IMG_TERRASSE} alt="Concert en terrasse" className="w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-jam-950/80 to-jam-900/50"></div>
            </div>

            <div className="relative z-10 p-10 md:p-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">Où jouer ?</h3>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-200 leading-relaxed font-light italic mb-8">
                  "Imaginez... Le soleil qui se couche sur une terrasse. Vous chantez cette première note. Les conversations s’interrompent. D’abord petit à petit, puis tout d’un coup. Le temps s’arrête l’espace d’un instant, et le public se met à chanter avec vous. C’est aussi ça l'expérience Vocal Jam."
                </p>
                <p className="text-gray-400 mb-8">
                  Nous vous suivons partout où un public peut vous écouter.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {['Terrasses de cafés', 'Campings', 'Fêtes privées', 'Événements d’entreprise', 'Busking (Rue)'].map((place) => (
                    <span key={place} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- CTA FINAL --- */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-white mb-6">Prêt à vivre l'expérience ?</h3>
            <button 
              onClick={() => onNavigate && onNavigate(PageView.CONTACT)}
              className="px-10 py-4 bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:scale-105 transition-transform"
            >
              Réserver ma session
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
