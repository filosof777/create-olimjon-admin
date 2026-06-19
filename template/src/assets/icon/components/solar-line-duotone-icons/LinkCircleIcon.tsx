import React from "react";
import { useIcon } from "../IconContext";

const LinkCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 12a6 6 0 1 1-6-6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 12a6 6 0 1 1 6 6"  opacity=".5"/></svg>
  );
};

export default LinkCircleIcon;