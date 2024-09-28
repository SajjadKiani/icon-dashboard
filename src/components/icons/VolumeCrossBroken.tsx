import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeCrossbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 14q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.99 6.7c-.32.19-.69.3-1.06.3H5.5q-3 0-3 3"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22.5 13.96 18.54 10M20.39 12.11 18.5 14M22.46 10.04l-.54.54"
    />
  </svg>
);
export default SvgVolumeCrossbroken;
