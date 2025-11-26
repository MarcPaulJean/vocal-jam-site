
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SetlistGenerator } from './pages/SetlistGenerator';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);
  
  // Logique pour le Swipe (Glissement)
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Ordre logique des pages pour la navigation séquentielle
  const pageOrder = [
    PageView.HOME,
    PageView.EXPERIENCE,
    PageView.GALLERY,
    PageView.SETLIST_AI,
    PageView.CONTACT
  ];

  // Remonter en haut de page à chaque changement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50; // Seuil de 50px pour valider le swipe
    const isRightSwipe = distance < -50;

    const currentIndex = pageOrder.indexOf(currentPage);

    if (isLeftSwipe) {
      // Aller à la page suivante (si possible)
      if (currentIndex < pageOrder.length - 1) {
        setCurrentPage(pageOrder[currentIndex + 1]);
      }
    }

    if (isRightSwipe) {
      // Aller à la page précédente (si possible)
      if (currentIndex > 0) {
        setCurrentPage(pageOrder[currentIndex - 1]);
      }
    }
  };

  const renderPage = () => {
    // On ajoute une clé pour forcer l'animation à chaque changement de page
    const content = (() => {
      switch (currentPage) {
        case PageView.HOME:
          return <HomePage onNavigate={setCurrentPage} />;
        case PageView.EXPERIENCE:
          return <ExperiencePage />;
        case PageView.GALLERY:
          return <GalleryPage onNavigate={setCurrentPage} />;
        case PageView.SETLIST_AI:
          return <SetlistGenerator />;
        case PageView.CONTACT:
          return <ContactPage onNavigate={setCurrentPage} />;
        default:
          return <HomePage onNavigate={setCurrentPage} />;
      }
    })();

    return (
      <div key={currentPage} className="animate-fade-in">
        {content}
      </div>
    );
  };

  return (
    <div 
      className="bg-jam-950 text-gray-100 min-h-screen font-sans selection:bg-neon-pink selection:text-white flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;