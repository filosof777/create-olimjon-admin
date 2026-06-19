import React from "react";
import { useIcon } from "../IconContext";

const LinkRoundIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10"/></svg>
  );
};

export default LinkRoundIcon;