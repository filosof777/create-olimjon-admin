import React from "react";
import { useIcon } from "../IconContext";

const StopwatchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M12 13V9"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 2h4"/></svg>
  );
};

export default StopwatchIcon;