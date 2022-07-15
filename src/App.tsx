import { useState } from "react";

import { Header } from "components/Header/Header";
import styled from "styled-components";
import { Card } from "types";

import { Column, Login } from "./components";
import data from "./utils/mock";

function App() {
  const [username, setUsername] = useState("");
  const [isModalVisible, setModalVisible] = useState(true);

  //Как сделать выборку из карточек? *Вынести в utils, если правильно*
  const getCards = (keys: string[], cards: any) => {
    let cardsArray: any = [];
    keys.map((e) => {
      cardsArray.push(cards[e]);
    });
    return cardsArray;
  };

  return (
    <Root>
      {isModalVisible ? (
        <Login
          username={username}
          setUsername={setUsername}
          setModalVisible={setModalVisible}
        />
      ) : (
        <Board>
          <Header username={username} />
          <Columns>
            {Object.values(data.columns).map((e) => {
              return (
                <Column
                  username={username}
                  key={e.id}
                  columnTitle={e.title}
                  cards={getCards(e.cards, data.cards)}
                />
              );
            })}
          </Columns>
        </Board>
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

const Columns = styled.div`
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
