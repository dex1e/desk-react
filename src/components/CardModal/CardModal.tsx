import { FC, useEffect, useState } from "react";

import { CloseIcon } from "components/icons";
import { ButtonIcon } from "components/ui/ButtonIcon";
import { Input } from "components/ui/Input";
import styled from "styled-components";
import { ICard, IComment } from "types";

import { Activity, Description } from "./components";

interface CardModalProps {
  card: ICard;
  columnTitle: string;
  comments: Record<string, IComment>;
  onCloseCardModal: () => void;
  onAddComment: (commentText: string, cardId: string) => void;
  onRenameComment: (commentId: string, newCommentText: string) => void;
  onDeleteComment: (commentId: string) => void;
  onEditDescription: (cardId: string, newDescription: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
}
export const CardModal: FC<CardModalProps> = ({
  card,
  columnTitle,
  comments,
  onCloseCardModal,
  onAddComment,
  onRenameComment,
  onDeleteComment,
  onEditDescription,
  onRenameCard,
}) => {
  const [title, setTitle] = useState(card.title);

  useEffect(() => {
    const closeCardModal = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseCardModal();
      }
    };
    window.addEventListener("keydown", closeCardModal);

    return () => window.removeEventListener("keydown", closeCardModal);
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const handleTitleBlur = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onRenameCard(card.id, trimmedTitle);
      setTitle(trimmedTitle);
    } else {
      setTitle(card.title);
    }
  };

  const handleEnterRenameTitle = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      if (title) {
        setTitle(title);
        event.target.blur();
      } else setTitle(card.title);
    }
  };

  return (
    <Root>
      <ModalWrapper>
        <CloseCardModal onClick={onCloseCardModal} />
        <ModalWindow>
          <StyledButtonIcon icon={<CloseIcon />} onClick={onCloseCardModal} />
          <Header>
            <StyledInput
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleEnterRenameTitle}
            />
            <HeaderSubtitle>
              in list
              <SubtitleColumnTitle>{columnTitle}</SubtitleColumnTitle>
            </HeaderSubtitle>
          </Header>
          <Description
            cardDescription={card.description}
            onEditDescription={onEditDescription}
            cardId={card.id}
          />
          <Activity
            onAddComment={onAddComment}
            onRenameComment={onRenameComment}
            onDeleteComment={onDeleteComment}
            comments={comments}
            cardId={card.id}
          />
        </ModalWindow>
      </ModalWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--transparent);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const CloseCardModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const ModalWindow = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  height: 90%;
  min-height: 800px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  filter: drop-shadow(0px 0px 10px var(--shadow));
  gap: 20px;
  overflow-y: auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 26px;
  height: 26px;
  cursor: pointer;
  margin: 7px;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    background-color: var(--lightgray);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--focusColcor);
  }
`;

const Header = styled.header`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const StyledInput = styled(Input)`
  width: 93%;
  height: 40px;
  min-height: 40px;
  font-size: 20px;
  margin: 10px 10px 0;

  &:focus {
    box-shadow: 0 0 0 2px var(--secondaryblue);
  }

  &:hover {
    box-shadow: 0 0 0 2px var(--secondaryblue);
  }
`;

const HeaderSubtitle = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  padding: 0 20px;
  gap: 5px;
`;

const SubtitleColumnTitle = styled.p`
  display: inline-flex;
  color: var(--gray);
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;
