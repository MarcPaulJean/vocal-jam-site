
import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { galleryItems, GalleryItem } from '../data/mockData';

export const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-jam-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-jam-900 rounded-full mb-4 shadow-lg border border-jam-700">
            <Icons.Camera className="w-8 h-8 text-neon-pink" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Hall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">Fame</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Ils ont osé franchir le pas. Découvrez les artistes qui ont transformé leur rêve en performance live avec Vocal Jam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => openLightbox(item)}
              className="group relative bg-jam-900 rounded-2xl overflow-hidden shadow-xl border border-jam-800 hover:border-neon-pink/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
            >
              
              {/* Image Area with Overlay */}
              <div className="h-64 w-full relative">
                <img 
                  src={item.imageUrl} 
                  alt={`Performance de ${item.artist}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-jam-950 via-jam-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {item.type === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                      <Icons.Play className="w-8 h-8 text-white fill-white pl-1" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
                    <Icons.Camera className="w-4 h-4 text-gray-200" />
                    <span className="text-xs font-medium text-white">Photo</span>
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 rounded bg-neon-blue/80 border border-neon-blue/30 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
                    {item.style}
                  </span>
                </div>
              </div>

              {/* Content Info */}
              <div className="p-6 relative bg-jam-900">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">{item.artist}</h3>
                    <p className="text-sm text-jam-400 flex items-center gap-1 mt-1">
                      <Icons.Event className="w-3 h-3" />
                      {item.event}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Icons.Star className="w-4 h-4 text-neon-pink absolute -top-1 -left-2 opacity-50" />
                  <p className="text-gray-300 italic text-sm pl-4 border-l-2 border-jam-700">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-jam-900/50 rounded-3xl p-10 border border-dashed border-jam-700">
          <Icons.Film className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Votre performance ici ?</h3>
          <p className="text-gray-400 mb-8">
            Rejoignez la communauté Vocal Jam. Nous filmons toutes les prestations pour vous fournir du contenu pro.
          </p>
          <button className="px-8 py-3 bg-jam-800 hover:bg-jam-700 text-white rounded-full font-semibold transition-colors border border-jam-600">
            Je veux ma place sur le mur
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
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique DANS la modal
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
                  <p className="text-[10px] text-gray-500 max-w-[200px] text-center sm:text-right leading-tight">
                    * Si l'écran reste noir ici, c'est une restriction liée au mode "Prototype". Cela fonctionnera sur vocaljam.org.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
