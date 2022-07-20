import { FC } from "react";

import styled from "styled-components";

interface HeaderProps {
  username: string;
}

export const Header: FC<HeaderProps> = ({ username }) => {
  return <Root>{username}</Root>;
};

const Root = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 15px;
  cursor: default;
  filter: drop-shadow(0px 0px 10px var(--shadow));
  position: absolute;
  top: 0;
`;
