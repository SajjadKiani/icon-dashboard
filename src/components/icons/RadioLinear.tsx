import * as React from "react";
import type { SVGProps } from "react";
const SvgRadiolinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 5h-10c-3 0-5 2-5 5v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5M7.5 2v3"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M15 11h4M15 15h.5M18.5 15h.5"
    />
  </svg>
);
export default SvgRadiolinear;
