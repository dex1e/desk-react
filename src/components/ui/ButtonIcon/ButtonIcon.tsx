import { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

interface ButtonIconProps {
  className?: string;
  onClick?: () => void;
  icon: ReactNode;
  closeModal?: boolean;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  onClick,
  icon,
  closeModal,
}) => {
  return (
    <Root onClick={onClick} className={className} $closeModal={closeModal}>
      {icon}
    </Root>
  );
};

const Root = styled.button<{
  $isHoverFocus?: boolean;
  $closeModal?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;
