import { IComment } from "types";

export interface ICommentInitialState {
  comments: Record<string, IComment>;
}

export interface IRenameComment {
  commentId: string;
  newCommentText: string;
}

export interface IAddComment {
  cardId: string;
  commentText: string;
  user: string;
}
