import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import { Textarea } from "components/ui/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { moveCaretAtEnd } from "utils/helpers";

interface DescriptionProps {
  cardDescription: string;
  cardId: string;
  onEditDescription: (cardId: string, newDescription: string) => void;
}

type DescriptionFormValues = {
  description: string;
};

export const Description: FC<DescriptionProps> = ({
  cardDescription,
  onEditDescription,
  cardId,
}) => {
  const [isDescriptionTextAreaVisible, setIsDescriptionTextAreaVisible] =
    useState(false);

  const { register, handleSubmit, reset } = useForm<DescriptionFormValues>({
    mode: "onChange",
  });

  const handleEditDescription = () => {
    setIsDescriptionTextAreaVisible(true);
  };

  const handleAddDescription: SubmitHandler<DescriptionFormValues> = ({
    description,
  }) => {
    onEditDescription(cardId, description);
    setIsDescriptionTextAreaVisible(false);
  };

  const handleDescriptionEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      onEditDescription(cardId, "");
      handleSubmit(handleAddDescription)();
      setIsDescriptionTextAreaVisible(false);
    }
  };

  const handleClearDescription = () => {
    onEditDescription(cardId, "");
    reset({ description: "" });
    setIsDescriptionTextAreaVisible(false);
  };

  return (
    <Root>
      <TitleWrapper>
        <Title>Description</Title>
        <Button
          text="Edit"
          variant="primaryUnderline"
          onClick={handleEditDescription}
        />
      </TitleWrapper>

      {isDescriptionTextAreaVisible ? (
        <Form
          onSubmit={handleSubmit(handleAddDescription)}
          onReset={handleClearDescription}
        >
          <Textarea
            defaultValue={cardDescription}
            placeholder="Add description..."
            onKeyDown={handleDescriptionEnter}
            onFocus={moveCaretAtEnd}
            autoFocus
            {...register("description")}
          />

          <ButtonsWrapperDescription>
            <StyledButtonAddDescription
              text="Save"
              $isDescriptionTextAreaVisible={isDescriptionTextAreaVisible}
              variant="primaryAdd"
              type="submit"
            />
            <StyledButtonClearDescription
              $isDescriptionTextAreaVisible={isDescriptionTextAreaVisible}
              text="Clear"
              onClick={handleClearDescription}
              variant="primaryClear"
              type="reset"
            />
          </ButtonsWrapperDescription>
        </Form>
      ) : (
        <DescriptionText>{cardDescription}</DescriptionText>
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonsWrapperDescription = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const StyledButtonAddDescription = styled(Button)<{
  $isDescriptionTextAreaVisible: boolean;
}>`
  display: ${({ $isDescriptionTextAreaVisible }) =>
    $isDescriptionTextAreaVisible ? "block" : "none"};
`;

const StyledButtonClearDescription = styled(Button)<{
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
