import React from "react";
import { useIcon } from "../IconContext";

const SunsetIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M8 22h8"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M5 19h14"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M2 16h20"/><path  stroke="currentColor"  strokeWidth="1.5" d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"  opacity=".5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="1.5" d="M12 6v6m0 0 2-2m-2 2-2-2"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.393M5.322 5.322l-.393-.393"  opacity=".5"/></svg>
  );
};

export default SunsetIcon;