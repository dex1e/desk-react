import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import styled from "styled-components";

interface NewCardFormProps {
  idColumn: string;
  onAddCard: (cardName: string, columnId: string) => void;
  idTextAreaOpen: string;
  onTextAreaOpen: (id: string) => void;
}

export const NewCardForm: FC<NewCardFormProps> = ({
  idColumn,
  onAddCard,
  idTextAreaOpen,
  onTextAreaOpen,
}) => {
  const [cardTitle, setCardTitle] = useState("");

  const handleTextAreaBlur = () => {
    const trimmedTextArea = cardTitle.trim();
    if (trimmedTextArea) {
      setCardTitle(trimmedTextArea);
    } else {
      setCardTitle("");
    }
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let cardTitle = event.target.value;
    setCardTitle(cardTitle);
  };

  const handleAddCard = () => {
    if (cardTitle.trim()) {
      onAddCard(cardTitle.trim(), idColumn);
      setCardTitle("");
    }
    onTextAreaOpen("");
  };

  const handleEnterRenameCardTitle = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleAddCard();
      onTextAreaOpen("");
    }
  };

  const handleTextAreaVisible = () => {
    onTextAreaOpen(idColumn);
  };

  return (
    <Root>
      {idTextAreaOpen === idColumn ? (
        <>
          <TextArea
            onBlur={handleTextAreaBlur}
            placeholder="Add card"
            value={cardTitle}
            onChange={handleTextAreaChange}
            onKeyDown={handleEnterRenameCardTitle}
          />
          <StyledButtonAddCard
            disabled={Boolean(cardTitle)}
            text="Add card"
            onClick={handleAddCard}
          />
        </>
      ) : (
        <StyledTextAreaButton
          text="+ Add a card"
          onClick={handleTextAreaVisible}
        />
      )}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 7px;
  padding: 10px;
  resize: vertical;
  overflow: hidden;
  word-wrap: break-word;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &::placeholder {
    color: var(--secondarygray);
  }
`;

const StyledButtonAddCard = styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  font-size: 18px;
  padding: 5px;
  background-color: var(--royalblue);
  color: var(--white);

  &:hover {
    background-color: var(--darkblue);
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid var(--black);
  }
`;

const StyledTextAreaButton = styled(Button)`
  padding: 5px;
  width: 100%;
  transition: ease-in 0.3s;
  border: 1px solid var(--transparent);
  text-align: start;

  &:hover {
    filter: drop-shadow(0px 0px 2px var(--shadow));
    border: 1px solid var(--shadow);
  }
`;
