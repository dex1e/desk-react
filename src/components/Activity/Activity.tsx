import { FC, useState } from "react";

import { Comments } from "components";
import { Button } from "components/ui/Button";
import { ButtonAdd, ButtonClear } from "components/ui/ButtonCardModal";
import styled, { css } from "styled-components";
import { IComment } from "types";

interface ActivityProps {
  comments: Record<string, IComment>;
  cardId: string;
  onAddComment: (commentText: string, cardId: string) => void;
  onRenameComment: (commentId: string, newCommentText: string) => void;
  onDeleteComment: (commentId: string) => void;
}

export const Activity: FC<ActivityProps> = ({
  comments,
  cardId,
  onAddComment,
  onRenameComment,
  onDeleteComment,
}) => {
  const [commentText, setCommentText] = useState("");
  const [commentIdWithEditCommentForm, setCommentIdWithEditCommentForm] =
    useState("");
  const [isVisibleButtonAddComment, setIsVisibleButtonAddComment] =
    useState(false);
  const commentsArray = Object.values(comments);

  const filteredComments = commentsArray.filter(
    (comment) => comment.cardId === cardId
  );

  const handleTextAreaNewCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let commentText = event.target.value;
    setCommentText(commentText);
  };

  const handleAddComment = () => {
    let trimmedCommentText = commentText.trim();

    if (trimmedCommentText) {
      onAddComment(trimmedCommentText, cardId);
    }
    setCommentText("");
    setIsVisibleButtonAddComment(false);
  };

  const handleCancelComment = () => {
    setCommentText("");
    setIsVisibleButtonAddComment(false);
  };

  const handleVisibleButtonAddComment = () => {
    setIsVisibleButtonAddComment(true);
  };

  const handleCommentAddEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleAddComment();
      setIsVisibleButtonAddComment(false);
      event.target.blur();
    }
  };

  const handleCommentTextAreaOpen = (idComment: string) => {
    setCommentIdWithEditCommentForm(idComment);
  };

  return (
    <Root>
      <Title>Activity</Title>
      <Form>
        <ActivityTextArea
          placeholder="Write a comment..."
          value={commentText}
          onChange={handleTextAreaNewCommentChange}
          onFocus={handleVisibleButtonAddComment}
          onKeyDown={handleCommentAddEnter}
        />
        <ButtonsWrapperComment>
          <StyledButtonAddComment
            text="Save"
            onClick={handleAddComment}
            $isVisibleButtonComment={isVisibleButtonAddComment}
          />
          <StyledButtonClearComment
            $isVisibleButtonComment={isVisibleButtonAddComment}
            text="Clear"
            onClick={handleCancelComment}
          />
        </ButtonsWrapperComment>
      </Form>

      {filteredComments.map((comment) => {
        return (
          <Comments
            key={comment.id}
            comment={comment}
            commentIdWithEditCommentForm={commentIdWithEditCommentForm}
            onCommentTextAreaOpen={handleCommentTextAreaOpen}
            onRenameComment={onRenameComment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 16px;
  gap: 10px;
`;

const Title = styled.h2`
  width: 100%;
  min-height: 25px;
  font-weight: 600px;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ActivityTextArea = styled.textarea`
  width: 100%;
  min-height: 62px;
  max-height: 150px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
    overflow-y: auto;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--gray);
  }
`;

const ButtonsWrapperComment = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

// const buttonStyles = css`
//   height: 30px;
//   border-radius: 3px;
//   font-size: 14px;
//   padding: 5px;
//   border: none;

//   &:focus {
//     box-shadow: none;
//   }
// `;

const StyledButtonAddComment = styled(ButtonAdd)<{
  $isVisibleButtonComment: boolean;
}>`
  display: ${({ $isVisibleButtonComment }) =>
    $isVisibleButtonComment ? "block" : "none"};
`;

const StyledButtonClearComment = styled(ButtonClear)<{
  $isVisibleButtonComment: boolean;
}>`
  display: ${({ $isVisibleButtonComment }) =>
    $isVisibleButtonComment ? "block" : "none"};
`;
