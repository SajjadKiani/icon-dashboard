import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinbulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.009 17.98a7.99 7.99 0 1 0 0-15.98 7.99 7.99 0 0 0 0 15.98"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M21.989 15.99c0 3.3-2.68 5.98-5.98 5.98a5.97 5.97 0 0 1-4.91-2.57 9.46 9.46 0 0 0 8.32-8.32 5.97 5.97 0 0 1 2.57 4.91M11.469 9.71l-2.4-.84c-.24-.08-.29-.1-.29-.45 0-.26.18-.47.41-.47h1.5c.32 0 .58.29.58.65 0 .41.34.75.75.75s.75-.34.75-.75c0-1.15-.89-2.09-2-2.14v-.05a.749.749 0 1 0-1.5 0v.05h-.09c-1.05 0-1.91.88-1.91 1.97 0 .95.42 1.56 1.29 1.86l2.41.84c.24.08.29.1.29.45 0 .26-.18.47-.41.47h-1.5c-.32 0-.58-.29-.58-.65 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.15.89 2.09 2 2.14v.06c0 .41.34.75.75.75s.75-.34.75-.75v-.05h.09c1.05 0 1.91-.88 1.91-1.97 0-.95-.43-1.56-1.3-1.87"
    />
  </svg>
);
export default SvgCoinbulk;
