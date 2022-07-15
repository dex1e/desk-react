export interface Card {
  id: number;
  title: string;
  description: string;
  activity: Comment[];
}
export interface Comment {
  id: number;
  author: string;
  text: string;
}
