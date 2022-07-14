import { FC, useState } from "react";

import styled from "styled-components";

interface LoginFormProps {
  username: string;
  setUsername: (username: string) => void;
  onClose: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onClose, setUsername, username }) => {
  function validate(str: string) {
    let error = "";
    const illegalChars = /\W/; // allow letters, numbers, and underscores

    if (str === "") {
      error = "Please enter Username";
    } else if (str.length < 2 || str.length > 20) {
      error = "Username must have 2-20 characters";
    } else if (illegalChars.test(str)) {
      error = "Please enter valid Username. Use only numbers and alphabets";
    } else {
      error = "";
    }
    return error;
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName = e.target.value;
    setUsername(inputName);
    setError(validate(username));
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
      <StyledLabel>
        <StyledInput
          onChange={handleNameChange}
          value={username}
          placeholder="Username"
          $isError={Boolean(error)}
        />
        {error}
      </StyledLabel>
      <StyledButton
        disabled={username.length < 2 || Boolean(error)}
        onClick={handleOnClick}
      >
        OK
      </StyledButton>
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
  background-color: white;
  border-radius: 7px;
  border: 1px solid gray;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
  gap: 15px;
  @media (max-width: 425px) {
    margin: 5%;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: red;
`;
const StyledInput = styled.input<{ $isError: boolean }>`
  padding: 7px;
  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid ${({ $isError }) => ($isError ? "red" : "gray")};
  color: black;

  &::placeholder {
    color: #bfbfbf;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px lightskyblue;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 7px;
  text-align: center;
  border: 1px solid gray;

  &:hover {
    background-color: lightskyblue;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px lightskyblue;
  }
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;

export default LoginForm;
