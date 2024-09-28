import * as React from "react";
import type { SVGProps } from "react";
const SvgBuslinear = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M16.901 22h-9.8c-1.7 0-3.1-1.39-3.1-3.1V5.1c0-1.7 1.39-3.1 3.1-3.1h9.8c1.7 0 3.1 1.39 3.1 3.1v13.8c0 1.71-1.39 3.1-3.1 3.1"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.501 13h-13c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5M8.495 17.7h.01M15.496 17.7h.008M9.501 5h5"
    />
  </svg>
);
export default SvgBuslinear;
