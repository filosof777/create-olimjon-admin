import React from "react";
import { useIcon } from "../IconContext";

const RoundDoubleAltArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m9 15.5 3-3 3 3m-6-4 3-3 3 3"/></svg>
  );
};

export default RoundDoubleAltArrowUpIcon;