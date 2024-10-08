import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid8Bulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 7.81V12h-6.25V2h.44C19.83 2 22 4.17 22 7.81"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M22 12v4.19c0 3.64-2.17 5.81-5.81 5.81h-.44V12zM8.25 12v10h-.44C4.17 22 2 19.83 2 16.19V12z"
    />
    <path
      fill="#171717"
      d="M7.81 2C4.17 2 2 4.17 2 7.81V12h6.25V2z"
      opacity={0.4}
    />
    <path fill="#171717" d="M15.75 2h-7.5v10h7.5z" />
    <path fill="#171717" d="M15.75 12h-7.5v10h7.5z" opacity={0.4} />
  </svg>
);
export default SvgGrid8Bulk;
