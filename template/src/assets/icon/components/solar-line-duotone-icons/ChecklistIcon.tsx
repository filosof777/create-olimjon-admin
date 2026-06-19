import React from "react";
import { useIcon } from "../IconContext";

const ChecklistIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M2 5.5 3.214 7 7.5 3"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M2 12.5 3.214 14 7.5 10"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M2 19.5 3.214 21 7.5 17"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 19H12"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 12H12"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 5H12"/></svg>
  );
};

export default ChecklistIcon;