import { FC } from "react";

import { Modal } from "components/ui/Modal";
import styled from "styled-components";
import { ICard } from "types";

interface CardModalProps {
  // username: string;
  // columnTitle: string;
  // isCardVisible: boolean;
  // setCardVisible: (isCardVisible: boolean) => void;
  // textArea: string;
  card: ICard;
}
export const CardModal: FC<CardModalProps> = ({
  card,
  // setCardVisible,
  // columnTitle,
  // username,
  // textArea,
}) => {
  return (
    <Modal>
      <ModalWindow>
        <div>{card.title}</div>
      </ModalWindow>
    </Modal>
  );
};

const ModalWindow = styled.div`
  /* display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--white);
  width: 500px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  line-height: 30px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 700px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  transform: scale()
  filter: drop-shadow(0px 0px 10px var(--shadow));
  gap: 15px;

  @media (max-width: 425px) {
    margin: 5%;
  }
`;
