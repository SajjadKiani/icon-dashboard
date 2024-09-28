import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeCrosslinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 10.16v4q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.57c0-2.98-2.07-4.12-4.59-2.54L7.99 6.86c-.32.19-.69.3-1.06.3H5.5q-3 0-3 3Z"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m22.5 14.12-3.96-3.96M22.46 10.2l-3.96 3.96"
    />
  </svg>
);
export default SvgVolumeCrosslinear;
