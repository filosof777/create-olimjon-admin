import React from "react";
import { useIcon } from "../IconContext";

const Reorder1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 10H5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 14H5m14-8H5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 18H5"/></svg>
  );
};

export default Reorder1Icon;