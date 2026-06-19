import React from "react";
import { useIcon } from "../IconContext";

const GpsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 12h2m16 0h2M12 4V2m0 20v-2"  opacity=".5"/></svg>
  );
};

export default GpsIcon;