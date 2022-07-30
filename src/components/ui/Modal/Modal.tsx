import { FC, useEffect } from "react";

import { CloseIcon } from "components/icons";
import styled from "styled-components";

import { ButtonIcon } from "../ButtonIcon";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  onCloseModal?: () => void;
  hasCloseModal?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  onCloseModal,
  hasCloseModal,
  className,
}) => {
  useEffect(() => {
    const closeModal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseModal?.();
      }
    };
    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  return (
    <Root>
      <ModalWrapper>
        <CloseModal onClick={onCloseModal} />
        <ModalWindow className={className}>
          {hasCloseModal && (
            <StyledButtonIcon icon={<CloseIcon />} onClick={onCloseModal} />
          )}
          {children}
        </ModalWindow>
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

const CloseModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const ModalWindow = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
  height: 90%;
  min-height: 800px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  filter: drop-shadow(0px 0px 10px var(--shadow));
  gap: 20px;
  overflow-y: auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  margin: 7px;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: var(--lightgray);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--focusColcor);
  }
`;
