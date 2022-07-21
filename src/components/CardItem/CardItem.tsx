import { FC, useState } from "react";

import { PencilIcon, TrashCanIcon } from "components/icons";
import { ButtonDeleteCardTitle } from "components/ui/ButtonDeleteCardTitle";
import { ButtonRenameCardTitle } from "components/ui/ButtonRenameCardTitle";
import styled from "styled-components";
import { ICard } from "types";

interface CardProps {
  card: ICard;
  handleRenameCard: (cardId: string, newTitle: string) => void;
  handleDeleteCard: (cardId: string) => void;
}

export const CardItem: FC<CardProps> = ({
  card,
  handleRenameCard,
  handleDeleteCard,
}) => {
  const [isButtonRenameActive, setIsButtonRenameActive] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);

  const handleCardTitleClick = () => {
    setIsButtonRenameActive(true);
  };

  const handleCardTitleChange = (e: any) => {
    const textAreaValue = e.target.value;
    setNewTitle(textAreaValue);
  };

  const changeCardTitle = () => {
    const trimmedTitle = newTitle.trim();

    if (trimmedTitle) {
      handleRenameCard(card.id, trimmedTitle);
      setNewTitle(trimmedTitle);
    } else {
      handleRenameCard(card.id, card.title);
      setNewTitle(card.title);
    }
    setIsButtonRenameActive(false);
  };

  const handleEnterCardTitle = (event: any) => {
    if (event.code === "Enter") {
      event.preventDefault();
      changeCardTitle();
      event.target.blur();
      setIsButtonRenameActive(false);
    }
  };

  return (
    <Root key={card.id}>
      {isButtonRenameActive ? (
        <CardTitleTextArea
          value={newTitle}
          onChange={handleCardTitleChange}
          onBlur={changeCardTitle}
          onKeyDown={handleEnterCardTitle}
        />
      ) : (
        <CardTitle>{card.title}</CardTitle>
      )}
      <ButtonsWrapper>
        <ButtonRenameCardTitle
          Icon={PencilIcon}
          handleCardTitleClick={handleCardTitleClick}
        />
        <ButtonDeleteCardTitle
          Icon={TrashCanIcon}
          handleDeleteCard={handleDeleteCard}
          cardId={card.id}
        />
      </ButtonsWrapper>
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

const CardTitleTextArea = styled.textarea`
  width: 150px;
  padding: 7px;
  height: 40px;
  min-height: 40px;
  font-size: 15px;
  background-color: var(--white);
  border: 1px solid var(--transparent);
  border-radius: 7px;
  cursor: text;
  word-wrap: break-word;

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
    resize: vertical;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
    resize: vertical;
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

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
`;
