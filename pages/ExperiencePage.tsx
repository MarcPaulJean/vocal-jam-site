import React from 'react';
import { Icons } from '../components/Icons';

export const ExperiencePage = () => {
  const steps = [
    {
      title: "1. La Préparation",
      icon: Icons.Music,
      color: "text-neon-pink",
      description: "Tout commence par la construction de votre show.",
      details: [
        "Sélection de 30+ titres adaptés à votre voix/style.",
        "Accès à notre bibliothèque de Backtracks Pro.",
        "Répétitions en studio professionnel.",
        "Coaching scénique de base."
      ]
    },
    {
      title: "2. La Technologie",
      icon: Icons.Tech,
      color: "text-neon-blue",
      description: "Le filet de sécurité du 'Live Karaoké' avancé.",
      details: [
        "Prompteur numérique : Paroles et accords défilants synchronisés.",
        "Sonorisation Façade (FOH) pour le public.",
        "Retours (Wedge) pour votre confort d'écoute.",
        "Mixage audio en temps réel par un ingénieur."
      ]
    },
    {
      title: "3. La Performance",
      icon: Icons.Mic,
      color: "text-jam-400",
      description: "Le moment de vérité, mais bien entouré.",
      details: [
        "Accompagnement guitare rythmique live.",
        "Harmonies vocales de soutien.",
        "Eclairage scénique dynamique.",
        "Captation photo/vidéo pour votre promotion."
      ]
    }
  ];

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
          {steps.map((step, index) => (
            <div key={index} className="bg-jam-900 rounded-3xl p-8 border border-jam-800 shadow-xl flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-full bg-jam-800 flex items-center justify-center shadow-inner`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-lg text-jam-400 font-medium mb-4">{step.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className={`w-2 h-2 rounded-full mr-3 ${step.color.replace('text-', 'bg-')}`}></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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