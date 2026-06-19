import React from "react";
import { useIcon } from "../IconContext";

const PlaybackSpeedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/><path  stroke="currentColor" stroke-dasharray="4 3"  strokeLinecap="round"  strokeWidth="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.977 2 12.5 2"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"/></svg>
  );
};

export default PlaybackSpeedIcon;