import * as React from "react";
import type { SVGProps } from "react";
const SvgChartFailbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.246 20.77 3.54-3.54M20.786 20.77l-3.54-3.54M7.016 10.5v3M12.016 10.5v3M17.016 10.5v3M2.016 13v2c0 5 2 7 7 7h4M22.016 13V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7"
    />
  </svg>
);
export default SvgChartFailbroken;
