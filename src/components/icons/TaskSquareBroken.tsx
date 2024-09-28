import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskSquarebroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.87 8.88h5.25M6.88 8.88l.75.75 2.25-2.25M12.87 15.88h5.25M6.88 15.88l.75.75 2.25-2.25"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7"
    />
  </svg>
);
export default SvgTaskSquarebroken;
