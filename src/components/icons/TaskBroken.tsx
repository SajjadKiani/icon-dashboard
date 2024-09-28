import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 19.5h10M20.5 12.5h1M11.5 12.5h5.49M11.5 5.5h10M3.5 5.5l1 1 3-3M3.5 12.5l1 1 3-3M3.5 19.5l1 1 3-3"
    />
  </svg>
);
export default SvgTaskbroken;
