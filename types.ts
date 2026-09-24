
export interface SongRecommendation {
  title: string;
  artist: string;
  genre: string;
  vibe: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: string;
}

export enum PageView {
  HOME = 'HOME',
  MUSICIANS = 'MUSICIANS',
  HOST = 'HOST',
  LIVEJUKEBOX = 'LIVEJUKEBOX',
  CONTACT = 'CONTACT'
}

// Contexte de la demande de réservation, transmis depuis la « porte » d'origine
// (musicien / hôte / Live Jukebox) pour pré-remplir le formulaire de contact.
export type ReservationContext = '' | 'musiciens' | 'hotes' | 'livejukebox' | 'backtrack';

// Navigation : deuxième argument optionnel pour transporter le contexte de
// réservation lorsqu'on arrive sur la page Réserver.
export type NavigateFn = (page: PageView, context?: ReservationContext) => void;
