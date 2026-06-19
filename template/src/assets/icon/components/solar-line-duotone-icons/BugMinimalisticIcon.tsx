import React from "react";
import { useIcon } from "../IconContext";

const BugMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 13h3M5 13H2m18.5-6-1.798.72M3.5 7l1.798.72M14.5 3.5 17 2M9.5 3.5 7 2m13.5 17-2-.8m-15 .8 2-.8m5-7.7h3m-3 5h3"  opacity=".5"/></svg>
  );
};

export default BugMinimalisticIcon;