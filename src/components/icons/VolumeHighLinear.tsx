import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeHighlinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 10v4q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.99 6.7c-.32.19-.69.3-1.06.3H5.5q-3 0-3 3Z"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 8a6.66 6.66 0 0 1 0 8M20.33 5.5a10.83 10.83 0 0 1 0 13"
    />
  </svg>
);
export default SvgVolumeHighlinear;
