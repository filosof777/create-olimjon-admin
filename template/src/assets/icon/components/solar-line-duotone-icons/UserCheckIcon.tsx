import React from "react";
import { useIcon } from "../IconContext";

const UserCheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="6" r="4"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="18" cy="16" r="4"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m16.667 16 .833 1 1.833-1.889"/><path  stroke="currentColor"  strokeWidth="1.5" d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5"  opacity=".5"/></svg>
  );
};

export default UserCheckIcon;