import React from "react";
import { useIcon } from "../IconContext";

const GolfIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <ellipse
        cx="12"
        cy="18.5"
        stroke="#1C274C"
        strokeWidth="1.5"
        opacity=".5"
        rx="10"
        ry="3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18V2m0 1.5 5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"
      />
    </svg>
  );
};

export default GolfIcon;
