import * as React from "react";
import type { SVGProps } from "react";
const SvgBrushbulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#171717" d="M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2" />
    <path
      fill="#171717"
      d="M4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32z"
      opacity={0.4}
    />
  </svg>
);
export default SvgBrushbulk;
