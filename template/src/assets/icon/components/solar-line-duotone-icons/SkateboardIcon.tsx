import React from "react";
import { useIcon } from "../IconContext";

const SkateboardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"  opacity=".5"/><circle cx="7" cy="15" r="2"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="17" cy="15" r="2"  stroke="currentColor"  strokeWidth="1.5"/></svg>
  );
};

export default SkateboardIcon;