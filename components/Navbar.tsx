
import React, { useState } from 'react';
import { Icons } from './Icons';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', page: PageView.HOME, icon: Icons.Star },
    { label: 'L\'Expérience', page: PageView.EXPERIENCE, icon: Icons.Music },
    { label: 'Galerie', page: PageView.GALLERY, icon: Icons.Camera },
    { label: 'Assistant Répertoire', page: PageView.SETLIST_AI, icon: Icons.Energy },
    { label: 'Réserver', page: PageView.CONTACT, icon: Icons.Event },
  ];

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-jam-900/80 backdrop-blur-md border-b border-jam-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => handleNav(PageView.HOME)}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink to-jam-500 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
              <Icons.Mic className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Vocal<span className="text-neon-blue">Jam</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2
                    ${currentPage === item.page 
                      ? 'bg-jam-500 text-white shadow-[0_0_15px_rgba(118,75,162,0.5)]' 
                      : 'text-gray-300 hover:text-white hover:bg-jam-800'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-jam-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-jam-900 border-b border-jam-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full text-left px-3 py-4 rounded-md text-base font-medium flex items-center gap-3
                  ${currentPage === item.page 
                    ? 'bg-jam-800 text-white border-l-4 border-neon-pink' 
                    : 'text-gray-300 hover:text-white hover:bg-jam-800'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
