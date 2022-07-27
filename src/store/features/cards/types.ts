import { ICard } from "types";

export interface ICardInitialState {
  cards: Record<string, ICard>;
}

export interface IAddCard {
  cardName: string;
  columnId: string;
}

export interface IRenameCardsPayload {
  cardId: string;
  newTitle: string;
}

export interface IEditDescription {
  cardId: string;
  newDescription: string;
}
