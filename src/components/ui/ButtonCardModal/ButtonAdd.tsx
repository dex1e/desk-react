import { FC } from "react";

import styled from "styled-components";

interface ButtonAddProps {
  className?: string;
  text?: string;
  onClick?: () => void;
}

export const ButtonAdd: FC<ButtonAddProps> = ({ onClick, text, className }) => {
  return (
    <Root onClick={onClick} className={className}>
      {text}
    </Root>
  );
};

const Root = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  background-color: var(--royalblue);
  border: none;
  background-color: var(--royalblue);
  color: var(--white);
  text-align: center;

  &:hover {
    background-color: var(--darkblue);
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid var(--black);
  }
`;
