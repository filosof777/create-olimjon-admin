import React from "react";
import { useIcon } from "../IconContext";

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4 18V6m16 0v12"/><path  stroke="currentColor"  strokeWidth="1.5" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
  );
};

export default DatabaseIcon;