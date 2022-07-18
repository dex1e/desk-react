import { FC } from "react";

import styled from "styled-components";

interface HeaderProps {
  username: string;
}

export const Header: FC<HeaderProps> = ({ username }) => {
  return <Root>{username}</Root>;
};

const Root = styled.div`
  display: inline-block;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  cursor: default;
  filter: drop-shadow(0px 0px 10px var(--shadow));
`;
