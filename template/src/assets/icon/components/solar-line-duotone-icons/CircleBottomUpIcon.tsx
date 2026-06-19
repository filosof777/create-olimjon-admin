import React from "react";
import { useIcon } from "../IconContext";

const CircleBottomUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m3 21 8-8m0 0H5m6 0v6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"  opacity=".5"/></svg>
  );
};

export default CircleBottomUpIcon;