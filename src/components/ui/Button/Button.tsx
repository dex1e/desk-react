import { ButtonHTMLAttributes, FC } from "react";

import styled from "styled-components";

type Variant =
  | "primary"
  | "primaryAdd"
  | "primaryClear"
  | "primaryUnderline"
  | "primaryGray";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
  variant?: Variant;
  props?: any;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  text,
  className,
  variant = "primary",
  type = "button",
  ...props
}) => {
  const buttonStyles = buttonTheme[variant];

  return (
    <Root
      onClick={onClick}
      className={className}
      $buttonStyles={buttonStyles}
      type={type}
      {...props}
    >
      {text}
    </Root>
  );
};

const buttonTheme = {
  primary: `
    width: 80px;
    height: 50px;
    border-radius: 7px;
    text-align: center;
    border: 1px solid var(--gray);

    &:hover {
      cursor: pointer;
      background-color: var(--lightskyblue);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--lightskyblue);
    }

    &:disabled {
      color: var(--gray);
      cursor: not-allowed;
    }
  `,

  primaryAdd: `
    width: 50px;
    height: 30px;
    border-radius: 3px;
    font-size: 14px;
    padding: 5px;
    background-color: var(--royalblue);
    border: none;
    background-color: var(--royalblue);
    color: var(--white);
    text-align: center;

    &:hover {
      background-color: var(--darkblue);
    }

    &:focus {
      box-shadow: none;
      outline: 1px solid var(--black);
    }
  `,

  primaryClear: `
    width: 55px;
    height: 30px;
    color: var(--royalblue);
    background-color: var(--white);
    border-radius: 3px;
    font-size: 14px;
    padding: 5px;
    border: none;
    text-align: center;

    &:hover {
      background-color: var(--salmon);
    }
  
    &:focus {
      outline: 1px solid var(--royalblue);
      box-shadow: none;
    }
  `,

  primaryUnderline: `
    width: fit-content;
    font-size: 14px;
    text-decoration: underline;
    color: var(--gray);
  
    &:hover {
      cursor: pointer;
      color: var(--royalblue);
    }

    &:focus {
      outline: 1px solid var(--royalblue);
      border-radius: 2px;
    }
  `,

  primaryGray: `
    width: 150px;
    height: 100%;
    min-height: 40px;
    padding: 5px;
  
    &:hover {
      cursor: pointer;
    }
  `,
};

const Root = styled.button<{ $buttonStyles: string }>`
  ${({ $buttonStyles }) => $buttonStyles};
`;
