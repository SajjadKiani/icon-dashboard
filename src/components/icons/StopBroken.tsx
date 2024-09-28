import * as React from "react";
import type { SVGProps } from "react";
const SvgStopbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 9.3C3.5 4.8 5.3 3 9.8 3h5.4c4.5 0 6.3 1.8 6.3 6.3v5.4c0 4.5-1.8 6.3-6.3 6.3H9.8c-4.5 0-6.3-1.8-6.3-6.3v-.71"
    />
  </svg>
);
export default SvgStopbroken;
