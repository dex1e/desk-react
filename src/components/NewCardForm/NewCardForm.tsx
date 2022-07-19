import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import styled from "styled-components";

interface NewCardFormProps {
  idColumn: string;
  onAddCard: (cardName: string, columnId: string) => void;
}

export const NewCardForm: FC<NewCardFormProps> = ({ idColumn, onAddCard }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [isCardTitleValid, setIsCardTitleValid] = useState(false);
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);

  const handleOnBlurArea = (cardTitle: string) => {
    setCardTitle(cardTitle);
  };

  const handleTextAreaBlur = () => {
    const trimmedTextArea = cardTitle.trim();
    if (trimmedTextArea) {
      handleOnBlurArea(trimmedTextArea);
    } else {
      setCardTitle("");
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let textArea = e.target.value;
    setCardTitle(textArea);
    setIsCardTitleValid(false);
  };

  const handleAddCard = () => {
    if (!cardTitle) {
      setIsCardTitleValid(true);
    } else {
      onAddCard(cardTitle, idColumn);
      setCardTitle("");
    }
  };

  const handleEnterTextAreaRenameTitle = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      handleAddCard();
    }
  };

  const handleTextAreaVisible = () => {
    setTextAreaVisible(true);
  };

  return (
    <Root>
      {isTextAreaVisible ? (
        <>
          <TextArea
            onBlur={handleTextAreaBlur}
            placeholder="Add card"
            value={cardTitle}
            onChange={handleTextAreaChange}
            onKeyDown={handleEnterTextAreaRenameTitle}
          />
          <StyledButtonAddCard
            disabled={isCardTitleValid}
            text="+"
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
  width: fit-content;
  height: fit-content;
  border: 0;
  font-size: 25px;
  padding: 5px;
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
