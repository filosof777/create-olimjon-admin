import React from "react";
import { useIcon } from "../IconContext";

const LinkMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 12h6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 18H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1"  opacity=".5"/></svg>
  );
};

export default LinkMinimalisticIcon;