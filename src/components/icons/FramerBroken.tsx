import * as React from "react";
import type { SVGProps } from "react";
const SvgFramerbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 10.52V9h14V2H5l14 14H5v-.78M12 16v6l-7-6z"
    />
  </svg>
);
export default SvgFramerbroken;
