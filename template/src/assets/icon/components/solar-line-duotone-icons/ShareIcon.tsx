import React from "react";
import { useIcon } from "../IconContext";

const ShareIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M9 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14.32 16.802 9 13.29m5.42-6.45L9.1 10.352"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M19 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
  );
};

export default ShareIcon;