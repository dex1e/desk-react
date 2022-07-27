import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "types";
import { v4 as uuidv4 } from "uuid";

import {
  IAddCommentPayload,
  ICommentInitialState,
  IRenameCommentPayload,
} from "./types";

const initialState: ICommentInitialState = { comments: {} };

export const commentsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    renameComment: (state, action: PayloadAction<IRenameCommentPayload>) => {
      const { commentId, newCommentText } = action.payload;

      state.comments[commentId].text = newCommentText;
    },

    addComment: (state, action: PayloadAction<IAddCommentPayload>) => {
      const commentId = uuidv4();

      const { commentText, cardId, user } = action.payload;

      const newComment: IComment = {
        cardId,
        id: commentId,
        author: user,
        text: commentText,
      };

      state.comments[commentId] = newComment;
    },

    deleteComment: (state, action: PayloadAction<string>) => {
      delete state.comments[action.payload];
    },
  },
});

export const { renameComment, addComment, deleteComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
