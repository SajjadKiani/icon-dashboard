import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordlinear = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
  </svg>
);
export default SvgRecordlinear;
