import { FC } from "react";

import styled from "styled-components";
import { cards, columns } from "utils/mock";

import { Column } from "..";

interface ColumnsProps {
  username: string;
}

export const Columns: FC<ColumnsProps> = ({ username }) => {
  const columnsArray = Object.values(columns);
  const cardsArray = Object.values(cards);

  return (
    <Root>
      {columnsArray.map((e) => {
        const cardsFiltred = cardsArray.filter((i) => i.columnId === e.id);
        return (
          <Column
            username={username}
            key={e.id}
            columnTitle={e.title}
            cards={cardsFiltred}
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
