import { useState } from "react";

import styled from "styled-components";

import { Column, LoginForm } from "./components";
import Modal from "./components/ui/ModalHoc";

function App() {
  const [username, setUsername] = useState("");

  const [isModalVisible, setModalVisible] = useState(true);

  const handleOnClick = () => {
    if (username.length < 2) {
      alert("Введите корректное имя");
    } else {
      setModalVisible(false);
    }
  };
  return (
    <Root>
      {isModalVisible ? (
        <Modal>
          <LoginForm
            username={username}
            setUsername={setUsername}
            onClick={handleOnClick}
          />
        </Modal>
      ) : (
        <StyledBoard>
          <Column username={username} columnTitle="To Do" />
          <Column username={username} columnTitle="In Progress" />
          <Column username={username} columnTitle="Testing" />
          <Column username={username} columnTitle="Done" />
        </StyledBoard>
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(133, 55, 203, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  position: fixed;
  overflow-y: auto;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: fit-content;
  gap: 20px;
  padding: 20px 20px;
  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

export default App;
