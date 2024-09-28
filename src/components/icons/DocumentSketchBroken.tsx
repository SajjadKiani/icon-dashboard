import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentSketchbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.79 17.7c-.35.35-.93.35-1.28 0l-2.46-2.46a.935.935 0 0 1-.11-1.14l1.13-1.7c.15-.22.49-.4.75-.4h2.65c.27 0 .61.18.75.4l1.13 1.7c.23.34.18.85-.11 1.14"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 9c0-5 2-7 7-7h5M22.5 10v5c0 5-2 7-7 7h-6c-5 0-7-2-7-7v-2.02M18.5 10c-3 0-4-1-4-4V2l8 8"
    />
  </svg>
);
export default SvgDocumentSketchbroken;
