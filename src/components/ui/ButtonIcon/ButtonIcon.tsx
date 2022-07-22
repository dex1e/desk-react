import { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

interface ButtonIconProps {
  className?: string;
  onClick?: () => void;
  icon: ReactNode;
  isHoverFocus?: boolean;
  isMarginLeft?: boolean;
  closeModal?: boolean;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  onClick,
  icon,
  isHoverFocus,
  isMarginLeft,
  closeModal,
}) => {
  return (
    <Root
      onClick={onClick}
      className={className}
      $isHoverFocus={isHoverFocus}
      $isMarginLeft={isMarginLeft}
      $closeModal={closeModal}
    >
      {icon}
    </Root>
  );
};

const Root = styled.button<{
  $isHoverFocus?: boolean;
  $isMarginLeft?: boolean;
  $closeModal?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 20px;

  ${({ $isMarginLeft }) =>
    $isMarginLeft &&
    css`
      margin-left: 7px;
    `}

  ${({ $isHoverFocus }) =>
    $isHoverFocus &&
    css`
      &:hover {
        cursor: pointer;
        background-color: var(--lightskyblue);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px var(--lightskyblue);
      }
    `}

    ${({ $closeModal }) =>
    $closeModal &&
    css`
      width: 26px;
      height: 26px;
      cursor: pointer;
      margin: 7px;
      position: absolute;
      top: 0;
      right: 0;

      &:hover {
        background-color: var(--lightgray);
      }

      &:focus {
        box-shadow: 0 0 0 2px var(--focusColcor);
      }
    `}
`;
