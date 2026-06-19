import React from "react";
import { useIcon } from "../IconContext";

const UserSpeakRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <ellipse
        cx="10"
        cy="17"
        stroke="#1C274C"
        strokeWidth="1.5"
        opacity=".5"
        rx="7"
        ry="4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 2s2 1.2 2 4-2 4-2 4m-2-6s1 .6 1 2-1 2-1 2"
      />
    </svg>
  );
};

export default UserSpeakRoundedIcon;
