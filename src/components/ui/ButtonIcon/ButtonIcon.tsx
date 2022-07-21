import { FC } from "react";

import styled from "styled-components";

interface ButtonIconProps {
  className?: string;
  onClick?: () => void;
  Icon: React.FunctionComponent;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  onClick,
  Icon,
}) => {
  return (
    <Root onClick={onClick} className={className}>
      <Icon />
    </Root>
  );
};

const Root = styled.button`
  width: 25px;
  height: 25px;
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
