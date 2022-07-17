import { FC } from "react";

import styled, { css } from "styled-components";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  text: string;
  isBig?: boolean;
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

const Text = styled.p``;

const Root = styled.button<{ $isBig?: boolean }>`
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    color: var(--gray);
    cursor: not-allowed;
  }

  ${Text} {
  }
  ${({ $isBig }) =>
    $isBig &&
    css`
      padding: 40px 50px;
    `}
`;
