import * as React from "react";
import type { SVGProps } from "react";
const SvgLikelinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.016 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.296 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45 0-1.39 1.12-2.51 2.5-2.51.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51-.01 3.15-2.92 5-4.22 5.45"
    />
  </svg>
);
export default SvgLikelinear;
