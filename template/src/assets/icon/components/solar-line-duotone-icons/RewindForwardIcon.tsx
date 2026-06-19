import React from "react";
import { useIcon } from "../IconContext";

const RewindForwardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeWidth="1.5" d="m11 8.768-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232"  opacity=".5"/><path  stroke="currentColor"  strokeWidth="1.5" d="M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"/></svg>
  );
};

export default RewindForwardIcon;