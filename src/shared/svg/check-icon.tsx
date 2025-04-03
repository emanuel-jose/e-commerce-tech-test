import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#EE4D2D"
      d="m6.367 10.1 5.65-5.65a.64.64 0 0 1 .466-.2.64.64 0 0 1 .467.2c.133.133.2.292.2.475a.647.647 0 0 1-.2.475l-6.117 6.133a.64.64 0 0 1-.466.2.64.64 0 0 1-.467-.2L3.033 8.667a.621.621 0 0 1-.192-.475.68.68 0 0 1 .209-.475.647.647 0 0 1 .475-.2c.183 0 .342.067.475.2L6.367 10.1Z"
    />
  </svg>
);
export default SvgComponent;
