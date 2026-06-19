import React from "react";
import { useIcon } from "../IconContext";

const Flag2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M5 22V2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m5 14 2.47-.494a8.7 8.7 0 0 1 4.925.452 8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.084 7.3 7.3 0 0 1-4.482-.305l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4"  opacity=".5"/></svg>
  );
};

export default Flag2Icon;