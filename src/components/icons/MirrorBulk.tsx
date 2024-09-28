import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorbulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#171717"
      d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M18 22.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgMirrorbulk;
