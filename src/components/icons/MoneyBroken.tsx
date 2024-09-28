import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneybroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.01 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5h-10c-3 0-5-1.5-5-5v-2.97"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.01 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c.27 0 .53-.03.77-.1M5.51 9.5v5M18.51 9.5v5"
    />
  </svg>
);
export default SvgMoneybroken;
