import React from "react";
import { useIcon } from "../IconContext";

const SortVerticalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M16 18V6m0 0 4 4.125M16 6l-4 4.125"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M8 6v12m0 0 4-4.125M8 18l-4-4.125"/></svg>
  );
};

export default SortVerticalIcon;