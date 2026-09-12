
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
