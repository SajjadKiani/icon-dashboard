import * as React from "react";
import type { SVGProps } from "react";
const SvgScrollbroken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m9.6 8.97-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.97l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"
    />
  </svg>
);
export default SvgScrollbroken;
