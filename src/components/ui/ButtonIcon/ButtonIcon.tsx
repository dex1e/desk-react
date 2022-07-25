import { FC, ReactNode } from "react";

import styled from "styled-components";

interface ButtonIconProps {
  className?: string;
  onClick?: () => void;
  icon: ReactNode;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  onClick,
  icon,
}) => {
  return (
    <Root onClick={onClick} className={className}>
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
