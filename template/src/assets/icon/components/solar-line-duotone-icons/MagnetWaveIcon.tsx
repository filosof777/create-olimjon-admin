import React from "react";
import { useIcon } from "../IconContext";

const MagnetWaveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M18 18v1.5a1.5 1.5 0 0 1-1.5 1.5H11a9 9 0 1 1 0-18h5.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-5.556a4.5 4.5 0 0 0 0 9H16.5A1.5 1.5 0 0 1 18 18"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M14.444 3v4.5m0 9V21"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6"  opacity=".7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19.5 9s.5.9.5 3-.5 3-.5 3"  opacity=".4"/></svg>
  );
};

export default MagnetWaveIcon;