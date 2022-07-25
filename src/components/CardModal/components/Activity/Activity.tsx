import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import { Textarea } from "components/ui/Textarea";
import styled from "styled-components";
import { IComment } from "types";

import { Comments } from "./components";

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
        <StyledTextArea
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
            variant="primaryAdd"
          />
          <StyledButtonClearComment
            $isVisibleButtonComment={isVisibleButtonAddComment}
            text="Clear"
            onClick={handleCancelComment}
            variant="primaryClear"
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

const StyledTextArea = styled(Textarea)`
  max-height: 150px;
`;

const ButtonsWrapperComment = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const StyledButtonAddComment = styled(Button)<{
  $isVisibleButtonComment: boolean;
}>`
  display: ${({ $isVisibleButtonComment }) =>
    $isVisibleButtonComment ? "block" : "none"};
`;

const StyledButtonClearComment = styled(Button)<{
  $isVisibleButtonComment: boolean;
}>`
  display: ${({ $isVisibleButtonComment }) =>
    $isVisibleButtonComment ? "block" : "none"};
`;
