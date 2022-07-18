import { FC } from "react";

import styled from "styled-components";
import { ICard } from "types";
import { columns } from "utils/mock";

import { Column } from "..";

interface ColumnsProps {
  username: string;
  cards: Record<string, ICard>;
  onAddCard: (cardName: string, columnId: string) => void;
}

export const Columns: FC<ColumnsProps> = ({ username, cards, onAddCard }) => {
  const columnsArray = Object.values(columns);
  const cardsArray = Object.values(cards);

  return (
    <Root>
      {columnsArray.map((column) => {
        const cardsFiltred = cardsArray.filter(
          (card) => card.columnId === column.id
        );
        return (
          <Column
            username={username}
            key={column.id}
            id={column.id}
            columnTitle={column.title}
            cards={cardsFiltred}
            onAddCard={onAddCard}
          />
        );
      })}
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: fit-content;
  gap: 20px;
  padding: 20px 20px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;
