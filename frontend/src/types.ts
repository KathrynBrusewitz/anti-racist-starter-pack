export interface Book {
  id: number;
  title: string;
  author: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  title: string;
  author: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface Documentary {
  id: number;
  title: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface Podcast {
  id: number;
  title: string;
  author: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface Talk {
  id: number;
  title: string;
  author?: string;
  link: string;
  created_at: string;
  updated_at: string;
}
