import React from "react";
import { useIcon } from "../IconContext";

const MusicNote2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M13 18V2"  opacity=".5"/><circle cx="9" cy="18" r="4"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M19 8a6 6 0 0 1-6-6"/></svg>
  );
};

export default MusicNote2Icon;