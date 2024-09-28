import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeDislikelinear = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m4.936 20.28 1.77 1.37c.23.23.74.34 1.09.34h2.17c.69 0 1.43-.51 1.6-1.2l1.37-4.17c.29-.8-.23-1.49-1.09-1.49h-2.29a.58.58 0 0 1-.57-.69l.29-1.83c.11-.51-.23-1.09-.74-1.26-.46-.17-1.03.06-1.26.4l-2.34 3.49"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.016 20.28v-5.6c0-.8.34-1.09 1.14-1.09h.57c.8 0 1.14.29 1.14 1.09v5.6c0 .8-.34 1.09-1.14 1.09h-.57c-.8 0-1.14-.28-1.14-1.09"
    />
    <path
      stroke="#171717"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m19.096 3.72-1.77-1.37c-.23-.23-.74-.34-1.09-.34h-2.17c-.69 0-1.43.51-1.6 1.2l-1.37 4.17c-.29.8.23 1.49 1.09 1.49h2.29c.34 0 .63.29.57.69l-.29 1.83c-.11.51.23 1.09.74 1.26.46.17 1.03-.06 1.26-.4l2.34-3.49"
    />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.016 3.72v5.6c0 .8-.34 1.09-1.14 1.09h-.57c-.8 0-1.14-.29-1.14-1.09v-5.6c0-.8.34-1.09 1.14-1.09h.57c.8 0 1.14.28 1.14 1.09"
    />
  </svg>
);
export default SvgLikeDislikelinear;
