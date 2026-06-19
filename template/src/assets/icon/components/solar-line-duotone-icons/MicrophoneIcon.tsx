import React from "react";
import { useIcon } from "../IconContext";

const MicrophoneIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M13 8h4m-4 3h4m3-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"  opacity=".5"/></svg>
  );
};

export default MicrophoneIcon;