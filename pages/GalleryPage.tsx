import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { galleryItems, GalleryItem } from '../data/mockData';
import { PageView } from '../types';

interface GalleryPageProps {
  onNavigate: (page: PageView) => void;
}

// Extracted GalleryCard component to fix 'key' prop issue and improve performance
const GalleryCard: React.FC<{ item: GalleryItem; onClick: (item: GalleryItem) => void }> = ({ item, onClick }) => (
  <div 
    onClick={() => onClick(item)}
    className="group relative bg-jam-900 rounded-2xl overflow-hidden shadow-xl border border-jam-800 hover:border-neon-pink/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
  >
    {/* Image Area */}
    <div className="h-48 md:h-56 w-full relative overflow-hidden">
      <img 
        src={item.imageUrl} 
        alt={`Performance de ${item.artist}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-transparent to-transparent opacity-80"></div>
      
      {item.type === 'video' ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-lg">
            <Icons.Play className="w-6 h-6 text-white fill-white pl-1" />
          </div>
        </div>
      ) : (
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 border border-white/10">
          <Icons.Camera className="w-3 h-3 text-gray-200" />
          <span className="text-[10px] font-medium text-white uppercase tracking-wide">Photo</span>
        </div>
      )}
      
      <div className="absolute bottom-3 left-3 right-3">
        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold shadow-sm backdrop-blur-sm border ${item.type === 'video' ? 'bg-neon-blue/80 border-neon-blue/30 text-white' : 'bg-jam-500/80 border-jam-400/30 text-white'}`}>
          {item.style}
        </span>
      </div>
    </div>

    {/* Content Info */}
    <div className="p-5 flex-1 flex flex-col bg-jam-900">
      <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors mb-1 truncate">{item.artist}</h3>
      <p className="text-xs text-jam-400 flex items-center gap-1 mb-3">
        <Icons.Event className="w-3 h-3" />
        {item.event}
      </p>
      <p className="text-gray-400 text-sm italic border-l-2 border-jam-700 pl-3 leading-snug mt-auto line-clamp-3">
        "{item.quote}"
      </p>
    </div>
  </div>
);

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  // Séparation des données
  const videos = galleryItems.filter(item => item.type === 'video');
  const photos = galleryItems.filter(item => item.type === 'photo');

  return (
    <div className="min-h-screen bg-jam-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-jam-900 rounded-full mb-4 shadow-lg border border-jam-700">
            <Icons.Camera className="w-8 h-8 text-neon-pink" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Galerie <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Vocal Jam</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Des premières notes en studio jusqu'à l'émotion de la scène.
          </p>
        </div>

        {/* SECTION 1 : CRÉATIONS / VIDÉOS (GRILLE CLASSIQUE) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-jam-700"></div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Icons.Music className="text-neon-blue" />
              Studio & Créations
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-jam-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={openLightbox} />
            ))}
          </div>
        </div>

        {/* SECTION 2 : PHOTOS / SOUVENIRS (GRILLE SIMPLE) */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-jam-700"></div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 whitespace-nowrap">
              <Icons.Community className="text-jam-400" />
              Rencontres & Souvenirs
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-jam-700"></div>
          </div>

          {/* Grille Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photos.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={openLightbox} />
            ))}
          </div>
        </div>

        <div className="text-center bg-jam-900/50 rounded-3xl p-10 border border-dashed border-jam-700">
          <Icons.Film className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Votre projet commence ici</h3>
          <p className="text-gray-400 mb-8">
            Que ce soit pour une reprise ou une composition originale, nous documentons votre parcours.
          </p>
          <button 
            onClick={() => onNavigate(PageView.CONTACT)}
            className="px-8 py-3 bg-jam-800 hover:bg-jam-700 text-white rounded-full font-semibold transition-colors border border-jam-600"
          >
            Lancer mon projet
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-neon-pink transition-colors z-[110]"
          >
            <Icons.Close className="w-8 h-8" />
          </button>

          <div 
            className="w-full max-w-5xl max-h-[90vh] flex flex-col bg-jam-900 rounded-xl overflow-hidden shadow-2xl border border-jam-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Container */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center group">
              {selectedItem.type === 'video' && selectedItem.videoId ? (
                <>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1&rel=0&origin=${window.location.origin}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="z-10"
                  ></iframe>
                </>
              ) : (
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.artist}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>

            {/* Caption & Fallback Link */}
            <div className="p-6 bg-jam-900 flex flex-col sm:flex-row gap-6 justify-between items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.artist}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Icons.Event className="w-4 h-4 text-neon-blue" />
                    {selectedItem.event}
                  </span>
                  <span className="px-2 py-1 bg-jam-800 rounded border border-jam-700">
                    {selectedItem.style}
                  </span>
                </div>
                <p className="mt-4 text-gray-400 italic border-l-2 border-neon-pink pl-4">
                  "{selectedItem.quote}"
                </p>
              </div>

              {/* Bouton de secours YouTube */}
              {selectedItem.type === 'video' && selectedItem.videoId && (
                <div className="flex flex-col gap-2 items-center sm:items-end">
                   <a 
                    href={`https://www.youtube.com/watch?v=${selectedItem.videoId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white text-sm font-bold rounded-lg transition-colors shadow-lg"
                  >
                    <Icons.Play className="w-4 h-4 fill-current" />
                    Regarder sur YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};