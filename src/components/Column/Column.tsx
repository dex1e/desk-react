import React, { FC, useState } from "react";

import { NewCardCreator } from "components";
import { Button } from "components/ui/Button";
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
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);

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

  const handleTextAreaVisible = () => {
    setTextAreaVisible(true);
  };

  return (
    <Root>
      <Title
        onBlur={handleTitleBlur}
        value={title}
        maxLength={20}
        onChange={handleTitleChange}
      />

      {filtredCards.map((card) => {
        return <AddedCards key={card.id}>{card.title}</AddedCards>;
      })}

      {isTextAreaVisible ? (
        <NewCardCreator idColumn={idColumn} onAddCard={onAddCard} />
      ) : (
        <StyledTextAreaButton
          text="+ Add a card"
          onClick={handleTextAreaVisible}
        />
      )}
    </Root>
  );
};

const Root = styled.div`
  max-width: 100%;
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
  background-color: var(--white);
  min-width: 100%;
  max-width: 200px;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;
  line-height: 30px;
  word-wrap: break-word;

  &:hover {
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
  }
`;

const StyledTextAreaButton = styled(Button)`
  padding: 5px;
  width: 100%;
  transition: ease-in 0.3s;
  border: 1px solid var(--transparent);
  text-align: start;
  &:hover {
    filter: drop-shadow(0px 0px 2px var(--shadow));
    border: 1px solid var(--shadow);
  }
`;
