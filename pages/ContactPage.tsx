
import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { contactConfig } from '../data/mockData';
import { PageView } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instrument: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Création du sujet et du corps de l'email
    const subject = `Demande de réservation Vocal Jam - ${formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AInstrument: ${formData.instrument}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Ouverture du client mail par défaut
    window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-jam-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Colonne Gauche : Infos Contact */}
        <div className="bg-gradient-to-br from-jam-900 to-jam-800 rounded-3xl p-8 border border-jam-700 shadow-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Parlons de votre projet</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Vous avez le talent, nous avons la scène. Que ce soit pour une soirée privée ou un événement public, {contactConfig.contactName} et l'équipe Vocal Jam sont prêts à vous accompagner.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = `tel:${contactConfig.phone.replace(/\s/g, '')}`}>
                <div className="w-12 h-12 rounded-full bg-jam-950 border border-jam-600 flex items-center justify-center group-hover:border-neon-pink transition-colors">
                  <Icons.Phone className="w-6 h-6 text-neon-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Appelez {contactConfig.contactName}</p>
                  <p className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors">{contactConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.location.href = `mailto:${contactConfig.email}`}>
                <div className="w-12 h-12 rounded-full bg-jam-950 border border-jam-600 flex items-center justify-center group-hover:border-neon-blue transition-colors">
                  <Icons.Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Par email</p>
                  <p className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors">{contactConfig.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.open(`https://${contactConfig.website}`, '_blank')}>
                <div className="w-12 h-12 rounded-full bg-jam-950 border border-jam-600 flex items-center justify-center group-hover:border-jam-400 transition-colors">
                  <Icons.Website className="w-6 h-6 text-jam-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Site Web</p>
                  <p className="text-lg font-bold text-white group-hover:text-jam-400 transition-colors">{contactConfig.website}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-jam-950 border border-jam-600 flex items-center justify-center">
                  <Icons.Location className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Zone d'intervention</p>
                  <p className="text-lg font-bold text-white">{contactConfig.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-jam-950/50 rounded-2xl border border-jam-700/50">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Icons.Star className="w-4 h-4 text-yellow-400" />
              Pourquoi réserver ?
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Devis gratuit et personnalisé</li>
              <li>• Étude de votre répertoire</li>
              <li>• Vérification des disponibilités techniques</li>
            </ul>
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div className="bg-jam-900 rounded-3xl p-8 border border-jam-800 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Formulaire de demande</h3>
            <p className="text-sm text-gray-400">Remplissez ce formulaire pour pré-remplir votre email.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Nom</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#1a0b2e', color: '#ffffff' }}
                  className="mt-1 block w-full rounded-lg border border-jam-700 px-4 py-3 focus:ring-neon-pink focus:border-neon-pink outline-none transition-colors placeholder-gray-500" 
                  placeholder="Votre nom" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#1a0b2e', color: '#ffffff' }}
                  className="mt-1 block w-full rounded-lg border border-jam-700 px-4 py-3 focus:ring-neon-pink focus:border-neon-pink outline-none transition-colors placeholder-gray-500" 
                  placeholder="vous@exemple.com" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Instrument / Voix</label>
              <input 
                type="text" 
                name="instrument"
                value={formData.instrument}
                onChange={handleChange}
                style={{ backgroundColor: '#1a0b2e', color: '#ffffff' }}
                className="mt-1 block w-full rounded-lg border border-jam-700 px-4 py-3 focus:ring-neon-pink focus:border-neon-pink outline-none transition-colors placeholder-gray-500" 
                placeholder="Ex: Chant Rock, Guitare Acoustique..." 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#1a0b2e', color: '#ffffff' }}
                className="mt-1 block w-full rounded-lg border border-jam-700 px-4 py-3 focus:ring-neon-pink focus:border-neon-pink outline-none transition-colors placeholder-gray-500" 
                placeholder="Parlez-nous de votre projet, vos envies, votre expérience..."
              ></textarea>
            </div>

            <button type="submit" className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-gradient-to-r from-neon-pink to-jam-600 hover:from-neon-pink hover:to-jam-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-pink transition-all transform hover:scale-[1.02]">
              <Icons.Mail className="mr-2 h-5 w-5" />
              Envoyer la demande
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Cela ouvrira votre logiciel de messagerie par défaut.
            </p>
          </form>

          <div className="mt-8 pt-8 border-t border-jam-800 grid grid-cols-2 gap-4 text-center">
              <div 
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => onNavigate(PageView.EXPERIENCE)}
              >
                  <div className="p-2 rounded-lg group-hover:bg-jam-800 transition-colors">
                    <Icons.Sound className="text-neon-blue mb-2 h-6 w-6" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Son Pro</span>
                  </div>
              </div>
              <div 
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => onNavigate(PageView.EXPERIENCE)}
              >
                  <div className="p-2 rounded-lg group-hover:bg-jam-800 transition-colors">
                    <Icons.Screen className="text-neon-blue mb-2 h-6 w-6" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Prompteur</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
