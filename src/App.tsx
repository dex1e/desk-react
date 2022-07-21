import { useState } from "react";

import { CardModal, Columns } from "components";
import { Header } from "components";
import { ModalLogin } from "components";
import styled from "styled-components";
import { ICard } from "types";
import { defaultCards, defaultUsername } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [username, setUsername] = useState(defaultUsername.username);
  const [cards, setCards] = useState(defaultCards);
  const [selectedCard, setSelectedCard] = useState<null | ICard>(null);

  const handleAddCard = (cardName: string, columnId: string) => {
    const cardId = uuidv4();

    let newCards = {
      ...cards,
    };

    const newCard: ICard = {
      columnId,
      id: cardId,
      title: cardName,
      description: "",
    };

    newCards[cardId] = newCard;
    setCards(newCards);
  };

  const handleRenameCard = (cardId: string, newTitle: string) => {
    let newCards = {
      ...cards,
    };

    newCards[cardId].title = newTitle;
    setCards(newCards);
  };

  const handleDeleteCard = (cardId: string) => {
    let newCards = {
      ...cards,
    };

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
            handleRenameCard={handleRenameCard}
            setSelectedCard={setSelectedCard}
          />
        </Board>
      ) : (
        <ModalLogin onSubmit={handleLoginSubmit} />
      )}
      {selectedCard && <CardModal card={selectedCard} />}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(133, 55, 203, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
  position: fixed;
  overflow-y: auto;
  overflow-x: auto;
`;

const Board = styled.div`
  margin-top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export default App;
