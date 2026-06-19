import React from "react";
import { useIcon } from "../IconContext";

const ConfoundedCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m8 12 2-1.5L8 9m8 3-2-1.5L16 9m-1 7-1-1-1 1-1-1-1 1-1-1-1 1"/></svg>
  );
};

export default ConfoundedCircleIcon;