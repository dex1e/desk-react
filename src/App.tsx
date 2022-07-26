import { useEffect, useState } from "react";

import { CardModal, Columns } from "components";
import { Header } from "components";
import { ModalLogin } from "components";
import { setUserName } from "store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";
import { ICard, IComment, LocalStorageVariables } from "types";
import {
  getDataFromLocalStorage,
  setCardsToLocalStorage,
  setColumnsToLocalStorage,
  setCommentsToLocalStorage,
  setUserToLocalStorage,
} from "utils/data";
import {
  defaultCards,
  defaultColumns,
  defaultComments,
  defaultUser,
} from "utils/mock";
import { v4 as uuidv4 } from "uuid";

function App() {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  const [columns, setColumns] = useState(() =>
    getDataFromLocalStorage(LocalStorageVariables.COLUMNS, defaultColumns)
  );

  const [cards, setCards] = useState(() =>
    getDataFromLocalStorage(LocalStorageVariables.CARDS, defaultCards)
  );

  const [comments, setComments] = useState(() =>
    getDataFromLocalStorage(LocalStorageVariables.COMMENTS, defaultComments)
  );

  const [selectedCardId, setSelectedCardId] = useState("");

  useEffect(() => {
    dispatch(
      setUserName(
        getDataFromLocalStorage(LocalStorageVariables.USER, defaultUser)
      )
    );
  }, []);

  const columnsArray = Object.values(columns);

  const commentsArray = Object.values(comments);

  const changeColumnTitle = (columnId: string, newTitle: string) => {
    let newColumns = {
      ...columns,
    };
    newColumns[columnId].title = newTitle;
    setColumns(newColumns);
    setColumnsToLocalStorage(newColumns);
  };

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
    setCardsToLocalStorage(newCards);
  };

  const handleAddComment = (commentText: string, cardId: string) => {
    const commentId = uuidv4();

    let newComments = {
      ...comments,
    };

    const newComment: IComment = {
      cardId,
      id: commentId,
      author: user.name,
      text: commentText,
    };

    newComments[commentId] = newComment;
    setComments(newComments);
    setCommentsToLocalStorage(newComments);
  };

  const handleRenameCard = (cardId: string, newTitle: string) => {
    let newCards = {
      ...cards,
    };

    newCards[cardId].title = newTitle;
    setCards(newCards);
    setCardsToLocalStorage(newCards);
  };

  const handleEditDescription = (cardId: string, newDescription: string) => {
    let newCards = {
      ...cards,
    };

    newCards[cardId].description = newDescription;
    setCards(newCards);
    setCardsToLocalStorage(newCards);
  };

  const handleRenameComment = (commentId: string, newCommentText: string) => {
    let newComments = {
      ...comments,
    };
    newComments[commentId].text = newCommentText;
    setComments(newComments);
    setCommentsToLocalStorage(newComments);
  };

  const handleDeleteCard = (cardId: string) => {
    let newCards = {
      ...cards,
    };

    delete newCards[cardId];
    setCards(newCards);
    setCardsToLocalStorage(newCards);
  };

  const handleDeleteComment = (commentId: string) => {
    let newComments = {
      ...comments,
    };
    delete newComments[commentId];
    setComments(newComments);
    setCommentsToLocalStorage(newComments);
  };

  const handleLoginSubmit = (name: string) => {
    dispatch(setUserName({ name }));
    setUserToLocalStorage({ name });
  };

  const handleCardClick = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const getModalColumnTitle = (cardId: string) => {
    const columnId = cards[cardId].columnId;
    const columnTitle = defaultColumns[columnId].title;
    return columnTitle;
  };

  const onCloseCardModal = () => {
    setSelectedCardId("");
  };

  return (
    <Root>
      {user?.name ? (
        <Board>
          <Header username={user.name} />
          <Columns
            cards={cards}
            onAddCard={handleAddCard}
            onCardClick={handleCardClick}
            onDeleteCard={handleDeleteCard}
            onRenameCard={handleRenameCard}
            columnsArray={columnsArray}
            commentsArray={commentsArray}
            changeColumnTitle={changeColumnTitle}
          />
        </Board>
      ) : (
        <ModalLogin onSubmit={handleLoginSubmit} />
      )}
      {selectedCardId && (
        <CardModal
          columnTitle={getModalColumnTitle(selectedCardId)}
          card={cards[selectedCardId]}
          onCloseCardModal={onCloseCardModal}
          comments={comments}
          onAddComment={handleAddComment}
          onRenameComment={handleRenameComment}
          onDeleteComment={handleDeleteComment}
          onEditDescription={handleEditDescription}
          onRenameCard={handleRenameCard}
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
