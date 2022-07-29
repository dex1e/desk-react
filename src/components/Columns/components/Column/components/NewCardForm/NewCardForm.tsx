import { FC } from "react";

import { Button, Error, Textarea } from "components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { isEmpty } from "utils/validators";

interface NewCardFormProps {
  idColumn: string;
  onAddCard: (cardName: string, columnId: string) => void;
  columnIdWithNewCardForm: string;
  onNewCardFormOpen: (id: string) => void;
}

type NewCardFormValues = {
  cardTitle: string;
};

export const NewCardForm: FC<NewCardFormProps> = ({
  idColumn,
  onAddCard,
  columnIdWithNewCardForm,
  onNewCardFormOpen,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<NewCardFormValues>({
    mode: "onChange",
  });

  const handleAddCard: SubmitHandler<NewCardFormValues> = ({ cardTitle }) => {
    const trimmedCardTitle = cardTitle.trim();

    onAddCard(trimmedCardTitle, idColumn);
    setValue("cardTitle", trimmedCardTitle);
    reset();

    onNewCardFormOpen("");
  };

  const handleEnterRenameCardTitle = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleSubmit(handleAddCard)();
      onNewCardFormOpen("");
    }
  };

  const handleTextAreaVisible = () => {
    onNewCardFormOpen(idColumn);
  };

  return (
    <Root>
      {columnIdWithNewCardForm === idColumn ? (
        <Form onSubmit={handleSubmit(handleAddCard)}>
          <StyledTextarea
            placeholder="Add card"
            onKeyDown={handleEnterRenameCardTitle}
            autoFocus
            {...register("cardTitle", {
              required: true,
              validate: isEmpty,
            })}
          />

          {errors?.cardTitle && <Error text="This field is required" />}

          <StyledButtonAddCard
            variant="primary"
            type="submit"
            text="Add card"
            disabled={Boolean(errors.cardTitle)}
          />
        </Form>
      ) : (
        <StyledTextAreaButton
          text="+ Add a card"
          onClick={handleTextAreaVisible}
          variant="primary"
          type="submit"
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
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
