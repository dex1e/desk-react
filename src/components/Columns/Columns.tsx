import { FC, useState } from "react";

import styled from "styled-components";
import { ICard, IColumns } from "types";

import { Column } from "..";

interface ColumnsProps {
  username: string;
  cards: Record<string, ICard>;
  onAddCard: (cardName: string, columnId: string) => void;
  onCardClick: (cardId: string) => void;
  columnsArray: IColumns[];
  onDeleteCard: (cardId: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
}

export const Columns: FC<ColumnsProps> = ({
  username,
  cards,
  onAddCard,
  onDeleteCard,
  onRenameCard,
  columnsArray,
  onCardClick,
}) => {
  const [columnIdWithNewCardForm, setСolumnIdWithNewCardForm] = useState("");

  const handleNewCardFormOpen = (id: string) => {
    setСolumnIdWithNewCardForm(id);
  };

  return (
    <Root>
      {columnsArray.map((column) => {
        return (
          <Column
            username={username}
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
