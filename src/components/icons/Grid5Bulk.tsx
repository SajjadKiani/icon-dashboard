import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid5Bulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#171717"
      d="M22 7.81V12H9V2h7.19C19.83 2 22 4.17 22 7.81"
      opacity={0.6}
    />
    <path
      fill="#171717"
      d="M9 2v20H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z"
    />
    <path
      fill="#171717"
      d="M22 12v4.19c0 3.64-2.17 5.81-5.81 5.81H9V12z"
      opacity={0.4}
    />
  </svg>
);
export default SvgGrid5Bulk;
