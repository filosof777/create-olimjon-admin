import React from "react";
import { useIcon } from "../IconContext";

const SortIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M22 7H2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 12H5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M16 17H8"/></svg>
  );
};

export default SortIcon;