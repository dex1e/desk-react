import React, { FC, useState } from "react";

import { CommentIcon, PencilIcon, TrashCanIcon } from "components/icons";
import { Error, Textarea, Button, ButtonIcon } from "components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { ICard, IComment } from "types";
import { moveCaretAtEnd } from "utils/helpers";
import { isEmpty } from "utils/validators";

interface CardProps {
  card: ICard;
  onRenameCard: (cardId: string, title: string) => void;
  onDeleteCard: (cardId: string) => void;
  onCardClick: (cardId: string) => void;
  commentsArray: IComment[];
}

type CardItemValues = {
  cardTitle: string;
};

export const CardItem: FC<CardProps> = ({
  card,
  onRenameCard,
  onDeleteCard,
  onCardClick,
  commentsArray,
}) => {
  const [isRenameActive, setIsRenameActive] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CardItemValues>({
    mode: "onChange",
  });

  const filteredComments = commentsArray.filter(
    (commentCardId) => commentCardId.cardId === card.id
  );

  const countComments = filteredComments.length;

  const handleCardTitleClick = () => {
    setIsRenameActive(true);
  };

  const handleRenameCard: SubmitHandler<CardItemValues> = ({ cardTitle }) => {
    const trimmedCardTitle = cardTitle.trim();

    onRenameCard(card.id, trimmedCardTitle);
    setValue("cardTitle", trimmedCardTitle);

    setIsRenameActive(false);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLFormElement>) => {
    handleSubmit(handleRenameCard)();
    event.target.blur();
    setIsRenameActive(false);
  };

  const handleEnterCardTitle = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleSubmit(handleRenameCard)();
      event.target.blur();
      setIsRenameActive(false);
    }
  };

  const deleteCard = () => onDeleteCard(card.id);

  return (
    <Root key={card.id}>
      {isRenameActive ? (
        <Form onBlur={handleOnBlur}>
          <StyledTextarea
            defaultValue={card.title}
            onKeyDown={handleEnterCardTitle}
            autoFocus
            onFocus={moveCaretAtEnd}
            {...register("cardTitle", {
              required: true,
              validate: isEmpty,
            })}
          />

          {errors?.cardTitle && <Error text="This field is required" />}
        </Form>
      ) : (
        <Button
          text={card.title}
          variant="primaryGray"
          onClick={() => onCardClick(card.id)}
        />
      )}

      <IconsWrapper>
        <CommentWrapper>
          <ButtonIcon icon={<CommentIcon />} />
          <CommentCount>{countComments}</CommentCount>
        </CommentWrapper>
        <ButtonsWrapper>
          <StyledButtonIcon
            icon={<PencilIcon />}
            onClick={handleCardTitleClick}
          />
          <StyledButtonIcon icon={<TrashCanIcon />} onClick={deleteCard} />
        </ButtonsWrapper>
      </IconsWrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  line-height: 30px;
  word-wrap: break-word;
  border: 1px solid var(--black);
  padding: 5px;

  &:hover {
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
  }
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled(Textarea)`
  width: 150px;
  max-width: 100%;
  height: 60px;
  min-height: 60px;
  padding: 7px;
  font-size: 15px;
  background-color: var(--white);
  border: 1px solid var(--transparent);

  &:hover {
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &:focus {
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;

const IconsWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
`;

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
`;

const CommentCount = styled.span`
  font-size: 14px;
  cursor: default;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  &:hover {
    cursor: pointer;
    background-color: var(--lightskyblue);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;
