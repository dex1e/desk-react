import { FC } from "react";

import styled from "styled-components";

interface ButtonDeleteCardTitleProps {
  Icon: React.FunctionComponent;
  handleDeleteCard: (cardId: string) => void;
  cardId: string;
}

export const ButtonDeleteCardTitle: FC<ButtonDeleteCardTitleProps> = ({
  Icon,
  handleDeleteCard,
  cardId,
}) => {
  return (
    <Root onClick={() => handleDeleteCard(cardId)}>
      <Icon />
    </Root>
  );
};

const Root = styled.button`
  width: 25px;
  height: 21px;
  text-align: center;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    background-color: var(--lightskyblue);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;
