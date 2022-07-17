import { FC } from "react";

import styled from "styled-components";

interface CardProps {
  username: string;
  columnTitle: string;
  isCardVisible: boolean;
  setCardVisible: (isCardVisible: boolean) => void;
  textAr: string;
}
export const Card: FC<CardProps> = ({
  isCardVisible,
  setCardVisible,
  columnTitle,
  username,
  textAr,
}) => {
  return <Root isCardVisible={isCardVisible}></Root>;
};

const Root = styled.div<{ isCardVisible: boolean }>`
  /* width: 100px;
  height: 100px;
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* transform: ${({ isCardVisible }) => `scale(${isCardVisible ? 1 : 0})`}; */
  display: ${({ isCardVisible }) => `${isCardVisible ? "block" : "none"}`};
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

const ModalCard = styled.div`
  border-radius: 5px;
  background-color: var(--white);
`;
