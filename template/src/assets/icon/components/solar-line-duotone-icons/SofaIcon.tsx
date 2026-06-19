import React from "react";
import { useIcon } from "../IconContext";

const SofaIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20 19v-1M4 19v-1"  opacity=".5"/></svg>
  );
};

export default SofaIcon;