import React from "react";
import { useIcon } from "../IconContext";

const UserSpeakIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="10" cy="6" r="4"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 2s2 1.2 2 4-2 4-2 4m-2-6s1 .6 1 2-1 2-1 2"/></svg>
  );
};

export default UserSpeakIcon;