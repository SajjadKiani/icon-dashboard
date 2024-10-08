import * as React from "react";
import type { SVGProps } from "react";
const SvgPictureFramebold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#171717" clipPath="url(#picture-frame_bold_svg__a)">
      <path d="m10.51 11.22-2.2-8.83a.505.505 0 0 0-.5-.39C4.6 2 2 4.6 2 7.81v5.7c0 .34.33.59.66.49l7.5-2.17a.5.5 0 0 0 .35-.61M11.12 13.68a.515.515 0 0 0-.64-.37l-8.11 2.36c-.22.07-.37.27-.37.5v.02C2 19.4 4.6 22 7.81 22h4.72c.33 0 .58-.31.5-.64zM16.19 2h-5.75c-.33 0-.58.31-.5.64l4.74 18.97c.06.23.26.39.5.39h1C19.4 22 22 19.4 22 16.19V7.81C22 4.6 19.4 2 16.19 2" />
    </g>
    <defs>
      <clipPath id="picture-frame_bold_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPictureFramebold;
