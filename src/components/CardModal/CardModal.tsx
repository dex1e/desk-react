import { FC, useState } from "react";

import { CloseIcon } from "components/icons";
import { Button } from "components/ui/Button";
import { ButtonIcon } from "components/ui/ButtonIcon";
import styled, { css } from "styled-components";
import { ICard, IComment } from "types";

interface CardModalProps {
  // username: string;
  // isCardVisible: boolean;
  // setCardVisible: (isCardVisible: boolean) => void;
  // textArea: string;
  // setSelectedCard: (card: ICard | null) => void;
  onAddComment: (commentText: string, cardId: string) => void;
  card: ICard;
  columnTitle: string;
  onClose: () => void;
  comments: Record<string, IComment>;
}
export const CardModal: FC<CardModalProps> = ({
  card,
  columnTitle,
  onClose,
  comments,
  onAddComment,
  // setSelectedCard,
  // columnsArray,
  // setCardVisible,
  // username,
  // textArea,
}) => {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [commentText, setCommentText] = useState("");
  const [isVisibleButtonComment, setIsVisibleButtonComment] = useState(false);
  const [isDescriptionTextAreaVisible, setIsDescriptionTextAreaVisible] =
    useState(false);

  const commentsArray = Object.values(comments);

  const filtredComments = commentsArray.filter(
    (comment) => comment.cardId === card.id
  );

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const handleTitleBlur = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      setTitle(trimmedTitle);
    } else {
      setTitle(card.title);
    }
  };

  const handleEnterRenameTitle = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      if (title) {
        setTitle(title);
        event.target.blur();
      } else setTitle(card.title);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleAddDescription = () => {
    const trimmedDescription = description.trim();

    if (trimmedDescription) {
      setDescription(trimmedDescription);
    } else {
      setDescription("");
    }
    setIsDescriptionTextAreaVisible(false);
  };

  const handleDescriptionEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleAddDescription();
      setIsDescriptionTextAreaVisible(false);
      event.target.blur();
    }
  };

  const handleDescriptionTextAreaVisible = () => {
    setIsDescriptionTextAreaVisible(true);
  };

  const handleCancelDescription = () => {
    setDescription("");
    setIsDescriptionTextAreaVisible(false);
  };

  const handleTextAreaCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let commentText = event.target.value;
    setCommentText(commentText);
  };

  const handleAddComment = () => {
    let trimmedCommentText = commentText.trim();

    if (trimmedCommentText) {
      onAddComment(trimmedCommentText, card.id);
      setCommentText("");
    } else {
      setCommentText("");
    }
    setIsVisibleButtonComment(false);
  };

  const handleCancelComment = () => {
    setCommentText("");
    setIsVisibleButtonComment(false);
  };

  const handleVisibleButtonComment = () => {
    setIsVisibleButtonComment(true);
  };

  const handleCommentEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleAddComment();
      setIsVisibleButtonComment(false);
      event.target.blur();
    }
  };

  return (
    <Root>
      <ModalWrapper>
        <Close onClick={onClose} />
        <ModalWindow>
          <ButtonIcon icon={<CloseIcon />} closeModal onClick={onClose} />
          <Header>
            <HeaderTitleInput
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleEnterRenameTitle}
            />
            <HeaderSubtitle>
              in list
              <SubtitleColumnTitle>{columnTitle}</SubtitleColumnTitle>
            </HeaderSubtitle>
          </Header>
          <Description>
            <DescriptionTitle>Description</DescriptionTitle>

            <Form>
              <DescriptionTextArea
                placeholder="Add description..."
                value={description}
                onChange={handleDescriptionChange}
                // onBlur={handleDescriptionBlur}
                onKeyDown={handleDescriptionEnter}
                onFocus={handleDescriptionTextAreaVisible}
              />
              <ButtonsWrapperDescription>
                <StyledButtonAddDescription
                  text="Save"
                  isDescriptionTextAreaVisible={isDescriptionTextAreaVisible}
                  onClick={handleAddDescription}
                />
                <StyledButtonCancelDescription
                  isDescriptionTextAreaVisible={isDescriptionTextAreaVisible}
                  text="Cancel"
                  onClick={handleCancelDescription}
                />
              </ButtonsWrapperDescription>
            </Form>
            {/* ) : (
              <DescriptionText onClick={handleDescriptionTextAreaVisible}>
                {description}
              </DescriptionText>
            )} */}
          </Description>
          <Activity>
            <ActivityTitle>Activity</ActivityTitle>
            <Form>
              <ActivityTextArea
                placeholder="Write a comment..."
                value={commentText}
                onChange={handleTextAreaCommentChange}
                onFocus={handleVisibleButtonComment}
                onKeyDown={handleCommentEnter}
              />
              <ButtonsWrapperComment>
                <StyledButtonAddComment
                  text="Save"
                  isVisibleButtonComment={isVisibleButtonComment}
                  onClick={handleAddComment}
                />
                <StyledButtonCancelComment
                  isVisibleButtonComment={isVisibleButtonComment}
                  text="Cancel"
                  onClick={handleCancelComment}
                />
              </ButtonsWrapperComment>
            </Form>
            {filtredComments.map((comment) => {
              return (
                <ActivityComments>
                  <AuthorComment>{comment.author}</AuthorComment>
                  <Comment>{comment.text}</Comment>
                  <ButtonsWrapper>
                    <ButtonEdit>Edit</ButtonEdit>
                    <ButtonDelete>Delete</ButtonDelete>
                  </ButtonsWrapper>
                </ActivityComments>
              );
            })}
          </Activity>
        </ModalWindow>
      </ModalWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--transparent);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Close = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* height: 100vh; */
  background-color: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
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
  margin: 6px;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  height: 90%;
  /* min-height: 90%; */
  min-height: 800px;
  background-color: var(--white);
  border-radius: 7px;
  border: 1px solid var(--gray);
  filter: drop-shadow(0px 0px 10px var(--shadow));
  gap: 20px;
  overflow-y: auto;
  /* overflow-x: hidden; */

  /* @media (max-width: 425px) {
    margin: 5%;
  } */
