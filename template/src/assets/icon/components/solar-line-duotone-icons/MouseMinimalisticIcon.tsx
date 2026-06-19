import React from "react";
import { useIcon } from "../IconContext";

const MouseMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 5v3"  opacity=".5"/></svg>
  );
};

export default MouseMinimalisticIcon;