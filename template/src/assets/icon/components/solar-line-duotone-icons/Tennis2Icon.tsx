import React from "react";
import { useIcon } from "../IconContext";

const Tennis2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M3.34 17c2.76 4.783 8.877 6.42 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731 9.99 9.99 0 0 0-.537-8.93 9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"/><path  stroke="currentColor" stroke-dasharray="1.5 2"  strokeWidth="1.5" d="M13.196 2.071s-1.098 4.099 1.402 8.43 6.599 5.428 6.599 5.428M2.803 8.071s4.099 1.099 6.599 5.43 1.402 8.428 1.402 8.428"  opacity=".5"/></svg>
  );
};

export default Tennis2Icon;