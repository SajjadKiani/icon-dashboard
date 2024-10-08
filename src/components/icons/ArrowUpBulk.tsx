import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpbulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#171717"
      d="M12 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="m15.53 11.47-3-3a.754.754 0 0 0-1.06 0l-3 3c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.72-1.72V16c0 .41.34.75.75.75s.75-.34.75-.75v-5.19l1.72 1.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06"
    />
  </svg>
);
export default SvgArrowUpbulk;
