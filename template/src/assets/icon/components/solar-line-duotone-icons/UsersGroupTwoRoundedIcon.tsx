import React from "react";
import { useIcon } from "../IconContext";

const UsersGroupTwoRoundedIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4"
        opacity=".5"
      />
      <ellipse
        cx="12"
        cy="17"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="6"
        ry="4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"
        opacity=".5"
      />
    </svg>
  );
};

export default UsersGroupTwoRoundedIcon;
