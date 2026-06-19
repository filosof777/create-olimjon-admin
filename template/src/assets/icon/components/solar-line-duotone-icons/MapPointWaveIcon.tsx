import React from "react";
import { useIcon } from "../IconContext";

const MapPointWaveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515Z"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-.718.374-1.398 1.04-2"/></svg>
  );
};

export default MapPointWaveIcon;