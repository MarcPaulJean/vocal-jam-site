
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
  EXPERIENCE = 'EXPERIENCE',
  SETLIST_AI = 'SETLIST_AI',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT'
}
