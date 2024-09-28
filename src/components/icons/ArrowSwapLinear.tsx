import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSwaplinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.01 21-5.02-5.01M9.01 4v17M14.99 4l5.02 5.01M14.99 21V4"
    />
  </svg>
);
export default SvgArrowSwaplinear;
