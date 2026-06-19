import React from "react";
import { useIcon } from "../IconContext";

const RecordCircle1Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="M18.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path  stroke="currentColor"  strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M8 14.5h8"/></svg>
  );
};

export default RecordCircle1Icon;