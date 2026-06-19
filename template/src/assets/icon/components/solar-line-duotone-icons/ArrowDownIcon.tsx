import React from "react";
import { useIcon } from "../IconContext";

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  fill="currentColor" d="M12.75 4a.75.75 0 0 0-1.5 0zm-1.5 0v16h1.5V4z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m18 14-6 6-6-6"/></svg>
  );
};

export default ArrowDownIcon;