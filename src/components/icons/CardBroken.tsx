import * as React from "react";
import type { SVGProps } from "react";
const SvgCardbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.03 8.5h20M6.03 16.5h2M10.53 16.5h4"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.03 14.99v1.12c0 3.51-.89 4.39-4.44 4.39H6.47c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h11.11c3.56 0 4.45.88 4.45 4.39v3.09"
    />
  </svg>
);
export default SvgCardbroken;
