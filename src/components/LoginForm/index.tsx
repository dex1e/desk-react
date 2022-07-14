import { FC } from "react";

import styled from "styled-components";

interface LoginFormProps {
  username: string;
  setUsername: (username: string) => void;
  onClick: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onClick, setUsername, username }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let username = e.target.value;
    setUsername(username);
  };

  return (
    <Root>
      Welcome!
      <StyledInput
        onChange={handleNameChange}
        value={username}
        placeholder="Username"
      />
      <StyledButton onClick={onClick}>OK</StyledButton>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid gray;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
  gap: 15px;
  @media (max-width: 425px) {
    margin: 5%;
  }
`;

const StyledInput = styled.input`
  padding: 7px;
  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid gray;

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
`;

export default LoginForm;
