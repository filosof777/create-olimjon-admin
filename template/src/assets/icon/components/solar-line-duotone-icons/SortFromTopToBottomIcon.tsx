import React from "react";
import { useIcon } from "../IconContext";

const SortFromTopToBottomIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4 16h9"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M6 11h7"  opacity=".7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 6h5"  opacity=".3"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M17 4v16l3-4"/></svg>
  );
};

export default SortFromTopToBottomIcon;