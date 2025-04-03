import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#EE4D2D"
      fillOpacity={0.867}
      d="M15 19.88c.04.3-.06.62-.29.83a.994.994 0 0 1-1.41 0L9.29 16.7a.99.99 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75v9.13ZM7.04 5 11 10.06v5.52l2 2v-7.53L16.96 5H7.04Z"
    />
  </svg>
);
export default SvgComponent;
