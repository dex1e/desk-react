import styled from "styled-components";

export const TrashCan = (props) => (
  <IconTrashCan
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 612 612"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M510.812 85.933c-29.254-14.929-58.367-16.325-59.592-16.375a15.131 15.131 0 0 0-.737-.017H404.18c.003-.139.022-.273.022-.415 0-26.812-12.761-48.09-35.931-59.913C352.133.979 336.395.091 334.653.019a13.85 13.85 0 0 0-.736-.019h-55.832c-.246 0-.492.006-.737.017-1.741.074-17.48.96-33.616 9.194C220.56 21.035 207.8 42.313 207.8 69.124c0 .142.017.276.022.415h-46.303c-.246 0-.492.006-.737.017-1.226.051-30.337 1.446-59.593 16.375-28.241 14.41-61.905 44.075-61.905 103.548 0 9.581 7.767 17.35 17.35 17.35h15.245l67.087 390.755c1.43 8.328 8.65 14.416 17.099 14.416h299.873a17.35 17.35 0 0 0 17.099-14.416l67.087-390.755h15.245c9.581 0 17.35-7.768 17.35-17.35-.001-59.473-33.666-89.138-61.907-103.546zM75.398 172.13c4.22-24.493 17.846-42.891 40.665-54.828 21.272-11.123 43.329-12.888 45.936-13.063h288.005c2.585.172 24.08 1.906 45.034 12.6 23.361 11.922 37.29 30.475 41.562 55.29l-461.202.001zM242.5 69.125c0-13.566 5.156-22.656 16.226-28.599 8.889-4.773 18.372-5.701 19.886-5.825h54.742c1.736.142 11.12 1.102 19.92 5.825 11.07 5.944 16.228 15.033 16.228 28.599 0 .142.017.276.022.415H242.48c.002-.139.02-.275.02-.415zm198.812 508.176H170.688l-63.605-370.472h397.834l-63.605 370.472z" />
    <path d="M306 519.57c9.581 0 17.35-7.768 17.35-17.35V257.909c0-9.581-7.768-17.35-17.35-17.35-9.583 0-17.35 7.768-17.35 17.35V502.22c0 9.582 7.769 17.35 17.35 17.35zM203.782 503.754c.801 9.022 8.373 15.816 17.261 15.816.513 0 1.032-.023 1.553-.068 9.545-.847 16.596-9.273 15.749-18.816l-21.687-244.311c-.847-9.545-9.265-16.609-18.817-15.749-9.545.847-16.595 9.27-15.748 18.816l21.689 244.312zM389.404 519.502c.52.045 1.04.068 1.553.068 8.889 0 16.462-6.794 17.263-15.816l21.687-244.313c.847-9.545-6.202-17.968-15.748-18.816-9.544-.856-17.968 6.204-18.817 15.749l-21.687 244.311c-.847 9.544 6.204 17.97 15.749 18.817z" />
  </IconTrashCan>
);

const IconTrashCan = styled.svg`
  enable-background: "new 0 0 612 612";
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