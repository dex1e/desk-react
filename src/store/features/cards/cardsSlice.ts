import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "types";
import { v4 as uuidv4 } from "uuid";

import { initialState } from "./initialState";
import { IAddCard, IEditDescription, IRenameCardsPayload } from "./types";

export const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    renameCard: (state, action: PayloadAction<IRenameCardsPayload>) => {
      const { cardId, newTitle } = action.payload;
      state.cards[cardId].title = newTitle;
    },

    addCard: (state, action: PayloadAction<IAddCard>) => {
      const cardId = uuidv4();

      const { cardName, columnId } = action.payload;

      const newCard: ICard = {
        columnId,
        id: cardId,
        title: cardName,
        description: "",
      };

      state.cards[cardId] = newCard;
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;

      delete state.cards[cardId];
    },

    editCardDescription: (state, action: PayloadAction<IEditDescription>) => {
      const { cardId, newDescription } = action.payload;

      state.cards[cardId].description = newDescription;
    },
  },
});

export const { renameCard, addCard, deleteCard, editCardDescription } =
  cardsSlice.actions;

export default cardsSlice.reducer;
