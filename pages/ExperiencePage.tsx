
import React from 'react';
import { Icons } from '../components/Icons';

export const ExperiencePage = () => {
  return (
    <div className="py-12 bg-jam-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            L'Expérience <span className="text-jam-500">Vocal Jam</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            De la préparation studio aux applaudissements du public, nous gérons tout l'aspect technique et logistique. Vous ne gérez que l'émotion.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* ÉTAPE 1 : LA PRÉPARATION (SPLIT) */}
          <div className="bg-jam-900 rounded-3xl p-1 border border-jam-800 shadow-xl overflow-hidden">
            <div className="p-8 pb-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jam-800 mb-4 shadow-inner">
                <Icons.Music className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1. La Préparation</h3>
              <p className="text-lg text-jam-400 font-medium mb-8">Deux parcours, une même exigence professionnelle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-1 bg-jam-800">
              
              {/* Option A : Reprises */}
              <div className="bg-jam-900 p-8 hover:bg-jam-900/80 transition-colors">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-neon-pink">A.</span> Parcours Interprète
                  <span className="text-xs font-normal text-gray-500 border border-gray-700 rounded px-2 py-0.5 ml-auto">Cover / Reprise</span>
                </h4>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">
                  Vous souhaitez interpréter les grands titres de la chanson française ou internationale.
                </p>
                <ul className="space-y-3">
                  {[
                    "Sélection de 30+ titres adaptés à votre voix.",
                    "Accès bibliothèque Backtracks Pro.",
                    "Coaching scénique de base.",
                    "Répétitions en conditions live."
                  ].map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-1.5 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Option B : Création */}
              <div className="bg-jam-900 p-8 hover:bg-jam-900/80 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-blue/10 to-transparent"></div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-neon-blue">B.</span> Parcours Créateur
                  <span className="text-xs font-normal text-gray-500 border border-gray-700 rounded px-2 py-0.5 ml-auto">Composition</span>
                </h4>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">
                  Vous avez des textes ou des mélodies ? Donnons vie à vos créations originales.
                </p>
                <ul className="space-y-3">
                  {[
                    "Aide à la composition (Paroles & Musique).",
                    "Arrangements sur mesure (Vocal Jam).",
                    "Direction artistique personnalisée.",
                    "Enregistrement Maquette Studio."
                  ].map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* ÉTAPE 2 : LA TECH */}
          <div className="bg-jam-900 rounded-3xl p-8 border border-jam-800 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-jam-800 flex items-center justify-center shadow-inner">
                <Icons.Tech className="w-10 h-10 text-neon-blue" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">2. La Technologie</h3>
              <p className="text-lg text-jam-400 font-medium mb-4">Le filet de sécurité du 'Live Karaoké' avancé.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Prompteur numérique : Paroles et accords défilants synchronisés.",
                  "Sonorisation Façade (FOH) pour le public.",
                  "Retours (Wedge) pour votre confort d'écoute.",
                  "Mixage audio en temps réel par un ingénieur."
                ].map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-neon-blue mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ÉTAPE 3 : LA PERFORMANCE */}
          <div className="bg-jam-900 rounded-3xl p-8 border border-jam-800 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-jam-800 flex items-center justify-center shadow-inner">
                <Icons.Mic className="w-10 h-10 text-jam-400" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">3. La Performance</h3>
              <p className="text-lg text-jam-400 font-medium mb-4">Le moment de vérité, mais bien entouré.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Accompagnement guitare rythmique live.",
                  "Harmonies vocales de soutien.",
                  "Eclairage scénique dynamique.",
                  "Captation photo/vidéo pour votre promotion."
                ].map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-jam-400 mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-jam-900 to-jam-800 rounded-3xl p-10 text-center border border-jam-700">
          <h3 className="text-2xl font-bold text-white mb-4">Où jouer ?</h3>
          <p className="text-gray-400 mb-8">
            Vocal Jam s'installe partout : Terrasses de café, campings, fêtes privées, événements d'entreprise, ou même en busking dans la rue.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            {['Café-Concert', 'Camping', 'Mariage', 'Fête de la Musique', 'Entreprise'].map((place) => (
              <span key={place} className="px-4 py-2 bg-jam-950 border border-jam-600 rounded-lg text-jam-200 text-sm font-semibold">
                {place}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
