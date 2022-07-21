import { FC } from "react";

import styled from "styled-components";

interface ButtonRenameCardTitleProps {
  Icon: React.FunctionComponent;
  handleCardTitleClick: () => void;
}

export const ButtonRenameCardTitle: FC<ButtonRenameCardTitleProps> = ({
  Icon,
  handleCardTitleClick,
}) => {
  return (
    <Root onClick={handleCardTitleClick}>
      <Icon />
    </Root>
  );
};

const Root = styled.button`
  width: 26px;
  height: 26px;
  margin-left: 7px;
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

  &:disabled {
    color: var(--gray);
    cursor: not-allowed;
  }
`;
