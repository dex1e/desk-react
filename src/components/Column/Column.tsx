import { FC, useState } from "react";

// import { Button } from "components/ui/Button";
import styled from "styled-components";
import { cards } from "utils/mock";
// import { Card } from "types";

interface ColumnProps {
  username: string;
  columnTitle: string;
  // cards: Card[];
}

export const Column: FC<ColumnProps> = ({ username, columnTitle }) => {
  const [title, setTitle] = useState(columnTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };

  return (
    <Root>
      <Title maxLength={20} onChange={handleTitleChange} value={title} />
      {/* {cards.map((e) => {
        return <AdedCards key={e.id}>{e.title}</AdedCards>;
      })} */}
      <ButtonAdd> + Add a card</ButtonAdd>
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
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
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

const AdedCards = styled.div`
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

const ButtonAdd = styled.button`
  width: 100%;
  height: 50px;
  transition: ease-in 0.3s;
  border-radius: 5px;
  border: 1px solid var(--transparent);
  padding: 5px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &:hover {
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
    background-color: var(--lightskyblue);
    border-radius: 5px;
    border: 1px solid var(--shadow);
  }
`;
