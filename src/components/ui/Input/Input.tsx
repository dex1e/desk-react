import { FC, InputHTMLAttributes } from "react";

import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value?: string;
}

export const Input: FC<InputProps> = ({
  className,
  value,
  placeholder,
  ...props
}) => {
  return (
    <Root
      value={value}
      className={className}
      placeholder={placeholder}
      {...props}
    />
  );
};

const Root = styled.input`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 7px;
  background-color: var(--white);
  border-radius: 7px;
  cursor: text;

  &:hover {
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &:focus {
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &::placeholder {
    color: var(--secondarygray);
  }
`;
