import { FC, useState } from "react";

import styled from "styled-components";
import { Card } from "types";

interface ColumnProps {
  username: string;
  columnTitle: string;
  cards: Card[];
}

const Column: FC<ColumnProps> = ({ username, columnTitle, cards }) => {
  const [title, setTitle] = useState(columnTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };

  return (
    <Root>
      <StyledTitle onChange={handleTitleChange} value={title} />
      {cards.map((e) => {
        return <StyledRow key={e.id}>{e.title}</StyledRow>;
      })}
      <StyledButton> + Add a card</StyledButton>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: var(--lightgray);
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;

const StyledTitle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: text;
`;

const StyledRow = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--white);
  width: 100%;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  line-height: 30px;

  &:hover {
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  transition: ease-in 0.3s;
  border-radius: 5px;
  border: 1px solid var(--transparent);
  padding: 5px;

  &:hover {
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
    background-color: var(--darkgray);
    border-radius: 5px;
    border: 1px solid var(--shadow);
  }
`;

export default Column;
