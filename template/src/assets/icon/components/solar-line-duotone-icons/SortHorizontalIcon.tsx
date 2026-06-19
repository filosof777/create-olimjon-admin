import React from "react";
import { useIcon } from "../IconContext";

const SortHorizontalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M18 8H6m0 0 4.125-4M6 8l4.125 4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M6 16h12m0 0-4.125-4M18 16l-4.125 4"  opacity=".5"/></svg>
  );
};

export default SortHorizontalIcon;