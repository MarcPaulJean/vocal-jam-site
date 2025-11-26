
import React, { useState } from 'react';
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

  const renderPage = () => {
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
  };

  return (
    <div className="bg-jam-950 text-gray-100 min-h-screen font-sans selection:bg-neon-pink selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
