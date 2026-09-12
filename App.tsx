
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HubPage } from './pages/HubPage';
import { MusiciansPage } from './pages/MusiciansPage';
import { HostPage } from './pages/HostPage';
import { LiveJukeboxPage } from './pages/LiveJukeboxPage';
import { ContactPage } from './pages/ContactPage';
import { PageView, ReservationContext, NavigateFn } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);
  const [reservationContext, setReservationContext] = useState<ReservationContext>('');

  // Navigation : quand on arrive sur la page Réserver, on mémorise le contexte
  // de la « porte » d'origine (musicien / hôte / Live Jukebox) pour pré-remplir
  // le formulaire.
  const handleNavigate: NavigateFn = (page, context) => {
    if (page === PageView.CONTACT) setReservationContext(context ?? '');
    setCurrentPage(page);
  };

  // Remonter en haut de page à chaque changement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    // On ajoute une clé pour forcer l'animation à chaque changement de page
    const content = (() => {
      switch (currentPage) {
        case PageView.HOME:
          return <HubPage onNavigate={handleNavigate} />;
        case PageView.MUSICIANS:
          return <MusiciansPage onNavigate={handleNavigate} />;
        case PageView.HOST:
          return <HostPage onNavigate={handleNavigate} />;
        case PageView.LIVEJUKEBOX:
          return <LiveJukeboxPage onNavigate={handleNavigate} />;
        case PageView.CONTACT:
          return <ContactPage onNavigate={handleNavigate} context={reservationContext} />;
        default:
          return <HubPage onNavigate={handleNavigate} />;
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
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
