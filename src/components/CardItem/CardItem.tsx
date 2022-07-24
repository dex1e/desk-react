import React, { FC, useRef, useState } from "react";

import { CommentIcon, PencilIcon, TrashCanIcon } from "components/icons";
import { ButtonIcon } from "components/ui/ButtonIcon";
import { Textarea } from "components/ui/Textarea";
import styled from "styled-components";
import { ICard, IComment } from "types";

interface CardProps {
  card: ICard;
  onRenameCard: (cardId: string, title: string) => void;
  onDeleteCard: (cardId: string) => void;
  onCardClick: (cardId: string) => void;
  commentsArray: IComment[];
}

export const CardItem: FC<CardProps> = ({
  card,
  onRenameCard,
  onDeleteCard,
  onCardClick,
  commentsArray,
}) => {
  const [isRenameActive, setIsRenameActive] = useState(false);
  const [title, setTitle] = useState(card.title);

  const filteredComments = commentsArray.filter(
    (commentCardId) => commentCardId.cardId === card.id
  );

  const countComments = filteredComments.length;

  const handleCardTitleClick = () => {
    setIsRenameActive(true);
  };

  const handleCardTitleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const cardTitle = event.target.value;
    setTitle(cardTitle);
  };

  const changeCardTitle = () => {
    const trimmedTitle = title.trim();

    if (trimmedTitle) {
      onRenameCard(card.id, trimmedTitle);
      setTitle(trimmedTitle);
    } else {
      setTitle(card.title);
    }
    setIsRenameActive(false);
  };

  const handleEnterCardTitle = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      changeCardTitle();
      event.target.blur();
      setIsRenameActive(false);
    }
  };

  const deleteCard = () => onDeleteCard(card.id);

  return (
    <Root key={card.id}>
      {isRenameActive ? (
        <StyledTextarea
          value={title}
          onChange={handleCardTitleChange}
          onBlur={changeCardTitle}
          onKeyDown={handleEnterCardTitle}
          autoFocus
        />
      ) : (
        <CardTitle onClick={() => onCardClick(card.id)}>{card.title}</CardTitle>
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

const StyledTextarea = styled(Textarea)`
  width: 150px;
  max-width: 80%;
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

const CardTitle = styled.button`
  width: 150px;
  height: 100%;
  min-height: 40px;
  padding: 5px;

  &:hover {
    cursor: pointer;
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
