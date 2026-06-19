import React from "react";
import { useIcon } from "../IconContext";

const MinimalisticMagniferBugIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="11.5" cy="11.5" r="9.5"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5 1 .5m-7-.5-1 .5m7-5.5 1-.5m-7 .5-1-.5M20 20l2 2"/></svg>
  );
};

export default MinimalisticMagniferBugIcon;