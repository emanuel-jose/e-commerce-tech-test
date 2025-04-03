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
      d="m25.2 24-7.8-7.8c-.367-.367-.55-.833-.55-1.4s.183-1.033.55-1.4c.367-.367.833-.55 1.4-.55s1.033.183 1.4.55l9.2 9.2c.2.2.342.417.426.65.084.233.125.483.124.75a2.298 2.298 0 0 1-.124.75 1.7 1.7 0 0 1-.426.65l-9.2 9.2c-.367.367-.833.55-1.4.55s-1.033-.183-1.4-.55c-.367-.367-.55-.833-.55-1.4s.183-1.033.55-1.4l7.8-7.8Z"
    />
  </svg>
);
export default SvgComponent;
