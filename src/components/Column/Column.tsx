import React, { FC, useState } from "react";

import { CardItem, NewCardForm } from "components";
import styled from "styled-components";
import { ICard } from "types";

interface ColumnProps {
  username: string;
  columnTitle: string;
  cards: Record<string, ICard>;
  idColumn: string;
  onAddCard: (cardName: string, columnId: string) => void;
  handleDeleteCard: (cardId: string) => void;
  handleRenameCard: (cardId: string, newTitle: string) => void;
}

export const Column: FC<ColumnProps> = ({
  username,
  cards,
  columnTitle,
  idColumn,
  onAddCard,
  handleDeleteCard,
  handleRenameCard,
}) => {
  const [title, setTitle] = useState(columnTitle);

  const cardsArray = Object.values(cards);

  const filtredCards = cardsArray.filter((card) => card.columnId === idColumn);

  const handleEnterRenameTitle = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      if (title) {
        setTitle(title);
        event.target.blur();
      } else setTitle(columnTitle);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
  };

  const handleOnBlurColumnTitle = (columnTitleName: string) => {
    setTitle(columnTitleName);
  };

  const handleTitleBlur = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      handleOnBlurColumnTitle(trimmedTitle);
    } else {
      setTitle(columnTitle);
    }
  };

  return (
    <Root>
      <Title
        onBlur={handleTitleBlur}
        value={title}
        maxLength={20}
        onChange={handleTitleChange}
        onKeyDown={handleEnterRenameTitle}
      />
      {filtredCards.map((card) => {
        return (
          <CardItem
            key={card.id}
            card={card}
            handleRenameCard={handleRenameCard}
            handleDeleteCard={handleDeleteCard}
          />
        );
      })}
      <NewCardForm idColumn={idColumn} onAddCard={onAddCard} />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  filter: drop-shadow(0px 0px 10px var(--shadow));
`;

const Title = styled.input`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 7px;
  width: 200px;
  height: 30px;
  background-color: var(--white);
  border-radius: 7px;
  cursor: text;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;
