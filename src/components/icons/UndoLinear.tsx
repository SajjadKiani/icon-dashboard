import * as React from "react";
import type { SVGProps } from "react";
const SvgUndolinear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.13 18.81h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.43 11.31 3.87 8.75l2.56-2.56"
    />
  </svg>
);
export default SvgUndolinear;
