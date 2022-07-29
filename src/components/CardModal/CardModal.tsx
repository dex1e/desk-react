import { FC } from "react";

import { CloseIcon } from "components/icons";
import { ButtonIcon, Modal } from "components/ui";
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
  onCloseCardModal: () => void;
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
  onCloseCardModal,
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
    <Modal onCloseCardModal={onCloseCardModal}>
      <ModalWindow>
        <StyledButtonIcon icon={<CloseIcon />} onClick={onCloseCardModal} />
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
      </ModalWindow>
    </Modal>
  );
};

const ModalWindow = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  height: 90%;
  min-height: 800px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  filter: drop-shadow(0px 0px 10px var(--shadow));
  gap: 20px;
  overflow-y: auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  margin: 7px;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: var(--lightgray);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--focusColcor);
  }
`;

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
