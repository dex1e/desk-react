import React from "react";
import { FC, InputHTMLAttributes } from "react";

import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value?: string;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null;
}

export const Input: FC<InputProps> = React.forwardRef(
  ({ className, value, placeholder, ...props }, ref) => {
    return (
      <Root
        value={value}
        className={className}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

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
