import { FC } from "react";

import styled from "styled-components";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  text: string;
  isBig?: boolean;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  text,
  className,
  isBig,
}) => {
  return (
    <Root onClick={onClick} className={className} $isBig={isBig}>
      {text}
    </Root>
  );
};

const Root = styled.button<{ $isBig?: boolean }>`
  width: 80px;
  height: 50px;
  border-radius: 7px;
  text-align: center;
  border: 1px solid var(--gray);

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
