import { FC } from "react";

import styled from "styled-components";

interface TextareaProps {
  className?: string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
}

export const Textarea: FC<TextareaProps> = ({
  className,
  placeholder,
  value,
  autoFocus,
  onBlur,
  onChange,
  onKeyDown,
  onFocus,
}) => {
  return (
    <Root
      className={className}
      placeholder={placeholder}
      value={value}
      autoFocus={autoFocus}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
    ></Root>
  );
};

const Root = styled.textarea`
  width: 100%;
  min-height: 62px;
  max-height: 180px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow-y: hidden;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: 0 0 0 2px var(--secondaryblue);
    resize: vertical;
    overflow-y: auto;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--secondarygray);
  }
`;
