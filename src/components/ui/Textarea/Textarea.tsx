import { forwardRef } from "react";
import { TextareaHTMLAttributes } from "react";

import styled from "styled-components";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <Root className={className} ref={ref} {...props} />;
  }
);
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
