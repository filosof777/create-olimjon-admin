import React from "react";
import { useIcon } from "../IconContext";

const PlaylistMinimalistic2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M15 6H3m10 4H3m6 4H3m5 4H3"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M17 16.5V8"/><circle cx="14.5" cy="16.5" r="2.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M21 12a4 4 0 0 1-4-4"/></svg>
  );
};

export default PlaylistMinimalistic2Icon;