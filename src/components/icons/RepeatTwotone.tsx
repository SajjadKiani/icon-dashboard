import * as React from "react";
import type { SVGProps } from "react";
const SvgRepeattwotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M3.58 5.16h13.84c1.66 0 3 1.34 3 3v3.32" />
      <path d="M6.74 2 3.58 5.16l3.16 3.16" />
    </g>
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.42 18.84H6.58c-1.66 0-3-1.34-3-3v-3.32"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.26 22 3.16-3.16-3.16-3.16"
    />
  </svg>
);
export default SvgRepeattwotone;
