import * as React from "react";
import type { SVGProps } from "react";
const SvgReceivedlinear = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m5 17.5 14-14M5 7.23V17.5h10.27M3.5 22h17"
    />
  </svg>
);
export default SvgReceivedlinear;
