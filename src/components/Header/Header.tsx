import { FC } from "react";

import styled from "styled-components";

interface HeaderProps {
  username: string;
}

export const Header: FC<HeaderProps> = ({ username }) => {
  return (
    <div>
      <StyledHeader>{username}</StyledHeader>
    </div>
  );
};

const StyledHeader = styled.div`
  display: inline-block;
  background-color: var(--lightgray);
  border-radius: 5px;
  padding: 10px;
`;
