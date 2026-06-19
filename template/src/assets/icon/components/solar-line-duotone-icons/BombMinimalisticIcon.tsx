import React from "react";
import { useIcon } from "../IconContext";

const BombMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="9.5" cy="14.5" r="7.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m17 7-2 2"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m19.5 7.5 1 .5M16 3.5l.5 1M19 5l1-1"/></svg>
  );
};

export default BombMinimalisticIcon;