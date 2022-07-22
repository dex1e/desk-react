import { FC, useState } from "react";

import { PencilIcon, TrashCanIcon } from "components/icons";
import { ButtonIcon } from "components/ui/ButtonIcon";
import styled from "styled-components";
import { ICard } from "types";

interface CardProps {
  card: ICard;
  onRenameCard: (cardId: string, title: string) => void;
  onDeleteCard: (cardId: string) => void;
}

export const CardItem: FC<CardProps> = ({
  card,
  onRenameCard,
  onDeleteCard,
}) => {
  const [isRenameActive, setIsRenameActive] = useState(false);
  const [title, setTitle] = useState(card.title);

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
        <CardTitleTextArea
          value={title}
          onChange={handleCardTitleChange}
          onBlur={changeCardTitle}
          onKeyDown={handleEnterCardTitle}
        />
      ) : (
        <CardTitle>{card.title}</CardTitle>
      )}
      <ButtonsWrapper>
        <ButtonIcon icon={<PencilIcon />} onClick={handleCardTitleClick} />
        <ButtonIcon icon={<TrashCanIcon />} onClick={deleteCard} />
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