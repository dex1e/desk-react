import { SVGProps } from "react";

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#444"
      d="M3 11.2c0 .1 0 .1 0 0 0 .1 0 .1 0 0zM8.3 1C3.9 1 0 3.6 0 6.6c0 2 1.1 3.7 3 4.7s0 .1 0 .1c-.1 1.3-.9 1.7-.9 1.7L.3 14h2c2.5 0 4.3-1.1 5.1-1.9h.8c4.3 0 7.8-2.5 7.8-5.6S12.6 1 8.3 1zm-.1 10.1H7l-.2.2c-.5.5-1.6 1.4-3.3 1.7.3-.5.5-1.1.5-2v-.3l-.3-.1C1.9 9.7 1 8.3 1 6.6 1 4.2 4.5 2 8.3 2 12 2 15 4 15 6.6c0 2.4-3.1 4.5-6.8 4.5z"
    />
  </svg>
);