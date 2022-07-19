import { FC } from "react";

import { Button } from "components/ui/Button";
import styled from "styled-components";

interface TextAreaProps {
  cardTitleTextArea: string;
  handleTextAreaBlur: () => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleAddCard: () => void;
}

export const TextArea: FC<TextAreaProps> = ({
  cardTitleTextArea,
  handleTextAreaBlur,
  handleTextAreaChange,
  handleAddCard,
}) => {
  return (
    <Root>
      <AreaText
        onBlur={handleTextAreaBlur}
        placeholder="Add card"
        value={cardTitleTextArea}
        onChange={handleTextAreaChange}
      />
      <StyledButtonAddCard text="+" onClick={handleAddCard} />
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

const AreaText = styled.textarea`
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
