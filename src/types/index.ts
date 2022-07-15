export interface Card {
  id: number;
  title: string;
  description: string;
  comment: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  text: string;
}
