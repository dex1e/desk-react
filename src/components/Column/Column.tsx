import React, { FC, useState } from "react";

import { CardItem, NewCardForm } from "components";
import { Input } from "components/ui/Input";
import styled from "styled-components";
import { ICard, IComment } from "types";

interface ColumnProps {
  columnTitle: string;
  cards: Record<string, ICard>;
  idColumn: string;
  columnIdWithNewCardForm: string;
  onNewCardFormOpen: (id: string) => void;
  onAddCard: (cardName: string, columnId: string) => void;
  onDeleteCard: (cardId: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
  onCardClick: (cardId: string) => void;
  commentsArray: IComment[];
}

export const Column: FC<ColumnProps> = ({
  cards,
  columnTitle,
  idColumn,
  onAddCard,
  onDeleteCard,
  onRenameCard,
  columnIdWithNewCardForm,
  onNewCardFormOpen,
  onCardClick,
  commentsArray,
}) => {
  const [title, setTitle] = useState(columnTitle);

  const cardsArray = Object.values(cards);

  const filteredCards = cardsArray.filter((card) => card.columnId === idColumn);

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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const handleTitleBlur = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      setTitle(trimmedTitle);
    } else {
      setTitle(columnTitle);
    }
  };

  return (
    <Root>
      <Input
        value={title}
        onBlur={handleTitleBlur}
        maxLength={20}
        onChange={handleTitleChange}
        onKeyDown={handleEnterRenameTitle}
      />
      {filteredCards.map((card) => {
        return (
          <CardItem
            key={card.id}
            card={card}
            onRenameCard={onRenameCard}
            onDeleteCard={onDeleteCard}
            onCardClick={onCardClick}
            commentsArray={commentsArray}
          />
        );
      })}
      <NewCardForm
        idColumn={idColumn}
        onAddCard={onAddCard}
        columnIdWithNewCardForm={columnIdWithNewCardForm}
        onNewCardFormOpen={onNewCardFormOpen}
      />
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
