import React, { FC, useRef, useState } from "react";

import { Button } from "components/ui/Button";
import styled from "styled-components";
import { ICard } from "types";

interface ColumnProps {
  username: string;
  columnTitle: string;
  cards: ICard[];
  onAddCard: (cardName: string, columnId: string) => void;
  id: string;
}

export const Column: FC<ColumnProps> = ({
  username,
  columnTitle,
  cards,
  onAddCard,
  id,
}) => {
  const [title, setTitle] = useState(columnTitle);
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [textAr, setTextAr] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let textAr = e.target.value;
    setTextAr(textAr);
  };

  const handleTextAreaAdd = () => {
    setTextAreaVisible(true);
  };

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const textAreaValue = textAreaRef.current?.value || "";

  return (
    <Root>
      <Title maxLength={20} onChange={handleTitleChange} value={title} />
      {cards.map((card) => {
        return <AdedCards key={card.id}>{card.title}</AdedCards>;
      })}
      {isTextAreaVisible ? (
        <TextAreaWrapper>
          <TextArea
            ref={textAreaRef}
            placeholder="Add card"
            value={textAr}
            onChange={handleTextAreaChange}
          />
          <StyledButtonAddCard
            text="+"
            onClick={() => onAddCard(textAreaValue, id)}
          />
        </TextAreaWrapper>
      ) : (
        <StyledTextAreaButton text="+ Add a card" onClick={handleTextAreaAdd} />
      )}
    </Root>
  );
};

const Root = styled.div`
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  gap: 6px;
  filter: drop-shadow(0px 0px 10px var(--shadow));
`;

const Title = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 7px;
  width: 200px;
  height: 30px;
  background-color: var(--white);
  border-radius: 7px;
  cursor: text;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;

const AdedCards = styled.div`
  background-color: var(--white);
  min-width: 100%;
  max-width: 200px;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;
  line-height: 30px;
  word-wrap: break-word;

  &:hover {
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    cursor: pointer;
  }
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
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
