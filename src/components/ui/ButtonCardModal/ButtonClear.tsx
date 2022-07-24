import { FC } from "react";

import styled from "styled-components";

interface ButtonClearProps {
  className?: string;
  text?: string;
  onClick?: () => void;
}

export const ButtonClear: FC<ButtonClearProps> = ({
  onClick,
  text,
  className,
}) => {
  return (
    <Root onClick={onClick} className={className}>
      {text}
    </Root>
  );
};

const Root = styled.button`
  width: 55px;
  height: 30px;
  color: var(--royalblue);
  background-color: white;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  border: none;
  text-align: center;

  &:hover {
    background-color: var(--salmon);
  }

  &:focus {
    outline: 1px solid var(--royalblue);
    box-shadow: none;
  }
`;
