import { FC, useState } from "react";

import styled from "styled-components";
import { loginValidate } from "utils/validators/loginValidate";

interface LoginFormProps {
  username: string;
  setUsername: (username: string) => void;
  onClose: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onClose, setUsername, username }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName = e.target.value;
    setUsername(inputName.trim());
    setError(loginValidate(inputName.trim()));
  };

  const handleOnClick = () => {
    if (Boolean(error)) {
    } else {
      onClose();
    }
  };
  const [error, setError] = useState("");

  return (
    <Root>
      Welcome!
      <Label>
        <Input
          onChange={handleNameChange}
          value={username}
          placeholder="Username"
          isError={Boolean(error)}
          minLength={2}
          maxLength={20}
        />
        {error}
      </Label>
      <Button
        disabled={username.length <= 1 || Boolean(error)}
        onClick={handleOnClick}
      >
        OK
      </Button>
    </Root>
  );
};

const Root = styled.div`
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
  height: 40px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid ${({ isError }) => (isError ? "var(--red)" : "var(--gray)")};
  color: var(--black);

  &::placeholder {
    color: var(--secondarygray);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 7px;
  text-align: center;
  border: 1px solid var(--gray);

  &:hover {
    background-color: var(--lightskyblue);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--lightskyblue);
  }
`;

export default LoginForm;
