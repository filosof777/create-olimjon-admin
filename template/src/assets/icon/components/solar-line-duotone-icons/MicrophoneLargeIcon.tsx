import React from "react";
import { useIcon } from "../IconContext";

const MicrophoneLargeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 6.5s.473-.5 2-.5 2 .5 2 .5m-4 3s.473-.5 2-.5 2 .5 2 .5m7 1.5v2a9 9 0 1 1-18 0v-2"  opacity=".5"/></svg>
  );
};

export default MicrophoneLargeIcon;