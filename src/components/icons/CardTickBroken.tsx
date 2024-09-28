import * as React from "react";
import type { SVGProps } from "react";
const SvgCardTickbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2.026 8.5h11.5M6.026 16.5h2M10.526 16.5h4"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.026 11.01V7.89c0-3.51.89-4.39 4.44-4.39h7.06M22.026 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.466c-3.55 0-4.44-.88-4.44-4.39v-1.1M16.526 6l1.5 1.5 4-4"
    />
  </svg>
);
export default SvgCardTickbroken;
