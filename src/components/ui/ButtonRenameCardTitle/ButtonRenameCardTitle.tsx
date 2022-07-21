import { FC } from "react";

import styled from "styled-components";

import { ButtonIcon } from "../ButtonIcon";

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

const Root = styled(ButtonIcon)`
  width: 26px;
  height: 26px;
  margin-left: 7px;
`;
