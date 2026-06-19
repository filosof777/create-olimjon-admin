import React from "react";
import { useIcon } from "../IconContext";

const CommandIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M8 8h8v8H8z"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M16 16.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"/></svg>
  );
};

export default CommandIcon;