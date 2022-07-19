import { FC, useState } from "react";

import { Button } from "components/ui/Button";
import { Modal } from "components/ui/Modal";
import styled from "styled-components";

interface ModalLoginProps {
  onSubmit: (name: string) => void;
}

export const ModalLogin: FC<ModalLoginProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName = e.target.value;
    setName(inputName);
    setIsError(false);
  };

  const handleOnClick = () => {
    const trimmedName = name.trim();
    if (trimmedName) {
      onSubmit(trimmedName);
    } else {
      setIsError(true);
    }
  };

  return (
    <Modal>
      <ModalWindow>
        Welcome!
        <Label>
          <Input
            onChange={handleNameChange}
            value={name}
            placeholder="Username"
            isError={isError}
            minLength={2}
            maxLength={20}
          />
          {isError && <p>Please enter correct name</p>}
        </Label>
        <Button text="OK" disabled={isError} onClick={handleOnClick} />
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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--red);
`;

const Input = styled.input<{ isError: boolean }>`
  padding: 7px;
  width: 200px;
  height: 50px;
  background-color: var(--white);
  border-radius: 7px;
  color: var(--black);
  border: 1px solid ${({ isError }) => (isError ? "var(--red)" : "var(--gray)")};

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }

  &::placeholder {
    color: var(--secondarygray);
  }
`;
