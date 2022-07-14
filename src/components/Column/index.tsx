import { FC, useState } from "react";

import styled from "styled-components";

interface ColumnProps {
  username: string;
  columnTitle: string;
}

const Column: FC<ColumnProps> = ({ username, columnTitle }) => {
  const [title, setTitle] = useState(columnTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };

  return (
    <Root>
      <StyledTitle onChange={handleTitleChange} value={title} />
      <StyledRow>Карточка 1</StyledRow>
      <StyledRow>Карточка 2</StyledRow>
      <StyledRow>Карточка 3</StyledRow>
      <StyledButton> + Add a card</StyledButton>
    </Root>
  );
};

const StyledTitle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;

const StyledRow = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #fff;
  width: 100%;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  line-height: 30px;

  &:hover {
    background-color: lightgray;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  transition: ease-in 0.3s;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 5px;

  &:hover {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
    cursor: pointer;
    background-color: #bdbaba;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export default Column;
