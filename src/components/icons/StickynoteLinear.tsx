import * as React from "react";
import type { SVGProps } from "react";
const SvgStickynotelinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 2v3M16.5 2v3M7.5 11h8M7.5 15h5M15.5 22h-6c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 16-6 6v-3q0-3 3-3z"
    />
  </svg>
);
export default SvgStickynotelinear;
