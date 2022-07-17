import { FC } from "react";

import { LoginForm } from "components/LoginForm";
import { Modal } from "components/ui/Modal";

interface LoginProps {
  onSubmit: (name: string) => void;
}

export const LoginModal: FC<LoginProps> = ({ onSubmit }) => {
  return (
    <Modal>
      <LoginForm onSubmit={onSubmit} />
    </Modal>
  );
};
