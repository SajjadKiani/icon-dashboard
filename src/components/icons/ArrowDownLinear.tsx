import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownlinear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m19.92 9.45-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 9.45"
    />
  </svg>
);
export default SvgArrowDownlinear;
