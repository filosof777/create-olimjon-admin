import React from "react";
import { useIcon } from "../IconContext";

const WheelIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className } = useIcon();
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24" {...props} className={`${className} ${props.className || ""}`}><circle cx="12" cy="12" r="10"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="12" cy="12" r="6"  stroke="currentColor"  strokeWidth="1.5"/><circle cx="12" cy="12" r="2"  stroke="currentColor"  strokeWidth="1.5"/><path  stroke="currentColor"  strokeLinecap="round"  strokeWidth="1.5" d="M6 12h4m4 0h4m-9 5.196 2-3.464m2-3.464 2-3.464m0 10.392-2-3.464m-2-3.464L9 6.804"  opacity=".5"/></svg>
  );
};

export default WheelIcon;