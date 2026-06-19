import React from "react";
import { useIcon } from "../IconContext";

const RestartIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      className={`${className} ${props.className || ""}`}
    >
      <g
        stroke="#1C274C"
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth="1.5"
        clip-path="url(#a)"
      >
        <path d="M19.729 10.929a8 8 0 1 1-2.072-3.585l.707.706" opacity=".5" />
        <path d="M14.121 8.05h4.243V3.808" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RestartIcon;
