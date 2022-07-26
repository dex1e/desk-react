import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "types";

import { initialState } from "./initialState";
import { IEditDescription, IRenameCardsPayload } from "./types";

export const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    renameCard: (state, action: PayloadAction<IRenameCardsPayload>) => {
      const { cardId, newTitle } = action.payload;
      state.cards[cardId].title = newTitle;
    },

    addCard: (state, action: PayloadAction<Record<string, ICard>>) => {
      state.cards = { ...state.cards, ...action.payload };
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
