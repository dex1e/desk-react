import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import { Textarea } from "components/ui/Textarea";
import styled from "styled-components";

interface NewCardFormProps {
  idColumn: string;
  onAddCard: (cardName: string, columnId: string) => void;
  columnIdWithNewCardForm: string;
  onNewCardFormOpen: (id: string) => void;
}

export const NewCardForm: FC<NewCardFormProps> = ({
  idColumn,
  onAddCard,
  columnIdWithNewCardForm,
  onNewCardFormOpen,
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
    onNewCardFormOpen("");
  };

  const handleEnterRenameCardTitle = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleAddCard();
      onNewCardFormOpen("");
    }
  };

  const handleTextAreaVisible = () => {
    onNewCardFormOpen(idColumn);
  };

  return (
    <Root>
      {columnIdWithNewCardForm === idColumn ? (
        <>
          <StyledTextarea
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
            variant="primary"
          />
        </>
      ) : (
        <StyledTextAreaButton
          text="+ Add a card"
          onClick={handleTextAreaVisible}
          variant="primary"
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

const StyledTextarea = styled(Textarea)`
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--black);
  padding: 10px;

  &:hover {
    cursor: text;
  }

  &:focus {
    box-shadow: 0 0 0 3px var(--lightskyblue);
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
