import React from "react";
import { useIcon } from "../IconContext";

const ArrowLeftUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M17.47 18.53a.75.75 0 1 0 1.06-1.06zm1.06-1.06-12-12-1.06 1.06 12 12z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M15 6H6v9"/></svg>
  );
};

export default ArrowLeftUpIcon;