import React from "react";
import { useIcon } from "../IconContext";

const MusicNoteIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M9 19V8m12 9V6"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m15.735 3.755-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398-.831-.599-2.032-.198-4.435.603Z"/></svg>
  );
};

export default MusicNoteIcon;