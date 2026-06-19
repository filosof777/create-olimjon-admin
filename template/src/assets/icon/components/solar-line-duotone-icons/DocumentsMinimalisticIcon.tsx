import React from "react";
import { useIcon } from "../IconContext";

const DocumentsMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 13h6"  opacity=".7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 9h6"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M9 17h3"  opacity=".4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 19V5m20 14V5"  opacity=".5"/></svg>
  );
};

export default DocumentsMinimalisticIcon;