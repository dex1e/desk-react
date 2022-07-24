import { FC, useState } from "react";

import { ButtonAdd, ButtonClear } from "components/ui/ButtonCardModal";
import styled from "styled-components";

interface DescriptionProps {
  cardDescription: string;
  cardId: string;
  onEditDescription: (cardId: string, newDescription: string) => void;
}

export const Description: FC<DescriptionProps> = ({
  cardDescription,
  onEditDescription,
  cardId,
}) => {
  const [description, setDescription] = useState(cardDescription);
  const [isDescriptionTextAreaVisible, setIsDescriptionTextAreaVisible] =
    useState(false);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleAddDescription = () => {
    const trimmedDescription = description.trim();

    if (trimmedDescription) {
      onEditDescription(cardId, trimmedDescription);
      setDescription(trimmedDescription);
    } else {
      setDescription("");
    }
    setIsDescriptionTextAreaVisible(false);
  };

  const handleEditDescription = () => {
    setIsDescriptionTextAreaVisible(true);
  };

  const handleDescriptionEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleAddDescription();
      setIsDescriptionTextAreaVisible(false);
      event.target.blur();
    }
  };

  const handleDescriptionTextAreaVisible = () => {
    setIsDescriptionTextAreaVisible(true);
  };

  const handleCancelDescription = () => {
    onEditDescription(cardId, "");
    setDescription("");
    setIsDescriptionTextAreaVisible(false);
  };

  return (
    <Root>
      <TitleWrapper>
        <Title>Description</Title>
        <ButtonEdit onClick={handleEditDescription}>Edit</ButtonEdit>
      </TitleWrapper>

      {isDescriptionTextAreaVisible ? (
        <Form>
          <DescriptionTextArea
            placeholder="Add description..."
            value={description}
            onChange={handleDescriptionChange}
            onKeyDown={handleDescriptionEnter}
            onFocus={handleDescriptionTextAreaVisible}
            autoFocus
          />
          <ButtonsWrapperDescription>
            <StyledButtonAddDescription
              text="Save"
              $isDescriptionTextAreaVisible={isDescriptionTextAreaVisible}
              onClick={handleAddDescription}
            />
            <StyledButtonClearDescription
              $isDescriptionTextAreaVisible={isDescriptionTextAreaVisible}
              text="Clear"
              onClick={handleCancelDescription}
            />
          </ButtonsWrapperDescription>
        </Form>
      ) : (
        <DescriptionText>{description}</DescriptionText>
      )}
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 62px;
  padding: 16px;
  gap: 8px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2`
  width: fit-content;
  min-height: 25px;
  font-weight: 600px;
`;

const ButtonEdit = styled.button`
  font-size: 14px;
  text-decoration: underline;
  color: var(--gray);
  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DescriptionTextArea = styled.textarea`
  width: 100%;
  min-height: 62px;
  max-height: 180px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow-y: hidden;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
    overflow-y: visible;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--gray);
  }
`;

const ButtonsWrapperDescription = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const StyledButtonAddDescription = styled(ButtonAdd)<{
  $isDescriptionTextAreaVisible: boolean;
}>`
  display: ${({ $isDescriptionTextAreaVisible }) =>
    $isDescriptionTextAreaVisible ? "block" : "none"};
`;

const StyledButtonClearDescription = styled(ButtonClear)<{
  $isDescriptionTextAreaVisible: boolean;
}>`
  display: ${({ $isDescriptionTextAreaVisible }) =>
    $isDescriptionTextAreaVisible ? "block" : "none"};
`;

const DescriptionText = styled.span`
  width: 100%;
  min-height: 62px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
