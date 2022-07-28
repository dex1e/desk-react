import { FC, useEffect, useState } from "react";

import { Button } from "components/ui/Button";
import { Textarea } from "components/ui/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { IComment } from "types";
import { isEmpty } from "utils/validators";

import { Comments } from "./components";

interface ActivityProps {
  comments: Record<string, IComment>;
  cardId: string;
  onAddComment: (commentText: string, cardId: string) => void;
  onRenameComment: (commentId: string, newCommentText: string) => void;
  onDeleteComment: (commentId: string) => void;
}

type ActivityFormValues = {
  commentText: string;
};

export const Activity: FC<ActivityProps> = ({
  comments,
  cardId,
  onAddComment,
  onRenameComment,
  onDeleteComment,
}) => {
  const [commentIdWithEditCommentForm, setCommentIdWithEditCommentForm] =
    useState("");

  const [isVisibleButtonAddComment, setIsVisibleButtonAddComment] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<ActivityFormValues>({
    mode: "onChange",
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ commentText: "" });
    }
  }, [formState, reset]);

  const commentsArray = Object.values(comments);

  const filteredComments = commentsArray.filter(
    (comment) => comment.cardId === cardId
  );

  const handleAddComment: SubmitHandler<ActivityFormValues> = ({
    commentText,
  }) => {
    onAddComment(commentText, cardId);
    setIsVisibleButtonAddComment(false);
  };

  const handleClearComment = () => {
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
      handleSubmit(handleAddComment)();
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
      <Form
        onSubmit={handleSubmit(handleAddComment)}
        onReset={handleClearComment}
      >
        <StyledTextArea
          placeholder="Write a comment..."
          onFocus={handleVisibleButtonAddComment}
          onKeyDown={handleCommentAddEnter}
          {...register("commentText", {
            required: true,
            validate: isEmpty,
          })}
        />

        {errors.commentText && (
          <Error $isVisibleButtonComment={isVisibleButtonAddComment}>
            This field is required
          </Error>
        )}

        <ButtonsWrapperComment>
          <StyledButtonAddComment
            text="Save"
            $isVisibleButtonComment={isVisibleButtonAddComment}
            variant="primaryAdd"
            type="submit"
            disabled={Boolean(errors.commentText)}
          />
          <StyledButtonClearComment
            $isVisibleButtonComment={isVisibleButtonAddComment}
            text="Clear"
            onClick={() => handleClearComment}
            variant="primaryClear"
            type="reset"
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledTextArea = styled(Textarea)`
  max-height: 150px;
`;

const Error = styled.span<{ $isVisibleButtonComment: boolean }>`
  display: ${({ $isVisibleButtonComment }) =>
    $isVisibleButtonComment ? "block" : "none"};
  font-size: 14px;
  color: var(--red);
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
