import { FC, useState } from "react";

import styled from "styled-components";
import { ICard, IColumn, IComment } from "types";

import { Column } from "./components";

interface ColumnsProps {
  cards: Record<string, ICard>;
  onAddCard: (cardName: string, columnId: string) => void;
  onCardClick: (cardId: string) => void;
  columnsArray: IColumn[];
  onDeleteCard: (cardId: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
  commentsArray: IComment[];
  changeColumnTitle: (columnId: string, columnTitle: string) => void;
}

export const Columns: FC<ColumnsProps> = ({
  cards,
  onAddCard,
  onDeleteCard,
  onRenameCard,
  columnsArray,
  onCardClick,
  commentsArray,
  changeColumnTitle,
}) => {
  const [columnIdWithNewCardForm, setColumnIdWithNewCardForm] = useState("");

  const handleNewCardFormOpen = (id: string) => {
    setColumnIdWithNewCardForm(id);
  };

  return (
    <Root>
      {columnsArray.map((column) => {
        return (
          <Column
            key={column.id}
            idColumn={column.id}
            columnTitle={column.title}
            cards={cards}
            onAddCard={onAddCard}
            onDeleteCard={onDeleteCard}
            onRenameCard={onRenameCard}
            columnIdWithNewCardForm={columnIdWithNewCardForm}
            onNewCardFormOpen={handleNewCardFormOpen}
            onCardClick={onCardClick}
            commentsArray={commentsArray}
            changeColumnTitle={changeColumnTitle}
          />
        );
      })}
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 100%;
  height: fit-content;
  gap: 20px;
  padding: 20px;
`;
