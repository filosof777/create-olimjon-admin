import React from "react";
import { useIcon } from "../IconContext";

const ScissorsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7.599 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/></svg>
  );
};

export default ScissorsIcon;