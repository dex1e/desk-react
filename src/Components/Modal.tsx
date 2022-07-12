import { FC } from "react";

import styled from "styled-components";

interface ModalProps {
  username: string;
  setUsername: (username: string) => void;
  isModalVisible: boolean;
  setModalVisible: (isModalVisible: boolean) => void;
}

const Modal: FC<ModalProps> = ({
  isModalVisible,
  setModalVisible,
  setUsername,
  username,
}) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let username = e.target.value;
    setUsername(username);
  };
  const handleOnClick = () => {
    if (username.length < 2) {
      alert("Введите корректное имя");
    } else {
      setModalVisible(false);
    }
  };
  return (
    <StyledModalWrapper isModalVisible={isModalVisible}>
      <StyledModal>
        Welcome!
        <StyledInput
          onChange={handleNameChange}
          value={username}
          placeholder="Username"
        />
        <StyledButton onClick={handleOnClick}>OK</StyledButton>
      </StyledModal>
    </StyledModalWrapper>
  );
};

interface ModalWrapperProps {
  readonly isModalVisible: boolean;
}

const StyledModalWrapper = styled.div<ModalWrapperProps>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isModalVisible }) => `scale(${isModalVisible ? 1 : 0})`};
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid gray;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
  gap: 15px;
`;

const StyledInput = styled.input`
  padding: 7px;
  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid gray;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 7px;
  text-align: center;
  border: 1px solid gray;
  &:hover {
    background-color: #d6f7ff;
    cursor: pointer;
  }
`;

export default Modal;
