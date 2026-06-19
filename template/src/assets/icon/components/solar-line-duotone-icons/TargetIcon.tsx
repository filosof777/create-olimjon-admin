import React from "react";
import { useIcon } from "../IconContext";

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 12h3m14 0h3M12 22v-3m0-14V2"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M12 12h-2m2 0h2m-2 0v2m0-2v-2"/></svg>
  );
};

export default TargetIcon;