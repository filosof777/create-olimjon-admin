import React from "react";
import { useIcon } from "../IconContext";

const PillsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.253 2.563a5.437 5.437 0 0 1-7.69 0l-5.126-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M14.5 6.5 13 5"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M6.73 10.135a6 6 0 1 0 7.143 7.098"  opacity=".5"/></svg>
  );
};

export default PillsIcon;