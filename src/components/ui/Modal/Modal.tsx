import { FC, useEffect } from "react";

import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  onCloseCardModal?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onCloseCardModal }) => {
  useEffect(() => {
    const closeCardModal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseCardModal?.();
      }
    };
    window.addEventListener("keydown", closeCardModal);

    return () => window.removeEventListener("keydown", closeCardModal);
  }, []);

  return (
    <Root>
      <ModalWrapper>
        <CloseCardModal onClick={onCloseCardModal} />
        {children}
      </ModalWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--transparent);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const CloseCardModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;
