import * as React from "react";
import type { SVGProps } from "react";
const SvgAddbroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 18V6M16 12h2M6 12h5.66M12 18V6"
    />
  </svg>
);
export default SvgAddbroken;
