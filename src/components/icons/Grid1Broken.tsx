import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid1Broken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M2.03 8.5H22M2.03 15.5H22M8.51 21.99V2.01M15.51 21.99V6"
    />
  </svg>
);
export default SvgGrid1Broken;
