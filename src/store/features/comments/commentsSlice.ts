import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "types";

import { initialState } from "./initialState";
import { IRenameComment } from "./types";

export const commentsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    renameComment: (state, action: PayloadAction<IRenameComment>) => {
      const { commentId, newCommentText } = action.payload;

      state.comments[commentId].text = newCommentText;
    },

    addComment: (state, action: PayloadAction<Record<string, IComment>>) => {
      state.comments = { ...state.comments, ...action.payload };
    },

    deleteComment: (state, action: PayloadAction<string>) => {
      delete state.comments[action.payload];
    },
  },
});

export const { renameComment, addComment, deleteComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
