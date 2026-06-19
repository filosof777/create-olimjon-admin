import React from "react";
import { useIcon } from "../IconContext";

const History2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M12 9v4h4"  opacity=".5"/><circle cx="12" cy="12" r="10"  stroke="currentColor" stroke-dasharray="0.5 3.5"  strokeLinecap="round"  strokeWidth="1.5"  opacity=".5"/></svg>
  );
};

export default History2Icon;