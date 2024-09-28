import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 12.63c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.66.75-.13 1.92.87 1.92h3.09v7.2c0 1.06 1.32 1.56 2.02.76l4.63-5.26M8.5 4h-7M7.5 20h-6M4.5 12h-3"
    />
  </svg>
);
export default SvgFlashbroken;
