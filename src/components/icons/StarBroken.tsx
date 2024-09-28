import * as React from "react";
import type { SVGProps } from "react";
const SvgStarbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M21.336 11.91c1.17-1.17.79-2.35-.84-2.63l-2.55-.42c-.43-.07-.94-.45-1.13-.84l-1.41-2.82c-.76-1.53-2.01-1.53-2.77 0l-1.41 2.82c-.19.39-.7.76-1.13.84l-2.55.42c-1.63.27-2.01 1.45-.84 2.63l1.99 1.99c.33.33.52.98.41 1.45l-.57 2.46c-.45 1.94.59 2.7 2.3 1.68l2.39-1.42c.43-.26 1.15-.26 1.58 0l2.39 1.42c1.71 1.01 2.75.26 2.3-1.68l-.57-2.46M8.016 5h-6M5.016 19h-3M3.016 12h-1"
    />
  </svg>
);
export default SvgStarbroken;
