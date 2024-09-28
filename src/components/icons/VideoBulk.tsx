import * as React from "react";
import type { SVGProps } from "react";
const SvgVideobulk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#171717"
      d="M13.5 3.25h-6C4.08 3.25 2.75 4.58 2.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.42 0 4.75-1.33 4.75-4.75V8c0-3.42-1.33-4.75-4.75-4.75"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M12 11.38a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76M22.15 6.17c-.41-.21-1.27-.45-2.44.37l-1.48 1.04c.01.14.02.27.02.42v8c0 .15-.02.28-.02.42l1.48 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.1.85-.2.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21"
    />
  </svg>
);
export default SvgVideobulk;
