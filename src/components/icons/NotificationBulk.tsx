import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationbulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path fill="#171717" d="M19.016 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill="#171717"
      d="M19.016 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.72.19-1.39.49-2h-7.47c-3.45 0-5.52 2.06-5.52 5.52v7.95c0 3.47 2.07 5.53 5.52 5.53h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01c-.6.3-1.27.49-1.99.49"
      opacity={0.4}
    />
  </svg>
);
export default SvgNotificationbulk;
