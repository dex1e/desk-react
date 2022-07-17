import { FC } from "react";

import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--transparent);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
