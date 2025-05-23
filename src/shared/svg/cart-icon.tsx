import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M16 16c-1.11 0-2 .89-2 2a2 2 0 1 0 2-2ZM0 0v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H6.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L7.1 11h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H4.21l-.94-2M6 16c-1.11 0-2 .89-2 2a2 2 0 1 0 2-2Z"
    />
  </svg>
);
export default SvgComponent;
