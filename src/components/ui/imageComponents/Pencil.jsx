import styled from "styled-components";

export const ButtonRenameCardTitle = (props) => (
  <IconPencil
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M403.914 0 54.044 349.871 0 512l162.128-54.044L512 108.086 403.914 0zM295.829 151.319l21.617 21.617-206.808 206.809-21.617-21.617 206.808-206.809zM71.532 455.932l-15.463-15.463 18.015-54.043 51.491 51.491-54.043 18.015zm82.339-32.953-21.617-21.617 206.809-206.809 21.617 21.617-206.809 206.809zm228.426-228.424-64.852-64.852 21.617-21.617 64.852 64.852-21.617 21.617zM360.679 86.468l43.234-43.235 64.853 64.853-43.235 43.234-64.852-64.852z" />
    <RenameCardTitle onClick={() => props.cardTitle} />
  </IconPencil>
);

const IconPencil = styled.svg`
  enable-background: "new 0 0 512 512";
  width: 20px;
  height: 20px;
  margin-left: 7px;

  &:hover {
    cursor: pointer;
    background-color: var(--lightgray);
    filter: drop-shadow(0px 0px 2px var(--shadow));
    border-radius: 2px;
  }
`;
const RenameCardTitle = styled.button`
  width: 100%;
  height: 100%;
`;
