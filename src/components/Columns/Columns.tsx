import { FC, useState } from "react";

import styled from "styled-components";
import { ICard } from "types";
import { columns } from "utils/mock";

import { Column } from "..";

interface ColumnsProps {
  username: string;
  cards: Record<string, ICard>;
  onAddCard: (cardName: string, columnId: string) => void;
  handleDeleteCard: (cardId: string) => void;
  handleRenameCard: (cardId: string, newTitle: string) => void;
}

export const Columns: FC<ColumnsProps> = ({
  username,
  cards,
  onAddCard,
  handleDeleteCard,
  handleRenameCard,
}) => {
  const [id, setId] = useState("");

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
            handleDeleteCard={handleDeleteCard}
            handleRenameCard={handleRenameCard}
            id={id}
            setId={setId}
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
