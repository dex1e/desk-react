import { FC } from "react";

import styled from "styled-components";

interface InputProps {
  className?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  value?: string;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  className,
  value,
  placeholder,
  maxLength,
  minLength,
  onBlur,
  onChange,
  onKeyDown,
}) => {
  return (
    <Root
      value={value}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
      placeholder={placeholder}
      minLength={minLength}
    ></Root>
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
