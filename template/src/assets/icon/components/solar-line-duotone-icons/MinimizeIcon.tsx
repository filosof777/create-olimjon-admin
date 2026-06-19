import React from "react";
import { useIcon } from "../IconContext";

const MinimizeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m2 22 7-7m0 0H3.143M9 15v5.857"  opacity=".6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m22 2-7 7m0 0h5.857M15 9V3.143"/></svg>
  );
};

export default MinimizeIcon;