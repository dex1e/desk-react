import { FC } from "react";

import styled from "styled-components";

import LoginForm from "../LoginForm";
import Modal from "../ui/ModalHoc";

interface LoginProps {
  username: string;
  setUsername: (username: string) => void;
  setModalVisible: (isModalVisible: boolean) => void;
}

const Login: FC<LoginProps> = ({ username, setUsername, setModalVisible }) => {
  const onClose = () => {
    setModalVisible(false);
  };

  return (
    <Modal>
      <LoginForm
        username={username}
        setUsername={setUsername}
        onClose={onClose}
      />
    </Modal>
  );
};

// const LoginFormError = styled.div`

// `;

export default Login;
