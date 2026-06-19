import React from "react";
import { useIcon } from "../IconContext";

const ListIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M4 17h7m-7-5h7M4 7h7"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M17 4v16m0-16-3 4m3-4 3 4m-3 12 3-4m-3 4-3-4"/></svg>
  );
};

export default ListIcon;