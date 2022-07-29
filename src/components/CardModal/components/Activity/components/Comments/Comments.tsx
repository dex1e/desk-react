import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { IComment } from "types";
import { moveCaretAtEnd } from "utils/helpers";
import { isEmpty } from "utils/validators";

interface CommentsProps {
  comment: IComment;
  commentIdWithEditCommentForm: string;
  onCommentTextAreaOpen: (idComment: string) => void;
  onRenameComment: (commentId: string, newCommentText: string) => void;
  onDeleteComment: (commentId: string) => void;
}

type CommentFormValues = {
  commentText: string;
};

export const Comments: FC<CommentsProps> = ({
  comment,
  commentIdWithEditCommentForm,
  onCommentTextAreaOpen,
  onRenameComment,
  onDeleteComment,
}) => {
  const [isRenameActive, setIsRenameActive] = useState(false);

  const { register, handleSubmit, setValue } = useForm<CommentFormValues>({
    mode: "onChange",
  });

  const handleEditCommentBlur: SubmitHandler<CommentFormValues> = ({
    commentText,
  }) => {
    const trimmedCommentText = commentText.trim();
    onRenameComment(comment.id, trimmedCommentText);

    setValue("commentText", trimmedCommentText);
    setIsRenameActive(false);
  };

  const handleEnterEditCommentText = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleSubmit(handleEditCommentBlur)();
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

      {isRenameActive && commentIdWithEditCommentForm === comment.id ? (
        <Form onBlur={handleSubmit(handleEditCommentBlur)}>
          <CommentRenameTextArea
            defaultValue={comment.text}
            onKeyDown={handleEnterEditCommentText}
            onFocus={moveCaretAtEnd}
            autoFocus
            {...register("commentText", {
              required: true,
              validate: isEmpty,
            })}
          />
        </Form>
      ) : (
        <Comment>{comment.text}</Comment>
      )}

      <ButtonsWrapper>
        <Button
          variant="primaryUnderline"
          text="Edit"
          onClick={handleClickEditComment}
        />
        <Button
          variant="primaryUnderline"
          text="Delete"
          onClick={deleteComment}
        />
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
