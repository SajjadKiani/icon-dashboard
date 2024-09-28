import * as React from "react";
import type { SVGProps } from "react";
const SvgGallerybulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 7.81v6.09l-1.63-1.4c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-4.92 3.3-.11.08c-.37-.8-.56-1.75-.56-2.84V7.81C2.5 4.17 4.67 2 8.31 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M9.5 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76M22.5 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H8.31c-2.55 0-4.39-1.07-5.25-2.97l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0z"
    />
  </svg>
);
export default SvgGallerybulk;
