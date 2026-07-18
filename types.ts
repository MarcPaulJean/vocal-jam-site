
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
  HOST = 'HOST',
  CONTACT = 'CONTACT'
}
