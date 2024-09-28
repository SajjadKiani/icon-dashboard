import * as React from "react";
import type { SVGProps } from "react";
const SvgCardAddlinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 8.5h11.5M6.023 16.5h2M10.523 16.5h4"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.023 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.463c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h7.06"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.523 6.25h5.5M19.273 9V3.5"
    />
  </svg>
);
export default SvgCardAddlinear;
