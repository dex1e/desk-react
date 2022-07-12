import { FC } from "react";

import styled from "styled-components";

interface CardProps {
  username: string;
  columnTitle: string;
  isCardVisible: boolean;
  setCardVisible: (isModalVisible: boolean) => void;
}

const Card: FC<CardProps> = ({
  isCardVisible,
  setCardVisible,
  columnTitle,
  username,
}) => {
  return (
    <StyledCardWrapper>
      <StyledCard>
        <div>Description</div>
        <div>Activity</div>
      </StyledCard>
    </StyledCardWrapper>
  );
};

const StyledCard = styled.div`
  border-radius: 5px;
  background-color: white;
`;

const StyledCardWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isCardVisible }) => `scale(${isCardVisible ? 1 : 0})`};
`;

export default Card;
