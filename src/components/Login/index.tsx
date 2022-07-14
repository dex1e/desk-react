import { FC } from "react";

import LoginForm from "../LoginForm";
import Modal from "../ui/ModalHoc";

interface LoginProps {
  username: string;
  setUsername: (username: string) => void;
  setModalVisible: (isModalVisible: boolean) => void;
}

const Login: FC<LoginProps> = ({ username, setUsername, setModalVisible }) => {
  const handleOnClick = () => {
    if (username.length < 2) {
      alert("Введите корректное имя");
    } else {
      setModalVisible(false);
    }
  };

  return (
    <Modal>
      <LoginForm
        username={username}
        setUsername={setUsername}
        onClick={handleOnClick}
      />
    </Modal>
  );
};
export default Login;
