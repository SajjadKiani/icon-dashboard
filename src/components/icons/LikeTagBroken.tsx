import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeTagbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m9.666 13.8 1.61 1.25c.21.21.68.31.99.31h1.98c.62 0 1.3-.47 1.46-1.09l1.25-3.79c.26-.73-.21-1.35-.99-1.35h-2.08c-.31 0-.57-.26-.52-.62l.26-1.66c.1-.47-.21-.99-.68-1.14-.42-.16-.94.05-1.14.36l-2.13 3.17"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.016 13.8V8.71c0-.73.31-.99 1.04-.99h.52c.73 0 1.04.26 1.04.99v5.09c0 .73-.31.99-1.04.99h-.52c-.73 0-1.04-.26-1.04-.99"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.016 4.97c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V9.07"
    />
  </svg>
);
export default SvgLikeTagbroken;
