import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOnCirclebroken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.016 20c4.42 0 8-3.58 8-8s-3.58-8-8-8h-4c-4.42 0-8 3.58-8 8 0 4.08 3.05 7.44 6.99 7.94"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.016 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.48-.09-.95-.24-1.38"
    />
  </svg>
);
export default SvgToggleOnCirclebroken;
