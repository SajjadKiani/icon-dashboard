import * as React from "react";
import type { SVGProps } from "react";
const SvgShipbroken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.11 20.46c-1.17-.97-1.969-2.34-2.329-3.94l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0l5.51 2.21 1.42.57c.87.35 1.41 1.38 1.21 2.29l-.41 1.86c-.71 3.2-3.22 5.48-6.84 5.48h-4.76M12.001 22V10"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.001 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0l-5.51 2.21V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3M14.501 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z"
    />
  </svg>
);
export default SvgShipbroken;
