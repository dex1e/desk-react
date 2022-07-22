export interface IColumns {
  id: string;
  title: string;
}

export interface ICard {
  columnId: string;
  id: string;
  title: string;
  description: string;
}

export interface IComment {
  cardId: string;
  id: string;
  author: string;
  text: string;
}
