import React from "react";
import { useIcon } from "../IconContext";

const TestTubeMinimalisticIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M21 9.849 14.182 3m.681.685 5.376 5.399L13 16.354l-3.512 3.528a3.79 3.79 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="m6.8 11.783 1.275.142a2.205 2.205 0 0 1 1.944 1.953 2.21 2.21 0 0 0 1.32 1.787l1.661.69"  opacity=".5"/></svg>
  );
};

export default TestTubeMinimalisticIcon;