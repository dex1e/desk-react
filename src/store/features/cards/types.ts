import { ICard } from "types";

export interface ICardInitialState {
  cards: Record<string, ICard>;
}

export interface IRenameCardsPayload {
  cardId: string;
  newTitle: string;
}

export interface IEditDescription {
  cardId: string;
  newDescription: string;
}
