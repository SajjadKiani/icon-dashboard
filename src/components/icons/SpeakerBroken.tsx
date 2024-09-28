import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeakerbroken = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5 13.99V6c0-3 1-4 4-4h6c3 0 4 1 4 4v12c0 3-1 4-4 4H9c-3 0-4-1-4-4"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6M13.5 7.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5S11.17 9 12 9"
    />
  </svg>
);
export default SvgSpeakerbroken;
