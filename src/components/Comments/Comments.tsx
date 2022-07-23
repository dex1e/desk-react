import { FC, useState } from "react";

import styled from "styled-components";
import { IComment } from "types";

interface CommentsProps {
  comment: IComment;
  commentId: string;
  onCommentTextAreaOpen: (idComment: string) => void;
  onRenameComment: (commentId: string, newCommentText: string) => void;
  onDeleteComment: (commentId: string) => void;
}

export const Comments: FC<CommentsProps> = ({
  comment,
  commentId,
  onCommentTextAreaOpen,
  onRenameComment,
  onDeleteComment,
}) => {
  const [isRenameActive, setIsRenameActive] = useState(false);
  const [commentText, setCommentText] = useState(comment.text);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newCommentText = event.target.value;
    setCommentText(newCommentText);
  };

  const handleEditCommentBlur = () => {
    const trimmedCommentText = commentText.trim();

    if (trimmedCommentText) {
      onRenameComment(comment.id, trimmedCommentText);
      setCommentText(trimmedCommentText);
    } else {
      setCommentText(comment.text);
    }
    setIsRenameActive(false);
  };

  const handleEnterEditCommentText = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleEditCommentBlur();
      event.target.blur();
      setIsRenameActive(false);
    }
  };

  const handleClickEditComment = () => {
    setIsRenameActive(true);
    onCommentTextAreaOpen(comment.id);
  };

  const deleteComment = () => onDeleteComment(comment.id);

  return (
    <Root>
      <AuthorComment>{comment.author}</AuthorComment>
      {isRenameActive && commentId === comment.id ? (
        <CommentRenameTextArea
          value={commentText}
          onChange={handleCommentChange}
          onBlur={handleEditCommentBlur}
          onKeyDown={handleEnterEditCommentText}
        />
      ) : (
        <Comment>{comment.text}</Comment>
      )}
      <ButtonsWrapper>
        <ButtonEdit onClick={handleClickEditComment}>Edit</ButtonEdit>
        <ButtonDelete onClick={deleteComment}>Delete</ButtonDelete>
      </ButtonsWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 14px;
`;

const AuthorComment = styled.h3`
  width: 100%;
  min-height: 15px;
  font-weight: 700;
`;

const CommentRenameTextArea = styled.textarea`
  width: 100%;
  min-height: 62px;
  max-height: 180px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow-y: hidden;

  &:hover {
    cursor: pointer;
    resize: vertical;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
    overflow-y: visible;
  }
`;

const Comment = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  overflow: hidden;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ButtonsWrapper = styled.span`
  display: flex;
  gap: 5px;
  font-size: 14px;
  padding: 0 12px;
  text-decoration: underline;
  color: var(--gray);
`;

const ButtonEdit = styled.button`
  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;

const ButtonDelete = styled.button`
  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;
