import { useState } from "react";

import { Columns } from "components";
import { Header } from "components";
import { LoginModal } from "components";
import styled from "styled-components";

function App() {
  const [username, setUsername] = useState("");

  const handleLoginSubmit = (name: string) => {
    setUsername(name);
  };

  return (
    <Root>
      {username ? (
        <Board>
          <Header username={username} />
          <Columns username={username} />
        </Board>
      ) : (
        <LoginModal onSubmit={handleLoginSubmit} />
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(133, 55, 203, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
  font-size: 18px;
  position: fixed;
  overflow-y: auto;
`;

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export default App;
