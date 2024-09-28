import * as React from "react";
import type { SVGProps } from "react";
const SvgNotebulk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.87 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.87A4.87 4.87 0 0 0 3 8.37v8.75C3 19.82 5.18 22 7.87 22"
      opacity={0.4}
    />
    <path
      fill="#171717"
      d="M8.79 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76M16.21 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76M15.28 13.71H7.86a.749.749 0 1 1 0-1.5h7.42a.749.749 0 1 1 0 1.5M12.5 17.42H7.86a.749.749 0 1 1 0-1.5h4.64a.749.749 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgNotebulk;
