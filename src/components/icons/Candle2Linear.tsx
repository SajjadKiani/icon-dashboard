import * as React from "react";
import type { SVGProps } from "react";
const SvgCandle2Linear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.016 17.5h-7M5.016 17.5h-3M22.016 6.5h-3M9.016 6.5h-7M7.016 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2M11.016 3.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2"
    />
  </svg>
);
export default SvgCandle2Linear;
