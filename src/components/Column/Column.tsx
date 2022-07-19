import React, { FC, useState } from "react";

import { NewCardForm } from "components";
import { Button } from "components/ui/Button";
import { ButtonRenameCardTitle } from "components/ui/imageComponents/Pencil";
import { TrashCan } from "components/ui/imageComponents/TrashCan";
import styled from "styled-components";
import { ICard } from "types";

interface ColumnProps {
  username: string;
  columnTitle: string;
  cards: Record<string, ICard>;
  onAddCard: (cardName: string, columnId: string) => void;
  idColumn: string;
}

export const Column: FC<ColumnProps> = ({
  username,
  cards,
  columnTitle,
  onAddCard,
  idColumn,
}) => {
  const [title, setTitle] = useState(columnTitle);
  // const [cardTitle, setCardTitle] = useState("");

  // const handleCardTitleChange = () => {};

  const handleEnterRenameTitle = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      setTitle(columnTitle);
    }
  };

  const cardsArray = Object.values(cards);

  const filtredCards = cardsArray.filter((card) => card.columnId === idColumn);

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
          <AddedCards>
            <CardTitle key={card.id}>{card.title}</CardTitle>
            <Buttons>
              <ButtonRenameCardTitle />
              <TrashCan />
            </Buttons>
          </AddedCards>
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
  gap: 6px;
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

const AddedCards = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  min-width: 100%;
  max-width: 200px;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;
  line-height: 30px;
  word-wrap: break-word;

  /* &:hover {
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
  } */
`;

const CardTitle = styled.div`
  width: 80%;
  &:hover {
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
`;

// const ButtonRenameCardTitle = styled(Button)`
//   /* width: 20px;
//   height: 20px;
//   margin-left: 7px; */
// `;
const ButtonDeleteCardTitle = styled(Button)`
  width: 20px;
  height: 20px;
  /* padding: 5px; */
`;
