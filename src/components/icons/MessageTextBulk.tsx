import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageTextbulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6V8q0-6-6-6"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M17 8.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M14 13.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
    />
  </svg>
);
export default SvgMessageTextbulk;
