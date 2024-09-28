import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaybroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.63 7.98c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78c-3.82 2.21-6.95.4-6.95-4.02V8.44c0-4.42 3.13-6.23 6.96-4.02l2.25 1.3"
    />
  </svg>
);
export default SvgPlaybroken;
