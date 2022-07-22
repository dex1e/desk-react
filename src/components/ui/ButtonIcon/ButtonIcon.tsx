import { FC, ReactNode } from "react";

import styled from "styled-components";

interface ButtonIconProps {
  className?: string;
  onClick?: () => void;
  icon: ReactNode;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  onClick,
  icon,
}) => {
  return (
    <Root onClick={onClick} className={className}>
      {icon}
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
