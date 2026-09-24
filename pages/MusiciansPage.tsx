
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView, NavigateFn } from '../types';

// Images d'illustration (Unsplash)
const IMG_INTERPRETE = "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800"; // Chanteuse émotion micro
const IMG_TERRASSE = "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1200"; // Terrasse

interface MusiciansPageProps {
  onNavigate: NavigateFn;
}

export const MusiciansPage: React.FC<MusiciansPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-jam-950">
      {/* ============================================================= */}
      {/* SECTION ACCUEIL (HERO)                                        */}
      {/* ============================================================= */}
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

          <h1 className="text-5xl md:text-7xl leading-[1.1] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-jam-100 to-jam-400 mb-6 tracking-normal">
            Vous n'êtes plus seul <br />
            <span className="text-neon-pink">sous les projecteurs</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Vocal Jam transforme votre rêve en réalité. Chantez ou jouez, toujours accompagné par des pros, avec un son de qualité studio et une technologie de pointe.
          </p>

          <div className="mt-10 flex justify-center w-full max-w-2xl">
            <button
              onClick={() => onNavigate(PageView.CONTACT, 'musiciens')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(255,0,128,0.4)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Icons.Event className="w-5 h-5" />
              Réserver ma session
            </button>
          </div>
        </div>
      </div>

      {/* Image illustration immersive */}
      <div className="relative z-10 mt-8 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-jam-700 group">
          <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-transparent to-transparent z-10 opacity-40"></div>

          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600&v=2"
            alt="Concert Live Joie et Lumière"
            className="w-full h-[400px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white italic drop-shadow-lg">
              "Fermez les yeux. Le public est là. La musique démarre. C'est à vous."
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SECTION L'EXPÉRIENCE                                          */}
      {/* ============================================================= */}
      <section id="experience" className="py-12 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- INTRO : L'ÉMOTION --- */}
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-neon-pink/10 to-neon-blue/10 blur-3xl rounded-full -z-10"></div>

            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-8">
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

            {/* --- 1. LA PRÉPARATION --- */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jam-900 border border-jam-700 mb-4 shadow-[0_0_15px_rgba(118,75,162,0.3)]">
                  <Icons.Music className="w-8 h-8 text-neon-pink" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">De la répète à la scène</h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Chanteur ou instrumentiste : vous montez en niveau comme un artiste accompagné, du premier essai jusqu'aux projecteurs.
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
                      Soliste, jamais seul
                    </h4>
                    <p className="text-gray-300 mb-6 font-medium">
                      Vous rêvez d’interpréter les titres que vous aimez — à la voix ou à votre instrument — avec un rendu pro et un vrai soutien musical ?
                    </p>
                    <p className="text-sm text-gray-400 mb-4">Avec ce parcours, vous allez :</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {[
                        "Une sélection de 30+ titres adaptés à votre voix ou à votre instrument.",
                        "Une bibliothèque de Backtracks Pro : un vrai son studio, pas du karaoké.",
                        "Un coaching scénique pour gagner en confiance et en présence.",
                        "Des répétitions en conditions live, porté par l'accompagnement."
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
              <div className="absolute inset-0">
                <img src={IMG_TERRASSE} alt="Concert en terrasse" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-jam-950/80 to-jam-900/50"></div>
              </div>

              <div className="relative z-10 p-10 md:p-16 text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Où jouer ?</h3>

                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-200 leading-relaxed font-light italic mb-8">
                    "Imaginez... Le soleil qui se couche sur une terrasse. Vous lancez cette première note. Les conversations s’interrompent. D’abord petit à petit, puis tout d’un coup. Le temps s’arrête l’espace d’un instant, et le public se met à chanter avec vous. C’est aussi ça l'expérience Vocal Jam."
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

            {/* --- BACKTRACK SUR MESURE --- */}
            <div id="backtrack" className="relative rounded-3xl overflow-hidden border border-jam-700 bg-gradient-to-br from-jam-900 to-jam-950 scroll-mt-20">
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]"></div>

              <div className="relative z-10 p-8 md:p-14">
                {/* En-tête */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-semibold mb-6">
                    <Icons.Sound className="w-4 h-4" />
                    Nouveau · Backtrack sur mesure
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
                    Pas une copie. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Votre version.</span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Les backtracks du commerce collent à l'original, note pour note — et ils le font bien. Mais quand vous cherchez une relecture qui n'existe nulle part — une cover réarrangée, une autre couleur, votre tonalité — ou votre propre création, il faut une oreille humaine. La mienne. <span className="text-white font-semibold">Guidé par un créateur, pas par une IA.</span>
                  </p>
                </div>

                {/* Quand ça a du sens */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {[
                    { icon: Icons.Music, color: 'text-neon-pink', title: 'Cover créative', text: "Une version qui vous ressemble : autre tempo, autre style, réharmonisée. Pas un clone." },
                    { icon: Icons.Sprout, color: 'text-neon-blue', title: 'Création originale', text: "Vous composez ? Un accompagnement à la hauteur de votre idée, arrangé pour la porter." },
                    { icon: Icons.Energy, color: 'text-jam-300', title: 'Zéro générique', text: "Ni catalogue passe-partout, ni IA. Un vrai parti pris musical, assumé." },
                  ].map((c) => (
                    <div key={c.title} className="bg-jam-950/60 border border-jam-800 rounded-2xl p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-jam-900 border border-jam-700 mb-4">
                        <c.icon className={`w-6 h-6 ${c.color}`} />
                      </div>
                      <h4 className="font-display text-lg font-bold text-white mb-2">{c.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{c.text}</p>
                    </div>
                  ))}
                </div>

                {/* Comment ça marche */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">Comment ça marche</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: 'On part de votre intention', text: "La chanson (ou votre compo), la couleur que vous cherchez, votre tonalité, votre tempo. Votre vision guide tout." },
                      { title: "Je l'arrange à la main", text: "Réharmonisation, choix des instruments, dynamique : un vrai parti pris, en qualité studio. Pas un preset, pas un algorithme." },
                      { title: 'On affine, prêt pour la scène', text: "Vous écoutez, on ajuste jusqu'au bon rendu. Livré calé pour votre matériel (stéréo ou multipiste)." },
                    ].map((s, idx) => (
                      <div key={idx} className="relative bg-jam-950/40 rounded-2xl p-6 border border-jam-800">
                        <span className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white text-sm font-bold flex items-center justify-center shadow-lg">
                          {idx + 1}
                        </span>
                        <h4 className="font-display text-base font-bold text-white mb-2 mt-2">{s.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pourquoi moi + CTA */}
                <div className="mt-14 text-center max-w-2xl mx-auto">
                  <p className="text-xl text-white italic font-light mb-2">
                    « J'ai usé les catalogues et l'IA jusqu'à leurs limites — c'est là que commence mon travail. »
                  </p>
                  <p className="text-sm text-gray-500 mb-8">
                    Révisions incluses jusqu'au bon rendu. Chœurs, guide vocal et piste de clic à la carte.
                  </p>
                  <button
                    onClick={() => onNavigate(PageView.CONTACT, 'backtrack')}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:scale-105 transition-transform"
                  >
                    <Icons.Sound className="w-5 h-5" />
                    Parler de mon projet
                  </button>
                  <p className="text-sm text-gray-500 mt-4">Sur devis, selon l'ambition de l'arrangement.</p>
                </div>
              </div>
            </div>

            {/* --- CTA FINAL --- */}
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-6">Chanteur ou instrumentiste : la scène vous attend.</h3>
              <button
                onClick={() => onNavigate(PageView.CONTACT, 'musiciens')}
                className="px-10 py-4 bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:scale-105 transition-transform"
              >
                Réserver ma session
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
