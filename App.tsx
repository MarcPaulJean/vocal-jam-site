
import React, { useState, useEffect } from 'react';
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

  // Remonter en haut de page à chaque changement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    // On ajoute une clé pour forcer l'animation à chaque changement de page
    const content = (() => {
      switch (currentPage) {
        case PageView.HOME:
          return <HomePage onNavigate={setCurrentPage} />;
        case PageView.EXPERIENCE:
          return <ExperiencePage onNavigate={setCurrentPage} />;
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
    <div className="bg-jam-950 text-gray-100 min-h-screen font-sans selection:bg-neon-pink selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
