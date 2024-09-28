import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 2v3M16.5 2v3M7.5 13h8M7.5 17h5M3.5 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18h-6c-5 0-6-2.06-6-6.18v-2.02"
    />
  </svg>
);
export default SvgNotebroken;
