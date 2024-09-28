import * as React from "react";
import type { SVGProps } from "react";
const SvgMapbold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#171717" clipPath="url(#map_bold_svg__a)">
      <path d="M7.63 3.57c.18-.098.37.053.37.257v13.556c0 .223-.152.412-.35.516l-.02.011-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73zM14.722 6.102A.5.5 0 0 1 15 6.55v13.153a.5.5 0 0 1-.717.45l-4.25-2.047a.5.5 0 0 1-.283-.45V4.446a.5.5 0 0 1 .722-.448zM22 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-3.491 2.001a.5.5 0 0 1-.749-.434V6.33a.5.5 0 0 1 .252-.434L19.01 4.75C20.65 3.81 22 4.59 22 6.49" />
    </g>
    <defs>
      <clipPath id="map_bold_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapbold;
