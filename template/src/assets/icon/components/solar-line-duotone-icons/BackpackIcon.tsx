import React from "react";
import { useIcon } from "../IconContext";

const BackpackIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M3 10.911v-.18a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.078 0l.167.037.176.04A6 6 0 0 1 21 10.91v5.464a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.376z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M17.5 15.5V17M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M3 14a22.16 22.16 0 0 0 18 0"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M10 13h4"  opacity=".5"/></svg>
  );
};

export default BackpackIcon;