import { FC } from "react";

import { CloseIcon, PencilIcon, TrashCanIcon } from "components/icons";
import { ButtonIcon } from "components/ui/ButtonIcon";
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
          <ButtonIcon Icon={CloseIcon} closeModal />
          <Header>
            <HeaderTitleInput />
            <HeaderSubtitle>
              In list <SubtitleColumnTitle>Done</SubtitleColumnTitle>
            </HeaderSubtitle>
          </Header>
          <Description>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionTextArea placeholder="Add description..." />
          </Description>
          <Activity>
            <ActivityTitle>Activity</ActivityTitle>
            <ActivityTextArea placeholder="Write a comment..." />
            <ActivityComments>
              <AuthorComment>Dex1e</AuthorComment>
              <Comment>Comment</Comment>
              <ButtonsWrapper>
                <ButtonEdit>Edit</ButtonEdit>
                <ButtonDelete>Delete</ButtonDelete>
              </ButtonsWrapper>
            </ActivityComments>
          </Activity>
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
  margin: 0 6px;
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
  gap: 20px;

  /* @media (max-width: 425px) {
    margin: 5%;
  } */
`;

const Header = styled.header`
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* padding: 20px; */
`;

const HeaderTitleInput = styled.input`
  font-size: 20px;
  width: 93%;
  min-height: 30px;
  font-weight: 600;
  padding: 7px;
  border-radius: 7px;
  cursor: text;
  margin: 10px 10px 0;

  &:focus {
    /* box-shadow: 0 0 0 2px var(--lightskyblue); */
    /* background-color: var(--lightgray); */
    /* border: 1px solid var(--focusColcor); */
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
  }

  &:hover {
    /* background-color: var(--lightgray); */
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
  }
`;

const HeaderSubtitle = styled.span`
  width: 100%;
  font-size: 12px;
  padding: 0 17px;
`;

const SubtitleColumnTitle = styled.p`
  display: inline-block;
  color: var(--gray);
  text-decoration: underline;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;
// const CloseModal = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: black;
//   position: absolute;
//   top: 0;
//   right: 0;
//   margin: 5px;
// `;

const Description = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50px;
  padding: 16px;
  gap: 8px;
  /* height: 300px; */
`;

const DescriptionTitle = styled.h2`
  width: 100%;
  min-height: 25px;
  font-weight: 600px;
`;

const DescriptionTextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow: hidden;
  word-wrap: break-word;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--gray);
  }
`;

const Activity = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 16px;
  gap: 15px;
`;

const ActivityTitle = styled.h2`
  width: 100%;
  min-height: 25px;
  font-weight: 600px;
`;

const ActivityTextArea = styled.textarea`
  width: 100%;
  min-height: 30px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow: hidden;
  word-wrap: break-word;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--gray);
  }
`;

const ActivityComments = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 14px;
`;

const AuthorComment = styled.h3`
  width: 100%;
  min-height: 15px;
  font-weight: 700;
`;

const Comment = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  overflow: hidden;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ButtonsWrapper = styled.span`
  display: flex;
  gap: 5px;
  font-size: 12px;
  padding: 0 12px;
  text-decoration: underline;
  color: var(--gray);

  /* &:hover {
    cursor: pointer;
    color: var(--royalblue);
  } */
`;

const ButtonEdit = styled.p`
  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;

const ButtonDelete = styled.p`
  &:hover {
    cursor: pointer;
    color: var(--royalblue);
  }
`;
