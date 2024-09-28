import * as React from "react";
import type { SVGProps } from "react";
const SvgOkbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10 13.5c1.25.63 2.73.63 3.99.01l.01-.01"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m10 16.5 2-2.53 2 2.53"
    />
    <path
      stroke="#171717"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgOkbroken;
