import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartbulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.016 8.69c0 1.19-.19 2.29-.52 3.31H2.536c-.33-1.02-.52-2.12-.52-3.31 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.55 5.55 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59"
    />
    <path
      fill="#171717"
      d="M21.496 12c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0-2.41-.82-7.28-3.81-8.86-8.81z"
      opacity={0.4}
    />
  </svg>
);
export default SvgHeartbulk;
