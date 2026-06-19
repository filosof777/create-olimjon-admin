import React from "react";
import { useIcon } from "../IconContext";

const SafeCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M7 8v8"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m16 10 1-1m-6 6 1-1m0-4-1-1m6 6-1-1"  opacity=".5"/></svg>
  );
};

export default SafeCircleIcon;