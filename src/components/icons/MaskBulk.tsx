import * as React from "react";
import type { SVGProps } from "react";
const SvgMaskbulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"
      opacity={0.4}
    />
    <path fill="#171717" d="M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5" />
  </svg>
);
export default SvgMaskbulk;
