import React from "react";
import { useIcon } from "../IconContext";

const IncognitoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 11h20"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m4 11 .614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91L20 11"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33"  opacity=".5"/></svg>
  );
};

export default IncognitoIcon;