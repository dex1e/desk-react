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
  id: number;
  author: string;
  text: string;
}

export interface IIdTextAreaVisible {
  a1: boolean;
  a2: boolean;
  a3: boolean;
  a4: boolean;
}
