import * as React from "react";
import type { SVGProps } from "react";
const SvgStoplinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.8 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3c0-4.5-1.8-6.3-6.3-6.3H9.8C5.3 3 3.5 4.8 3.5 9.3v5.4c0 4.5 1.8 6.3 6.3 6.3"
    />
  </svg>
);
export default SvgStoplinear;
