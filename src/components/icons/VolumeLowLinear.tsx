import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeLowlinear = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M3.83 10v4q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L9.32 6.7c-.32.19-.69.3-1.06.3H6.83q-3 0-3 3Z"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.83 8a6.66 6.66 0 0 1 0 8"
    />
  </svg>
);
export default SvgVolumeLowlinear;
