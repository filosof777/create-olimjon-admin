import React from "react";
import { useIcon } from "../IconContext";

const MagnetIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M21 18.5v2a1.5 1.5 0 0 1-1.5 1.5H13C7.477 22 3 17.523 3 12S7.477 2 13 2h6.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H13a5 5 0 0 0 0 10h6.5a1.5 1.5 0 0 1 1.5 1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M17 2v5m0 10v5"  opacity=".5"/></svg>
  );
};

export default MagnetIcon;