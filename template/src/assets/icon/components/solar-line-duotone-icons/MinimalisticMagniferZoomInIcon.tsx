import React from "react";
import { useIcon } from "../IconContext";

const MinimalisticMagniferZoomInIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="11.5" cy="11.5" r="9.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2"/></svg>
  );
};

export default MinimalisticMagniferZoomInIcon;