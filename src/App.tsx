import { useState } from "react";

import { CardModal, Columns, Header, ModalLogin } from "components";
import {
  addCard,
  deleteCard,
  editCardDescription,
  renameCard,
} from "store/features/cards";
import { renameColumn } from "store/features/columns";
import {
  addComment,
  deleteComment,
  renameComment,
} from "store/features/comments";
import { setUserName } from "store/features/user";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const columns = useAppSelector((state) => state.columns.columns);
  const cards = useAppSelector((state) => state.cards.cards);
  const comments = useAppSelector((state) => state.comments.comments);

  const dispatch = useAppDispatch();

  const [selectedCardId, setSelectedCardId] = useState("");

  const columnsArray = Object.values(columns);

  const commentsArray = Object.values(comments);

  const handleLoginSubmit = (name: string) => {
    dispatch(setUserName({ name }));
  };

  const changeColumnTitle = (columnId: string, newTitle: string) => {
    dispatch(renameColumn({ columnId, newTitle }));
  };

  const handleAddCard = (cardName: string, columnId: string) => {
    dispatch(addCard({ cardName, columnId }));
  };

  const handleAddComment = (commentText: string, cardId: string) => {
    dispatch(addComment({ commentText, cardId, user: user.name }));
  };

  const handleRenameCard = (cardId: string, newTitle: string) => {
    dispatch(renameCard({ cardId, newTitle }));
  };

  const handleEditDescription = (cardId: string, newDescription: string) => {
    dispatch(editCardDescription({ cardId, newDescription }));
  };

  const handleRenameComment = (commentId: string, newCommentText: string) => {
    dispatch(renameComment({ commentId, newCommentText }));
  };

  const handleDeleteCard = (cardId: string) => {
    dispatch(deleteCard(cardId));
  };

  const handleDeleteComment = (commentId: string) => {
    dispatch(deleteComment(commentId));
  };

  const handleCardClick = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const getModalColumnTitle = (cardId: string) => {
    const columnId = cards[cardId].columnId;
    const columnTitle = columns[columnId].title;
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
