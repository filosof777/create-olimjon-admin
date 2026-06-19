import React from "react";
import { useIcon } from "../IconContext";

const Rewind5SecondsForwardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M10 4.5 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-4.1-2.468-7.625-6-9.168"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"/></svg>
  );
};

export default Rewind5SecondsForwardIcon;