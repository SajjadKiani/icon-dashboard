import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBottombulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#171717"
      d="M9.33 6.5h5.34c3.32 0 4.67 2.35 3.02 5.22L16.95 13c-.18.31-.51.5-.87.5H7.92c-.36 0-.69-.19-.87-.5l-.74-1.28C4.66 8.85 6.01 6.5 9.33 6.5"
    />
    <path
      fill="#171717"
      d="M8.79 14.5h6.43c.39 0 .63.42.43.75l-.64 1.1c-1.65 2.87-4.37 2.87-6.02 0l-.64-1.1c-.19-.33.05-.75.44-.75"
      opacity={0.4}
    />
  </svg>
);
export default SvgArrowBottombulk;
