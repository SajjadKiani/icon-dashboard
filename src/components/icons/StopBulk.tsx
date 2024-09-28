import * as React from "react";
import type { SVGProps } from "react";
const SvgStopbulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#171717"
      d="m21.4 7.66-.78.47-.49.3-.93.55-13.94 8.36-.09.05-.53.32-.61.37c-.36-.89-.53-2.01-.53-3.38V9.3C3.5 4.8 5.3 3 9.8 3h5.4c3.91 0 5.78 1.36 6.2 4.66"
    />
    <path
      fill="#171717"
      d="M21.5 9.2v5.5c0 4.5-1.8 6.3-6.3 6.3H9.8c-2.44 0-4.09-.53-5.07-1.74l.3-.18.61-.37.53-.32.09-.05L20.2 9.98l.93-.55z"
      opacity={0.4}
    />
  </svg>
);
export default SvgStopbulk;
