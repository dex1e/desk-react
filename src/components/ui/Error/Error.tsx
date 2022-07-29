import { FC } from "react";

import styled from "styled-components";

interface ErrorProps {
  className?: string;
  text?: string;
}

export const Error: FC<ErrorProps> = ({ text, className }) => {
  return <Root className={className}>{text}</Root>;
};

const Root = styled.p`
  color: var(--red);
  font-size: 14px;
`;
