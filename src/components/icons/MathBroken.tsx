import * as React from "react";
import type { SVGProps } from "react";
const SvgMathbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.354 5.64h7.28M14.474 15.33h7.28M14.474 21.39h7.28M21.014 5.64h.74M14.474 5.64h3.27M18.144 9.27V2M9.634 14.73l-1.43 1.42M2.354 22l3.51-3.51M9.634 22l-7.28-7.27"
    />
  </svg>
);
export default SvgMathbroken;
