import * as React from "react";
import type { SVGProps } from "react";
const SvgTruckbulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#171717"
      d="M15.009 3v9c0 1.1-.9 2-2 2h-11V6c0-2.21 1.79-4 4-4h8c.55 0 1 .45 1 1"
    />
    <path
      fill="#171717"
      d="M22.009 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2h-1c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.299 9h-1.29c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1z"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M8.009 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16.009 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22.009 12.53V14h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.45 2.54c.17.3.26.64.26.99"
    />
  </svg>
);
export default SvgTruckbulk;
