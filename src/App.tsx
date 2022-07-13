import { useState } from "react";

import styled from "styled-components";

import Column from "./Components/Column";
import Modal from "./Components/Modal";

function App() {
  const [username, setUsername] = useState("");

  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <Root>
      {/* Прокидываем в styledBoard isModalVisible */}
      {isModalVisible ? (
        <Modal
          username={username}
          setUsername={setUsername}
          setModalVisible={setModalVisible}
        />
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
  width: 100vw;
  height: 100vh;
  background: rgb(133, 55, 203);
  background: linear-gradient(
    45deg,
    rgba(133, 55, 203, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
`;

// Берём значение isModalVisible, которое прокинули в props Styled board и типизируем его
const StyledBoard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 20px;
  padding: 20px 20px 0;
`;

export default App;
