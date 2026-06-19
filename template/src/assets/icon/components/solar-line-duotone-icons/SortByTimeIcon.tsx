import React from "react";
import { useIcon } from "../IconContext";

const SortByTimeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 7H2m6 5H2m8 5H2"  opacity=".5"/><circle cx="17" cy="12" r="5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M17 10v1.846L18 13"/></svg>
  );
};

export default SortByTimeIcon;