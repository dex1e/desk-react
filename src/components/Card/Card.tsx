import { FC } from "react";

import styled from "styled-components";

interface CardProps {
  username: string;
  columnTitle: string;
  isCardVisible: boolean;
  setCardVisible: (isCardVisible: boolean) => void;
}
export const Card: FC<CardProps> = ({
  isCardVisible,
  setCardVisible,
  columnTitle,
  username,
}) => {
  return (
    <Root isCardVisible={isCardVisible}>
      <ModalCard>
        <div>Description</div>
        <div>Activity</div>
      </ModalCard>
    </Root>
  );
};

const Root = styled.div<{ isCardVisible: boolean }>`
  width: 80vw;
  height: 80vh;
  background-color: var(--shadow);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isCardVisible }) => `scale(${isCardVisible ? 1 : 0})`};
`;

const ModalCard = styled.div`
  border-radius: 5px;
  background-color: var(--white);
`;
