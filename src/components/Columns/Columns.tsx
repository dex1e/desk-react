import { FC, useState } from "react";

import styled from "styled-components";
import { ICard } from "types";
import { columns } from "utils/mock";

import { Column } from "..";

interface ColumnsProps {
  username: string;
  cards: Record<string, ICard>;
  onAddCard: (cardName: string, columnId: string) => void;
  onDeleteCard: (cardId: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
}

export const Columns: FC<ColumnsProps> = ({
  username,
  cards,
  onAddCard,
  onDeleteCard,
  onRenameCard,
}) => {
  const [idTextAreaOpen, setIdTextAreaOpen] = useState("");

  const handleTextAreaOpen = (id: string) => {
    setIdTextAreaOpen(id);
  };

  const columnsArray = Object.values(columns);
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
            idTextAreaOpen={idTextAreaOpen}
            onTextAreaOpen={handleTextAreaOpen}
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
