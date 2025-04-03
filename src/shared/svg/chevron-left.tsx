import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#EE4D2D"
      d="m21.6 24 7.8 7.8c.367.367.55.833.55 1.4s-.183 1.033-.55 1.4c-.367.367-.833.55-1.4.55s-1.033-.183-1.4-.55l-9.2-9.2c-.2-.2-.341-.417-.424-.65a2.262 2.262 0 0 1-.126-.75c-.001-.267.04-.517.126-.75.085-.233.227-.45.424-.65l9.2-9.2c.367-.367.833-.55 1.4-.55s1.033.183 1.4.55c.367.367.55.833.55 1.4s-.183 1.033-.55 1.4L21.6 24Z"
    />
  </svg>
);
export default SvgComponent;
