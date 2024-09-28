import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 22h20M21 16.03V15A9 9 0 0 0 8 6.94 8.994 8.994 0 0 0 3 15v7h18v-2.03M12 2v1M4 4l1 1M20 4l-1 1"
    />
  </svg>
);
export default SvgAlarmbroken;
