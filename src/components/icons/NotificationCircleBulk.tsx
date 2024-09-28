import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationCirclebulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.016 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.91.27-1.75.74-2.45a10 10 0 0 0-3.24-.55c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10c0-1.13-.2-2.22-.55-3.24-.7.47-1.54.74-2.45.74"
      opacity={0.4}
    />
  </svg>
);
export default SvgNotificationCirclebulk;
