import React from "react";
import { useIcon } from "../IconContext";

const SleepingCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"/><path  fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="m17 4 3.464-2L19 7.464l3.464-2m-8.416.036 1.732 1-2.732.732 1.732 1"/><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"  opacity=".5"/></svg>
  );
};

export default SleepingCircleIcon;