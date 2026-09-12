
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

// Image d'illustration (Unsplash)
const IMG_TERRASSE = "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1600"; // Terrasse en soirée

interface HostPageProps {
  onNavigate: (page: PageView) => void;
}

const venues = [
  { icon: Icons.Coffee, label: 'Terrasses de cafés', desc: 'Une soirée live qui prolonge l’apéro et remplit les tables.' },
  { icon: Icons.Tent, label: 'Campings', desc: 'L’animation qui rassemble les vacanciers et fait parler du site.' },
  { icon: Icons.Party, label: 'Fêtes privées', desc: 'Un moment unique, mémorable, où vos invités deviennent le public.' },
  { icon: Icons.Business, label: 'Événements d’entreprise', desc: 'Une parenthèse humaine et conviviale qui marque les esprits.' },
  { icon: Icons.Music, label: 'Busking / Rue', desc: 'De la vie, de la musique, une ambiance qui attire les passants.' },
];

const reasons = [
  {
    icon: Icons.Sprout,
    iconClass: 'text-neon-pink',
    title: 'La découverte culturelle',
    text: "Votre lieu devient un tremplin. Vous participez à l’émergence de nouveaux talents et vous offrez à votre public quelque chose de rare : de vrais artistes, en vrai, chez vous.",
  },
  {
    icon: Icons.Community,
    iconClass: 'text-neon-blue',
    title: 'L’effet tribu',
    text: "Un artiste ne vient jamais seul. Famille, amis, supporters : chacun amène sa tribu. Une soirée de 5 talents rassemble facilement 20 à 30 personnes — un public déjà conquis, sans que vous ayez à le chercher.",
  },
  {
    icon: Icons.Trending,
    iconClass: 'text-jam-400',
    title: 'L’opportunité business',
    text: "Plus de monde, plus de consommations, une ambiance qui fidélise. Une animation qui attire une clientèle nouvelle et fait rayonner votre lieu — sans le coût ni la logistique d’un concert classique.",
  },
];

const steps = [
  { icon: Icons.Location, title: 'Vous ouvrez vos portes', text: 'Une date, un coin pour la scène, une prise de courant. C’est tout ce dont nous avons besoin.' },
  { icon: Icons.Tech, title: 'On s’occupe de tout', text: 'Son, technique, artistes, ambiance : notre équipe gère l’intégralité de la soirée.' },
  { icon: Icons.Star, title: 'Votre public vit la scène', text: 'Vos clients profitent d’une soirée live inoubliable… et reviennent.' },
];

export const HostPage: React.FC<HostPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-jam-950">
      {/* ============================================================= */}
      {/* HERO                                                          */}
      {/* ============================================================= */}
      <div className="relative overflow-hidden bg-jam-900 pt-16 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={IMG_TERRASSE} alt="Terrasse animée en soirée" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-jam-950/80 to-jam-900/60"></div>
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-pink/30 bg-neon-pink/10 text-neon-pink text-sm font-semibold mb-8">
            <Icons.Handshake className="w-4 h-4 mr-2" />
            Vous avez un lieu ? Donnez-lui une scène.
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-jam-100 to-jam-400 mb-6 tracking-tight">
            Accueillez une <span className="text-neon-pink">Vocal Jam</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Offrez à vos clients une soirée live inoubliable — sans effort, sans risque. Nous amenons les artistes, la technique et l’ambiance. Et les artistes, eux, amènent leur public.
          </p>

          <div className="mt-10 flex justify-center w-full">
            <button
              onClick={() => onNavigate(PageView.CONTACT)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(255,0,128,0.4)] hover:scale-105 transition-transform"
            >
              Proposer mon lieu
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* POURQUOI ACCUEILLIR — 3 LEVIERS                              */}
      {/* ============================================================= */}
      <section id="pourquoi" className="py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Pourquoi accueillir une <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Vocal Jam</span> ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trois bonnes raisons de transformer votre lieu en scène, le temps d’une soirée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, idx) => (
              <div key={idx} className="bg-jam-900 rounded-3xl p-8 border border-jam-800 hover:border-neon-pink/40 transition-all duration-300 shadow-xl flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-jam-950 border border-jam-700 mb-6">
                  <r.icon className={`w-7 h-7 ${r.iconClass}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
                <p className="text-gray-300 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* STAT — L'EFFET TRIBU                                          */}
      {/* ============================================================= */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-jam-700 bg-gradient-to-r from-jam-900 to-jam-800 p-10 md:p-14 text-center">
            <div className="absolute top-[-30%] right-[-10%] w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-neon-blue font-semibold mb-6">L’effet tribu, en chiffres</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                <div>
                  <p className="text-6xl md:text-7xl font-extrabold text-neon-pink leading-none">5</p>
                  <p className="text-gray-300 mt-2 font-medium">talents sur scène</p>
                </div>
                <Icons.ArrowRight className="w-10 h-10 text-jam-400 rotate-90 sm:rotate-0" />
                <div>
                  <p className="text-6xl md:text-7xl font-extrabold text-neon-blue leading-none">20-30</p>
                  <p className="text-gray-300 mt-2 font-medium">spectateurs, au minimum</p>
                </div>
              </div>
              <p className="mt-8 text-lg text-gray-200 max-w-2xl mx-auto">
                Chaque artiste vient entouré de ses proches. Une soirée Vocal Jam, c’est un public <span className="text-white font-semibold">déjà présent, motivé et prêt à consommer</span> — sans effort de communication de votre part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* TYPES DE LIEUX                                                */}
      {/* ============================================================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Un lieu, mille possibilités</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Partout où il y a un public, il y a une scène qui sommeille.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {venues.map((v, idx) => (
              <div key={idx} className="bg-jam-900 rounded-2xl p-6 border border-jam-800 hover:border-neon-blue/40 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-jam-950 border border-jam-700 mb-4">
                  <v.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-white font-bold mb-2">{v.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* COMMENT ÇA MARCHE                                             */}
      {/* ============================================================= */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Pour vous, tout est simple. La complexité, c’est notre métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="relative bg-jam-900/50 rounded-3xl p-8 border border-jam-800 text-center">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-neon-pink to-jam-500 text-white font-bold flex items-center justify-center shadow-lg">
                  {idx + 1}
                </span>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-jam-950 border border-jam-700 mb-5 mt-2">
                  <s.icon className="w-7 h-7 text-neon-pink" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-300 leading-relaxed">{s.text}</p>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Votre lieu a une âme. Donnez-lui une scène.
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Parlons de votre projet, sans engagement. On étudie ensemble la date, le lieu et le déroulé de votre première soirée Vocal Jam.
              </p>
              <button
                onClick={() => onNavigate(PageView.CONTACT)}
                className="px-10 py-4 bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:scale-105 transition-transform"
              >
                Proposer mon lieu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