`;

const Header = styled.header`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* padding: 20px; */
`;

const HeaderTitleInput = styled.input`
  font-size: 20px;
  width: 93%;
  height: 40px;
  min-height: 40px;
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
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    /* background-color: var(--lightgray); */
  }
`;

const HeaderSubtitle = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  padding: 0 20px;
  gap: 5px;
`;

const SubtitleColumnTitle = styled.p`
  display: inline-flex;
  color: var(--gray);
  text-decoration: underline;

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
  min-height: 62px;
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
  min-height: 62px;
  max-height: 180px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow-y: hidden;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
    overflow-y: visible;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--gray);
  }

  /* &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  } */
`;

const ButtonsWrapperDescription = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const StyledButtonAddDescription = styled(Button)<{
  isDescriptionTextAreaVisible: boolean;
}>`
  display: ${({ isDescriptionTextAreaVisible }) =>
    isDescriptionTextAreaVisible ? "block" : "none"};
  width: 50px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  background-color: var(--royalblue);
  color: var(--white);
  border: none;

  &:hover {
    background-color: var(--darkblue);
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid var(--black);
  }
`;

const StyledButtonCancelDescription = styled(Button)<{
  isDescriptionTextAreaVisible: boolean;
}>`
  display: ${({ isDescriptionTextAreaVisible }) =>
    isDescriptionTextAreaVisible ? "block" : "none"};
  width: 55px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  color: var(--royalblue);
  border: none;

  &:hover {
    background-color: var(--lightgray);
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid var(--royalblue);
  }
`;

const DescriptionText = styled.span`
  width: 100%;
  min-height: 62px;
  height: 100%;
  /* background-color: green; */
  border-radius: 7px;
  /* padding: 12px; */
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow-y: hidden;
  transition: ease 0.2ms;

  &:hover {
    cursor: pointer;
    /* resize: vertical; */
  }
`;

const Activity = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 16px;
  gap: 10px;
`;

const ActivityTitle = styled.h2`
  width: 100%;
  min-height: 25px;
  font-weight: 600px;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ActivityTextArea = styled.textarea`
  width: 100%;
  min-height: 62px;
  max-height: 150px;
  background-color: var(--secondarylight);
  border-radius: 7px;
  padding: 12px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  &:hover {
    cursor: pointer;
    resize: vertical;
  }

  &:focus {
    cursor: text;
    box-shadow: inset 0 0 0 2px var(--secondaryblue);
    resize: vertical;
    overflow-y: auto;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--gray);
  }
`;

const ButtonsWrapperComment = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const StyledButtonAddComment = styled(Button)<{
  isVisibleButtonComment: boolean;
}>`
  display: ${({ isVisibleButtonComment }) =>
    isVisibleButtonComment ? "block" : "none"};
  width: 50px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  background-color: var(--royalblue);
  color: var(--white);
  border: none;

  &:hover {
    background-color: var(--darkblue);
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid var(--black);
  }
`;

const StyledButtonCancelComment = styled(Button)<{
  isVisibleButtonComment: boolean;
}>`
  display: ${({ isVisibleButtonComment }) =>
    isVisibleButtonComment ? "block" : "none"};
  width: 55px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  color: var(--royalblue);
  border: none;

  &:hover {
    background-color: var(--lightgray);
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid var(--royalblue);
  }
`;

const ActivityComments = styled.div`
  width: 100%;
  min-height: 30px;
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
