export interface IUser {
  name: string;
}

export interface IColumn {
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

export enum LocalStorageVariables {
  USER = "user",
  COLUMNS = "columns",
  CARDS = "cards",
  COMMENTS = "comments",
}
