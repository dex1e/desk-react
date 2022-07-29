import React, { FC } from "react";

import { Input } from "components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { ICard, IComment } from "types";
import { isEmpty } from "utils/validators";

import { CardItem, NewCardForm } from "./components";

interface ColumnProps {
  columnTitle: string;
  cards: Record<string, ICard>;
  idColumn: string;
  columnIdWithNewCardForm: string;
  commentsArray: IComment[];
  onNewCardFormOpen: (id: string) => void;
  onAddCard: (cardName: string, columnId: string) => void;
  onDeleteCard: (cardId: string) => void;
  onRenameCard: (cardId: string, newTitle: string) => void;
  onCardClick: (cardId: string) => void;
  changeColumnTitle: (columnId: string, columnTitle: string) => void;
}

type ColumnTitleFormValues = {
  columnTitle: string;
};

export const Column: FC<ColumnProps> = ({
  cards,
  columnTitle,
  idColumn,
  onAddCard,
  onDeleteCard,
  onRenameCard,
  columnIdWithNewCardForm,
  onNewCardFormOpen,
  onCardClick,
  commentsArray,
  changeColumnTitle,
}) => {
  const { register, handleSubmit, setValue } = useForm<ColumnTitleFormValues>({
    defaultValues: {
      columnTitle,
    },
  });

  const cardsArray = Object.values(cards);

  const filteredCards = cardsArray.filter((card) => card.columnId === idColumn);

  const handleTitleBlur: SubmitHandler<ColumnTitleFormValues> = ({
    columnTitle,
  }) => {
    const trimmedTitle = columnTitle.trim();

    changeColumnTitle(idColumn, trimmedTitle);

    setValue("columnTitle", trimmedTitle);
  };

  const handleEnterRenameTitle = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleSubmit(handleTitleBlur)();
      event.target.blur();
    }
  };

  return (
    <Root>
      <Form onBlur={handleSubmit(handleTitleBlur)}>
        <Input
          maxLength={20}
          onKeyDown={handleEnterRenameTitle}
          {...register("columnTitle", {
            required: true,
            validate: isEmpty,
          })}
        />
      </Form>
      {filteredCards.map((card) => {
        return (
          <CardItem
            key={card.id}
            card={card}
            onRenameCard={onRenameCard}
            onDeleteCard={onDeleteCard}
            onCardClick={onCardClick}
            commentsArray={commentsArray}
          />
        );
      })}

      <NewCardForm
        idColumn={idColumn}
        onAddCard={onAddCard}
        columnIdWithNewCardForm={columnIdWithNewCardForm}
        onNewCardFormOpen={onNewCardFormOpen}
      />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  filter: drop-shadow(0px 0px 10px var(--shadow));
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
