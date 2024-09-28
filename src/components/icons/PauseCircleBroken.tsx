import * as React from "react";
import type { SVGProps } from "react";
const SvgPauseCirclebroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10-4.48-10-10-10c-1.43 0-2.8.3-4.03.85"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.25 14.43V9.37c0-.48-.2-.67-.71-.67H9.25c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67M16.53 14.43V9.37c0-.48-.2-.67-.71-.67h-1.29c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67"
    />
  </svg>
);
export default SvgPauseCirclebroken;
