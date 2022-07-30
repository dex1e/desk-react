import { ICard } from "types";

export interface ICardInitialState {
  cards: Record<string, ICard>;
}

export interface IAddCardPayload {
  cardName: string;
  columnId: string;
}

export interface IRenameCardsPayload {
  cardId: string;
  newTitle: string;
}

export interface IEditDescriptionPayload {
  cardId: string;
  newDescription: string;
}
