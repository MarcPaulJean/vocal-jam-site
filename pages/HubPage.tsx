
import React from 'react';
import { Icons } from '../components/Icons';
import { PageView } from '../types';

interface HubPageProps {
  onNavigate: (page: PageView) => void;
}

// Les trois « portes » du hub : chaque rôle a sa page-pilier et sa teinte.
const doors = [
  {
    page: PageView.MUSICIANS,
    role: 'Vous rêvez de scène ?',
    title: 'Les musiciens',
    desc: "Chanteurs et instrumentistes : vivez l'expérience de la scène, en conditions pro, toujours accompagné.",
    icon: Icons.Mic,
    stripe: 'bg-neon-pink',
    ring: 'hover:border-neon-pink/50',
    iconColor: 'text-neon-pink',
    cta: 'Vivre la scène',
  },
  {
    page: PageView.HOST,
    role: 'Vous avez un lieu ?',
    title: 'Les hôtes',
    desc: "Cafés, campings, fêtes, événements : accueillez une Vocal Jam. Les artistes viennent avec leur public.",
    icon: Icons.Handshake,
    stripe: 'bg-neon-blue',
    ring: 'hover:border-neon-blue/50',
    iconColor: 'text-neon-blue',
    cta: 'Accueillir une soirée',
  },
  {
    page: PageView.LIVEJUKEBOX,
    role: 'Vous êtes le public ?',
    title: 'Live Jukebox',
    desc: "Vous choisissez, on joue. Chantez avec Marco depuis votre place, ou montez au micro — la soirée est à vous.",
    icon: Icons.Music,
    stripe: 'bg-gradient-to-b from-neon-pink to-neon-blue',
    ring: 'hover:border-jam-400/60',
    iconColor: 'text-jam-400',
    cta: 'Devenir acteur',
  },
];

export const HubPage: React.FC<HubPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-jam-950">
      {/* ============================================================= */}
      {/* HERO — LE PRINCIPE                                            */}
      {/* ============================================================= */}
      <div className="relative overflow-hidden bg-jam-900 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-pink/30 bg-neon-pink/10 text-neon-pink text-sm font-semibold mb-8">
            <Icons.Star className="w-4 h-4 mr-2" />
            Jamais seul, toujours ensemble
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-jam-100 to-jam-400 mb-6 tracking-normal">
            La scène live,<br />
            <span className="text-neon-pink">ça se vit à plusieurs</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Vocal Jam, c'est la rencontre. Autour de Marco, il y a toujours un autre acteur : un musicien qui monte sur scène, un lieu qui l'accueille, ou un public qui prend le micro. Choisissez votre façon de la vivre.
          </p>
        </div>
      </div>

      {/* ============================================================= */}
      {/* LES 3 PORTES                                                  */}
      {/* ============================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Trois façons de vivre <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Vocal Jam</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Qui êtes-vous ce soir ? Poussez la bonne porte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doors.map((d) => (
              <button
                key={d.title}
                onClick={() => onNavigate(d.page)}
                className={`group relative text-left bg-jam-900 rounded-3xl border border-jam-800 ${d.ring} transition-all duration-300 shadow-xl overflow-hidden flex flex-col hover:-translate-y-1`}
              >
                <span className={`absolute inset-y-0 left-0 w-1.5 ${d.stripe}`}></span>
                <div className="p-8 flex flex-col flex-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-jam-950 border border-jam-700 mb-6">
                    <d.icon className={`w-7 h-7 ${d.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium text-gray-400 mb-1">{d.role}</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{d.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-1">{d.desc}</p>
                  <span className={`mt-6 inline-flex items-center gap-2 font-semibold ${d.iconColor} group-hover:gap-3 transition-all`}>
                    {d.cta}
                    <Icons.ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SIGNATURE + CTA                                               */}
      {/* ============================================================= */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-jam-900 to-jam-800 border border-jam-700 p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-blue/10"></div>
            <div className="relative z-10">
              <p className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Une scène. Trois manières d'y être. Zéro spectateur passif.
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Un projet, une envie, une date ? Parlons-en — on trouve ensemble la formule qui vous ressemble.
              </p>
              <button
                onClick={() => onNavigate(PageView.CONTACT)}
                className="px-10 py-4 bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:scale-105 transition-transform"
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
