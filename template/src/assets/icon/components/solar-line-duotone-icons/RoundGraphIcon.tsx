import React from "react";
import { useIcon } from "../IconContext";

const RoundGraphIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 0 1 3-7.141"  opacity=".4"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M5 12a7 7 0 1 0 7-7"  opacity=".7"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M12 16a4 4 0 0 0 0-8"/></svg>
  );
};

export default RoundGraphIcon;