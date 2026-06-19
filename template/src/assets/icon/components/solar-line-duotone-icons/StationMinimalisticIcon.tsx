import React from "react";
import { useIcon } from "../IconContext";

const StationMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913"  opacity=".4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8.988 12.004A4.24 4.24 0 0 1 7.8 9.054c0-2.337 1.88-4.232 4.2-4.232s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917"  opacity=".7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m16 22-4-12-4 12"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14.5 17.5h-5"/></svg>
  );
};

export default StationMinimalisticIcon;