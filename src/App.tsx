import { useState } from "react";

import { Columns } from "components";
import { Header } from "components";
import { ModalLogin } from "components";
import styled from "styled-components";
import { ICard } from "types";
import { defaultCards, defaultUsername } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [username, setUsername] = useState(defaultUsername.username);
  const [cards, setCards] = useState(defaultCards);

  const handleAddCard = (cardName: string, columnId: string) => {
    const cardId = uuidv4();

    const newCard: ICard = {
      columnId,
      id: cardId,
      title: cardName,
      description: "",
    };

    const newCards = {
      ...cards,
    };
    newCards[cardId] = newCard;
    setCards(newCards);
  };

  const handleDeleteCard = (cardId: string) => {
    let newCards = { ...cards };
    delete newCards[cardId];
    setCards(newCards);
  };

  const handleLoginSubmit = (name: string) => {
    setUsername(name);
  };

  return (
    <Root>
      {username ? (
        <Board>
          <Header username={username} />
          <Columns
            username={username}
            cards={cards}
            onAddCard={handleAddCard}
            handleDeleteCard={handleDeleteCard}
          />
        </Board>
      ) : (
        <ModalLogin onSubmit={handleLoginSubmit} />
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(133, 55, 203, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
  position: fixed;
  overflow-y: hidden;
  overflow-x: auto;
`;

const Board = styled.div`
  margin-top: 50px;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
