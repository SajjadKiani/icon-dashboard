import * as React from "react";
import type { SVGProps } from "react";
const SvgCardPosbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.96 15.88 15.91 3.93M11.13 18.28l1.2-1.2M13.82 15.59l2.39-2.39"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.46 8.48c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03L3.6 15.52c-2.1-2.1-2.09-3.16.03-5.28l6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l1.9 1.9M2.03 22h20"
    />
  </svg>
);
export default SvgCardPosbroken;
