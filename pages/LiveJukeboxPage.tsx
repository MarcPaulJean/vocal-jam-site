
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

interface LiveJukeboxPageProps {
  onNavigate: (page: PageView) => void;
}

const IMG_PUBLIC = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1600"; // Public en concert

const steps = [
  {
    icon: Icons.Music,
    color: 'text-neon-pink',
    title: 'Vous choisissez',
    text: "Un QR code sur votre table, et votre téléphone devient la télécommande de la soirée : vous votez pour les titres que vous voulez entendre.",
  },
  {
    icon: Icons.Community,
    color: 'text-neon-blue',
    title: 'Vous chantez',
    text: "Les paroles arrivent sur votre mobile : vous chantez avec Marco depuis votre place, sans jamais être un simple spectateur.",
  },
  {
    icon: Icons.Mic,
    color: 'text-jam-400',
    title: 'Vous montez au micro',
    text: "L'envie vous prend ? Rejoignez Marco sur scène pour interpréter votre titre. Le temps d'une chanson, la vedette, c'est vous.",
  },
];

const venues = ['Bars', 'Terrasses', 'Mariages', 'Anniversaires', 'Soirées d’entreprise', 'Campings'];

export const LiveJukeboxPage: React.FC<LiveJukeboxPageProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-jam-950">
      {/* ============================================================= */}
      {/* HERO                                                          */}
      {/* ============================================================= */}
      <div className="relative overflow-hidden bg-jam-900 pt-16 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={IMG_PUBLIC} alt="Public qui chante en concert" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-jam-950/80 to-jam-900/60"></div>
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-semibold mb-8">
            <Icons.Community className="w-4 h-4 mr-2" />
            Le public est acteur
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-jam-100 to-jam-400 mb-6 tracking-normal">
            Live <span className="text-neon-pink">Jukebox</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Vous choisissez, on joue — et la soirée est à vous. Un juke-box vivant où le public tient la baguette : on vote, on chante, on monte sur scène. Marco s'occupe du reste.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
            <button
              onClick={() => onNavigate(PageView.CONTACT)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(255,0,128,0.4)] hover:scale-105 transition-transform"
            >
              Réserver un Live Jukebox
            </button>
            <button
              onClick={() => scrollTo('comment')}
              className="px-8 py-4 rounded-full border border-jam-500 text-jam-100 font-semibold text-lg hover:bg-jam-800 transition-colors flex items-center justify-center gap-2"
            >
              <Icons.ChevronDown className="w-5 h-5 text-neon-blue" />
              Comment ça marche ?
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* COMMENT ÇA MARCHE — 3 PARTICIPATIONS                          */}
      {/* ============================================================= */}
      <section id="comment" className="py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Le public entre <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">en scène</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trois façons de participer, du bout des doigts jusqu'au micro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="relative bg-jam-900 rounded-3xl p-8 border border-jam-800 hover:border-neon-pink/40 transition-all duration-300 shadow-xl flex flex-col">
                <span className="absolute -top-4 left-8 w-9 h-9 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white font-bold flex items-center justify-center shadow-lg">
                  {idx + 1}
                </span>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-jam-950 border border-jam-700 mb-6 mt-2">
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-300 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* LE PONT VERS LES MUSICIENS                                    */}
      {/* ============================================================= */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-jam-700 bg-gradient-to-r from-jam-900 to-jam-800 p-10 md:p-14 text-center">
            <div className="absolute top-[-30%] right-[-10%] w-80 h-80 bg-neon-pink/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-neon-blue font-semibold mb-4">Le soir où tout commence</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl mx-auto">
                Un micro attrapé un soir, et c'est parfois une vocation qui démarre.
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Vous y avez pris goût ? Le Live Jukebox est la première marche. La suivante, c'est votre propre scène, accompagné par des pros.
              </p>
              <button
                onClick={() => onNavigate(PageView.MUSICIANS)}
                className="inline-flex items-center gap-2 text-neon-pink font-semibold hover:text-white transition-colors"
              >
                Découvrir l'expérience musiciens
                <Icons.ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* OÙ                                                            */}
      {/* ============================================================= */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Partout où il y a du monde</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Le Live Jukebox s'installe là où l'ambiance se crée.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {venues.map((v) => (
              <span key={v} className="px-4 py-2 bg-jam-900 border border-jam-700 rounded-full text-white text-sm font-medium">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA FINAL                                                     */}
      {/* ============================================================= */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-jam-900 to-jam-800 border border-jam-700 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-blue/10"></div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Offrez à votre public une soirée dont il est la vedette.
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                On étudie ensemble la date, le lieu et le déroulé de votre Live Jukebox.
              </p>
              <button
                onClick={() => onNavigate(PageView.CONTACT)}
                className="px-10 py-4 bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:scale-105 transition-transform"
              >
                Réserver un Live Jukebox
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
