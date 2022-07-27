import { IComment } from "types";

export interface ICommentInitialState {
  comments: Record<string, IComment>;
}

export interface IRenameCommentPayload {
  commentId: string;
  newCommentText: string;
}

export interface IAddCommentPayload {
  cardId: string;
  commentText: string;
  user: string;
}
