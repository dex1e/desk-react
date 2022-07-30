import { FC } from "react";

import { Modal } from "components/ui";
import { Input } from "components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { ICard, IComment } from "types";
import { isEmpty } from "utils/validators";

import { Activity, Description } from "./components";

interface CardModalProps {
  card: ICard;
  columnTitle: string;
  comments: Record<string, IComment>;
  onCloseModal: () => void;
  onAddComment: (commentText: string, cardId: string) => void;
  onRenameComment: (commentId: string, newCommentText: string) => void;
  onDeleteComment: (commentId: string) => void;
  onEditDescription: (cardId: string, newDescription: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
}

type CardTitleFormValues = {
  cardTitle: string;
};

export const CardModal: FC<CardModalProps> = ({
  card,
  columnTitle,
  comments,
  onCloseModal,
  onAddComment,
  onRenameComment,
  onDeleteComment,
  onEditDescription,
  onRenameCard,
}) => {
  const { register, handleSubmit, setValue } = useForm<CardTitleFormValues>({
    mode: "onChange",
  });

  const handleTitleBlur: SubmitHandler<CardTitleFormValues> = ({
    cardTitle,
  }) => {
    const trimmedTitle = cardTitle.trim();

    onRenameCard(card.id, trimmedTitle);

    setValue("cardTitle", trimmedTitle);
  };

  const handleEnterRenameTitle = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleSubmit(handleTitleBlur)();
      event.target.blur();
    }
  };

  return (
    <Modal onCloseModal={onCloseModal} hasCloseModal>
      <Header>
        <Form onBlur={handleSubmit(handleTitleBlur)}>
          <StyledInput
            defaultValue={card.title}
            onKeyDown={handleEnterRenameTitle}
            {...register("cardTitle", {
              required: true,
              validate: isEmpty,
            })}
          />
        </Form>
        <HeaderSubtitle>
          in list
          <SubtitleColumnTitle>{columnTitle}</SubtitleColumnTitle>
        </HeaderSubtitle>
      </Header>
      <Description
        cardDescription={card.description}
        onEditDescription={onEditDescription}
        cardId={card.id}
      />
      <Activity
        onAddComment={onAddComment}
        onRenameComment={onRenameComment}
        onDeleteComment={onDeleteComment}
        comments={comments}
        cardId={card.id}
      />
    </Modal>
  );
};

const Header = styled.header`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Form = styled.form`
  width: 100%;
`;

const StyledInput = styled(Input)`
  width: 93%;
  height: 40px;
  min-height: 40px;
  margin: 10px 10px 0;

  &:focus {
    box-shadow: 0 0 0 2px var(--secondaryblue);
  }

  &:hover {
    box-shadow: 0 0 0 2px var(--secondaryblue);
  }
`;

const HeaderSubtitle = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  padding: 0 20px;
  gap: 5px;
`;

const SubtitleColumnTitle = styled.p`
  display: inline-flex;
  color: var(--gray);
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;
