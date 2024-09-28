import * as React from "react";
import type { SVGProps } from "react";
const SvgBilloutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 22.25c-.82 0-1.64-.26-2.32-.77l-5.21-3.9a3.9 3.9 0 0 1-1.55-3.1V1.76h18.16v12.72c0 1.21-.58 2.37-1.55 3.1l-5.21 3.9c-.68.51-1.5.77-2.32.77m-7.58-19v11.22c0 .74.36 1.45.95 1.9l5.21 3.9c.84.63 2.01.63 2.85 0l5.21-3.9c.59-.45.95-1.16.95-1.9V3.25z"
    />
    <path
      fill="#171717"
      d="M22.5 3.25h-20c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75M16.5 8.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75M16.5 13.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgBilloutline;
