
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

// Images d'illustration (Unsplash) - URLs mises à jour pour forcer le rafraîchissement
const IMG_INTERPRETE = "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800"; // Chanteuse émotion micro
const IMG_CREATEUR = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800"; // Studio (inchangé)
const IMG_TERRASSE = "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1200"; // Terrasse (inchangé)
const IMG_TECH = "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80&w=800"; // Main sur table de mixage
const IMG_PERFORMANCE = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=800"; // Scène lumières concert

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
                Deux parcours, une même ambition : vous faire monter en niveau comme un artiste accompagné.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
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

              {/* Parcours B : Créateur */}
              <div className="group bg-jam-900 rounded-3xl overflow-hidden border border-jam-800 hover:border-neon-blue/50 transition-all duration-300 shadow-xl flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img src={IMG_CREATEUR} alt="Studio Enregistrement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jam-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-neon-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">En Studio</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-neon-blue">B.</span> Parcours Créateur
                  </h4>
                  <p className="text-gray-300 mb-6 font-medium">
                    Vous avez des textes, des idées, une mélodie dans la tête ? Nous sommes là pour leur donner vie.
                  </p>
                  <p className="text-sm text-gray-400 mb-4">Ce parcours vous offre :</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Une aide à la composition (paroles et musique).",
                      "Des arrangements sur mesure pour révéler votre identité.",
                      "Une direction artistique personnalisée pour guider votre vision.",
                      "L’enregistrement d’une maquette studio, propre et exploitable."
                    ].map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <Icons.Energy className="w-4 h-4 text-neon-blue mt-0.5 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-jam-800 text-center mt-auto">
                    <p className="text-white italic font-medium">"Venez avec une idée, repartez avec votre création."</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- 2. LA TECHNOLOGIE --- */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-jam-900/50 rounded-3xl p-8 md:p-12 border border-jam-800">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-jam-800 p-2 rounded-lg"><Icons.Tech className="w-6 h-6 text-neon-blue" /></span>
                2. La Technologie
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Le soutien invisible qui fait toute la différence. Pour nous, la technique n’est pas un gadget. Elle est là pour que vous vous sentiez en sécurité, concentré uniquement sur votre performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { title: "Prompteur numérique", desc: "Paroles et accords synchronisés, pour ne jamais perdre le fil." },
                  { title: "Retours Wedge", desc: "Pour vous entendre parfaitement, comme sur scène." },
                  { title: "Sonorisation Façade", desc: "Un son FOH puissant qui donne un vrai rendu public." },
                  { title: "Mixage en temps réel", desc: "Un ingénieur dédié pour que votre voix soit toujours mise en valeur." }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <dt className="flex items-center text-white font-semibold text-sm mb-1">
                      <span className="w-2 h-2 rounded-full bg-neon-blue mr-2"></span>
                      {item.title}
                    </dt>
                    <dd className="text-gray-400 text-xs pl-4">{item.desc}</dd>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-jam-400 italic text-sm">
                "Tout est pensé pour que vous soyez à l’aise, vous libérer et vous mettre dans le meilleur état d’esprit."
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-5/12 order-1 md:order-2 flex justify-center">
               <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-jam-700/50 group">
                  <img 
                    src={IMG_TECH} 
                    alt="Ingénieur son sur console de mixage" 
                    className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jam-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 right-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-white font-mono uppercase tracking-widest">Live System</span>
                  </div>
               </div>
            </div>
          </div>

          {/* --- 3. LA PERFORMANCE --- */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-shrink-0 w-full md:w-1/2 lg:w-5/12 flex justify-center">
               <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-jam-700/50 group">
                  <img 
                    src={IMG_PERFORMANCE} 
                    alt="Concert Live Lumières" 
                    className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jam-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-xs text-white font-bold bg-neon-pink/80 px-2 py-1 rounded">ON AIR</span>
                  </div>
               </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-jam-800 p-2 rounded-lg"><Icons.Star className="w-6 h-6 text-jam-400" /></span>
                3. La Performance
              </h3>
              <p className="text-xl text-white font-medium mb-4">
                "Le moment de vérité, mais bien entouré."
              </p>
              <p className="text-gray-300 mb-6">
                C’est l’instant où tout se joue. Le premier accord. Votre respiration qui se cale. La lumière qui vous trouve. Et cette énergie toute singulière qui monte.
              </p>
              <p className="text-gray-300 mb-4">Nous sommes là pour vous entourer :</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Accompagnement guitare live qui suit votre rythme et vos nuances.",
                  "Harmonies vocales qui enrichissent votre voix sans la couvrir.",
                  "Éclairage scénique dynamique pour vous mettre en valeur.",
                  "Captation photo/vidéo pour immortaliser votre performance."
                ].map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Icons.Play className="w-4 h-4 text-jam-400 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-jam-900 to-transparent p-4 border-l-4 border-jam-500">
                <p className="text-white italic">"Ressentez l’adrénaline, la présence. Le frisson de la scène."</p>
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
