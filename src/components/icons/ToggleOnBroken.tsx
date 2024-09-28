import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOnbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.516 10.8v2.4c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-2.4c0-2 .8-2.8 2.8-2.8h2.4"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.016 20h5c4 0 5-1 5-5V9c0-4-1-5-5-5h-10c-4 0-5 1-5 5v6c0 4 1 5 5 5"
    />
  </svg>
);
export default SvgToggleOnbroken;
