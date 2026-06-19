import React from "react";
import { useIcon } from "../IconContext";

const SmartVacuumCleanerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 18v-2"  opacity=".5"/></svg>
  );
};

export default SmartVacuumCleanerIcon;