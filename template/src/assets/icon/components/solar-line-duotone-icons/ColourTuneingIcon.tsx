import React from "react";
import { useIcon } from "../IconContext";

const ColourTuneingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 12h7.5M22 12h-7.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10S10.412 2 8.144 2c-1.734 0-4 3-4 6.316"/></svg>
  );
};

export default ColourTuneingIcon;