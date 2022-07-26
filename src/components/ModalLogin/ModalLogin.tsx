import { FC, useRef } from "react";

import { Button } from "components/ui/Button";
import { Input } from "components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

interface ModalLoginProps {
  onSubmit: (name: string) => void;
}

type Inputs = {
  username: string;
};

export const ModalLogin: FC<ModalLoginProps> = ({ onSubmit }) => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    const trimmedName = data.username.trim();
    if (trimmedName) {
      onSubmit(trimmedName);
    }
  };

  const { ref, ...rest } = register("username", { required: true });

  return (
    <Root>
      <ModalWindow>
        Welcome!
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <StyledInput
            minLength={2}
            maxLength={20}
            placeholder="Username"
            isError={Boolean(errors.username)}
            ref={(e: any) => {
              ref(e);
              usernameRef.current = e;
            }}
            {...rest}
          />
          {errors.username && <Error>This field is required</Error>}
          <Button
            variant="primary"
            type="submit"
            text="OK"
            disabled={Boolean(errors.username)}
          />
        </Form>
      </ModalWindow>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--transparent);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const Error = styled.span`
  color: var(--red);
`;

const StyledInput = styled(Input)<{ isError: boolean }>`
  width: 200px;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  color: var(--black);
  border: 1px solid ${({ isError }) => (isError ? "var(--red)" : "var(--gray)")};
`;
