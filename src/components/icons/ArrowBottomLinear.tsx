import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBottomlinear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 6.5h2.67c3.31 0 4.67 2.35 3.01 5.22l-1.34 2.31L15 16.34c-1.66 2.87-4.37 2.87-6.03 0l-1.34-2.31-1.34-2.31C4.66 8.85 6.01 6.5 9.33 6.5z"
    />
  </svg>
);
export default SvgArrowBottomlinear;
