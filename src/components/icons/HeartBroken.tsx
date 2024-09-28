import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.606 4.97c.88.99 1.41 2.29 1.41 3.72 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-2.9-1-9.38-5.13-9.38-12.13 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24"
    />
  </svg>
);
export default SvgHeartbroken;
