import { useState } from "react";

import { CardModal, Columns } from "components";
import { Header } from "components";
import { ModalLogin } from "components";
import styled from "styled-components";
import { ICard, IComment } from "types";
import {
  defaultCards,
  defaultUsername,
  defalutColumns,
  defaultComments,
} from "utils/mock";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [username, setUsername] = useState(defaultUsername.username);
  const [cards, setCards] = useState(defaultCards);
  const [comments, setComments] = useState(defaultComments);
  const [selectedCardId, setSelectedCardId] = useState("");

  const columnsArray = Object.values(defalutColumns);

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

  const handleAddComment = (commentText: string, cardId: string) => {
    const commentId = uuidv4();

    let newComments = {
      ...comments,
    };

    const newComment: IComment = {
      cardId,
      id: commentId,
      author: username,
      text: commentText,
    };

    newComments[commentId] = newComment;
    setComments(newComments);
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

  const handleCardClick = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const getModalColumnTitle = (cardId: string) => {
    const columnId = cards[cardId].columnId;
    const columnTitle = defalutColumns[columnId].title;
    return columnTitle;
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
            onCardClick={handleCardClick}
            onDeleteCard={handleDeleteCard}
            onRenameCard={handleRenameCard}
            columnsArray={columnsArray}
          />
        </Board>
      ) : (
        <ModalLogin onSubmit={handleLoginSubmit} />
      )}
      {selectedCardId && (
        <CardModal
          columnTitle={getModalColumnTitle(selectedCardId)}
          card={cards[selectedCardId]}
          onClose={() => setSelectedCardId("")}
          comments={comments}
          onAddComment={handleAddComment}
        />
      )}
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
