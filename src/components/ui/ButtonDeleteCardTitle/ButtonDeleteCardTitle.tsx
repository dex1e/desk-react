import { FC } from "react";

import styled from "styled-components";

import { ButtonIcon } from "../ButtonIcon";

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

const Root = styled(ButtonIcon)`
  width: 25px;
  height: 21px;
`;
