import * as React from "react";
import type { SVGProps } from "react";
const SvgSortbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M10 7h11M3 7h3M6 12h12M10 17h4"
    />
  </svg>
);
export default SvgSortbroken;
