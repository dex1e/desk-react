import { FC } from "react";

import { Button, Error, Input, Modal } from "components/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { isEmpty } from "utils/validators";

interface ModalLoginProps {
  onSubmit: (name: string) => void;
}

type LoginFormValues = {
  username: string;
};

export const ModalLogin: FC<ModalLoginProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleOnSubmit: SubmitHandler<LoginFormValues> = ({ username }) => {
    onSubmit(username);
  };

  return (
    <Modal>
      <ModalWindow>
        Welcome!
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <StyledInput
            maxLength={20}
            placeholder="Username"
            $isError={Boolean(errors.username)}
            {...register("username", {
              required: true,
              validate: isEmpty,
            })}
          />

          {errors?.username && <Error text="This field is required" />}

          <Button
            variant="primary"
            type="submit"
            text="OK"
            disabled={Boolean(errors.username)}
          />
        </Form>
      </ModalWindow>
    </Modal>
  );
};

const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 220px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  filter: drop-shadow(0px 0px 10px var(--shadow));
  gap: 15px;

  @media (max-width: 425px) {
    margin: 5%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
`;

const StyledInput = styled(Input)<{ $isError?: boolean }>`
  width: 200px;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  color: var(--black);
  border: 1px solid
    ${({ $isError }) => ($isError ? "var(--red)" : "var(--gray)")};
`;
