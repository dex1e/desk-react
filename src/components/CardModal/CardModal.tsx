import { FC } from "react";

import { Modal } from "components/ui/Modal";
import styled from "styled-components";
import { ICard } from "types";

interface CardModalProps {
  // username: string;
  // isCardVisible: boolean;
  // setCardVisible: (isCardVisible: boolean) => void;
  // textArea: string;
  card: ICard;
}
export const CardModal: FC<CardModalProps> = ({
  card,
  // setCardVisible,
  // username,
  // textArea,
}) => {
  return (
    <Modal>
      <ModalWrapper>
        <ModalWindow>
          <Header>
            <TitleInput></TitleInput>
            <CloseModal />
          </Header>
        </ModalWindow>
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  max-width: 750px;
  width: 100%;
  height: 90%;
  max-height: 800px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  filter: drop-shadow(0px 0px 10px var(--shadow));
  /* gap: 15px; */

  /* @media (max-width: 425px) {
    margin: 5%;
  } */
`;

const Header = styled.header`
  width: 100%;
  min-height: 30px;
  display: flex;

  /* padding: 20px; */
`;

const TitleInput = styled.input`
  font-size: 20px;
  width: 95%;
  min-height: 30px;
  font-weight: 600;
  padding: 7px;
  border-radius: 7px;
  cursor: text;
  margin: 10px;

  &:focus {
    /* box-shadow: 0 0 0 2px var(--lightskyblue); */
    background-color: var(--lightgray);
    border: 1px solid var(--black);
  }

  &:hover {
    background-color: var(--lightgray);
    border: 1px solid var(--black);
  }
`;

const CloseModal = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
`;
